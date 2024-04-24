const {default: mongoose} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllSKUProcessFlowAttributes} = require("../../../../models/businessLeads/helpers/SKUProcessFlowHelper");
const SKUProcessFlowRepository = require("../../../../models/businessLeads/repository/SKUProcessFlowRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const ProcessMasterRepository = require("../../../../models/planning/repository/processMasterRepository");
const SKUMasterRepository = require("../../../../models/sales/repository/SKUMasterRepository");
const {getAllSKUCategory} = require("../../settings/SKUCategoryMaster/SKUCategoryMaster");
const {filteredProductCategoryMasterList} = require("../../../../models/settings/repository/productCategoryRepository");
const {insertMany} = require("../../../../models/settings/autoIncrementModel");
const Model = require("../../../../models/businessLeads/SKUProcessFlowModel");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllSKUProcessFlowAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company),
                    isActive: "A"
                }
            },
            {$project: {SKUNo: 1, SKUName: 1, SKUDescription: 1, productCategory: 1, primaryUnit: 1}},
            {
                $lookup: {
                    from: "SKUProcessFlow",
                    localField: "_id",
                    foreignField: "SKU",
                    pipeline: [{$project: {_id: 1}}],
                    as: "SKUProcessFlow"
                }
            },
            {
                $addFields: {
                    PFStatus: {$cond: [{$gt: [{$size: "$SKUProcessFlow"}, 0]}, "Active", "Inactive"]}
                }
            }
        ];
        let rows = await SKUMasterRepository.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        activeSKUCount: {$sum: 1},
                        SKULinkedWithPF: {$sum: {$cond: [{$eq: ["$PFStatus", "Active"]}, 1, 0]}},
                        SKUNotLinkedWithPF: {$sum: {$cond: [{$eq: ["$PFStatus", "Inactive"]}, 1, 0]}}
                    }
                },
                {
                    $project: {
                        _id: 0
                    }
                }
            ]
        });

        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.create = asyncHandler(async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        let existingData = await SKUProcessFlowRepository.findOneDoc({SKU: req.body.SKU});

        if (existingData) {
            existingData = await SKUProcessFlowRepository.findAndUpdateDoc({SKU: req.body.SKU}, req.body);
            res.success({
                message: MESSAGES.apiSuccessStrings.UPDATE("SKU Process Flow")
            });
        } else {
            await SKUProcessFlowRepository.createDoc(createdObj);
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("SKU Process Flow")
            });
        }
    } catch (e) {
        console.error("create SKU Process Flow", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await SKUProcessFlowRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await SKUProcessFlowRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("SKU Process Flow has been")
        });
    } catch (e) {
        console.error("update SKU Process Flow", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await SKUProcessFlowRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("SKU Process Flow")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("SKU Process Flow");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById SKU Process Flow", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await SKUProcessFlowRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("SKU Process Flow");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById SKU Process Flow", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const processMasterList = await ProcessMasterRepository.filteredProcessMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $project: {
                    _id: 0,
                    seq: null,
                    process: "$_id",
                    processId: 1,
                    processOriginalName: 1,
                    processName: 1,
                    sourceOfManufacturing: 1,
                    primaryAssetAllocation: 1,
                    unitProcessOutput: 1
                }
            }
        ]);
        return res.success({processMasterList});
    } catch (error) {
        console.error("getAllMasterData SKU Process Flow", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getBySKUId = asyncHandler(async (req, res) => {
    try {
        let pipeline = [
            {
                $match: {
                    _id: ObjectId(req.params.id)
                }
            },
            {
                $project: {
                    SKUNo: 1,
                    SKUName: 1,
                    SKUDescription: 1,
                    productCategory: 1
                }
            },
            {
                $lookup: {
                    from: "SKUProcessFlow",
                    localField: "_id",
                    foreignField: "SKU",
                    pipeline: [{$project: {PFDetails: 1}}],
                    as: "SKUProcessFlow"
                }
            },
            {
                $unwind: {path: "$SKUProcessFlow", preserveNullAndEmptyArrays: true}
            },
            {
                $project: {
                    SKUNo: 1,
                    SKUName: 1,
                    SKUDescription: 1,
                    productCategory: 1,
                    PFDetails: "$SKUProcessFlow.PFDetails"
                }
            }
        ];

        let existing = await SKUMasterRepository.filteredSKUMasterList(pipeline);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("SKU");
            return res.unprocessableEntity(errors);
        }

        return res.success(existing.length > 0 ? existing[0] : []);
    } catch (e) {
        console.error("getById SKU Process Flow", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllCopyFlowMasterData = asyncHandler(async (req, res) => {
    try {
        const SKUCategoryList = await getAllSKUCategory(req.user.company, null);
        const SKUList = await SKUMasterRepository.filteredSKUMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    isActive: "A"
                }
            },
            {
                $project: {
                    select: {$literal: false},
                    SKU: "$_id",
                    SKUNo: 1,
                    SKUName: 1,
                    SKUDescription: 1,
                    productCategory: 1,
                    primaryUnit: 1
                }
            },
            {
                $lookup: {
                    from: "SKUProcessFlow",
                    localField: "_id",
                    foreignField: "SKU",
                    pipeline: [{$project: {_id: 1}}],
                    as: "SKUProcessFlow"
                }
            },
            {
                $match: {
                    SKUProcessFlow: {$size: 0}
                }
            }
        ]);
        let productCategories = [];
        if (SKUCategoryList.length > 0) {
            productCategories = SKUCategoryList.map(x => {
                return {
                    label: x.displayProductCategoryName,
                    value: x.displayProductCategoryName
                    // application: x.application,
                    // productNumber: x.SKUCategoryName,
                    // productCode: x.productCode
                };
            });
        } else {
            productCategories = await filteredProductCategoryMasterList([
                {
                    $match: {
                        company: ObjectId(req.user.company),
                        categoryStatus: OPTIONS.defaultStatus.ACTIVE
                    }
                },
                {$sort: {seq: 1}},
                {
                    $project: {
                        // productNumber: 1,
                        // productCode: 1,
                        displayProductCategoryName: 1
                        // application: 1
                    }
                }
            ]);
            productCategories = productCategories.map(x => {
                return {
                    label: x.displayProductCategoryName,
                    value: x.displayProductCategoryName
                    // application: x.application,
                    // productNumber: x.productNumber,
                    // productCode: x.productCode
                };
            });
        }
        return res.success({productCategoryOptions: productCategories, SKUList});
    } catch (error) {
        console.error("getAllCopyFlowMasterData SKU Process Flow", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.createCopy = asyncHandler(async (req, res) => {
    try {
        let existingData = await SKUProcessFlowRepository.findOneDoc({SKU: req.body.SKU});
        if (!existingData) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("SKU Process Flow");
            return res.unprocessableEntity(errors);
        }
        let SKUPFArr = req.body.SKUArray.map(x => {
            return {SKU: x.SKU, PFDetails: existingData.PFDetails};
        });

        await SKUProcessFlowRepository.insertManyDoc(SKUPFArr);
        res.success({
            message: MESSAGES.apiSuccessStrings.ADDED("SKU Process Flow")
        });
    } catch (e) {
        console.error("create SKU Process Flow", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
