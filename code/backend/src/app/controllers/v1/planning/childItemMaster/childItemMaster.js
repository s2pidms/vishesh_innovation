const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/planning/childItemMasterModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {getIncrementNumWithPrefix} = require("../../../../helpers/utility");
const {generateCreateData, getMatchData, OPTIONS} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {getAllChildItemCategory} = require("../../settings/childItemCategory/childItemCategory");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {getGrandByBOMIdForChildItem} = require("../billOfMaterial/BoMOfGrandChildItem/BoMOfGrandChildItem");
const {CHILD_ITEM_CATEGORY_NAME} = require("../../../../mocks/constantData");
const {getChildByBOMIdForChildItem} = require("../billOfMaterial/BoMOfChildPart/BoMOfChildPart");
const {
    getAllChildItemMasterAttributes,
    getAllChildItemMasterExcelAttributes
} = require("../../../../models/planning/helpers/childItemMasterHelper");
const {filteredHSNList} = require("../../../../models/purchase/repository/hsnRepository");
const {filteredSupplierList} = require("../../../../models/purchase/repository/supplierRepository");
const {getAllChildItemAggregate} = require("../../../../models/planning/repository/childItemRepository");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const ObjectId = mongoose.Types.ObjectId;

exports.create = asyncHandler(async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const saveObj = new Model(createdObj);
        const itemDetails = await saveObj.save();
        if (itemDetails) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Child Item")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Child Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllChildItemMasterAttributes();
        if (req.query.excel == "true") {
            project = getAllChildItemMasterExcelAttributes();
        }
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company),
                    ...(!!req.query.childItemCategoryName && {
                        childItemCategory: req.query.childItemCategoryName
                    })
                }
            }
            // {
            //     $addFields: {
            //         serviceProviderDetails: {$first: "$serviceProviderDetails"}
            //     }
            // },
            // {
            //     $unwind: {
            //         path: "$serviceProviderDetails",
            //         preserveNullAndEmptyArrays: true
            //     }
            // },
        ];

        let rows = await getAllChildItemAggregate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Child Item");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Child Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Child Item")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Child Item");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Child Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (req.body.supplierDetails) {
            itemDetails.supplierDetails = req.body.supplierDetails;
        }
        itemDetails = await itemDetails.save();

        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Child Item has been")
        });
    } catch (e) {
        console.error("update Child Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const categoryList = await getAllChildItemCategory(req.user.company);
        // const ExtServiceProviderName = await getAllExtServiceProviderName(req.user.company);
        const HSNCodesList = await filteredHSNList([
            {$match: {company: ObjectId(req.user.company), isActive: "Y"}},
            {$sort: {createdAt: -1}},
            {
                $project: {
                    value: "$hsnCode",
                    hsnCode: 1,
                    goodsDescription: 1,
                    gstRate: 1,
                    igstRate: 1,
                    cgstRate: 1,
                    sgstRate: 1,
                    ugstRate: 1
                }
            }
        ]);
        const suppliersOptions = await filteredSupplierList([
            {$match: {company: ObjectId(req.user.company), isSupplierActive: "A"}},
            {$sort: {supplierName: 1}},
            {
                $addFields: {
                    supplierBillingAddress: {$arrayElemAt: ["$supplierBillingAddress", 0]}
                }
            },
            {
                $project: {
                    supplierName: 1,
                    _id: 1,
                    supplierCode: 1,
                    supplierCurrency: 1,
                    supplierBillingState: "$supplierBillingAddress.state",
                    supplierBillingCity: "$supplierBillingAddress.city",
                    supplierBillingPinCode: "$supplierBillingAddress.pinCode"
                }
            }
        ]);
        let autoIncValues = {};
        if (categoryList.length > 0) {
            for (const ele of categoryList) {
                autoIncValues[ele.category] = getIncrementNumWithPrefix({
                    modulePrefix: ele.prefix,
                    autoIncrementValue: ele.nextAutoIncrement,
                    digit: ele.digit
                });
            }
        }
        let WXLDimensionsUnit = await findAppParameterValue("WXL_DIMENSIONS_UNIT", req.user.company);
        return res.success({
            categoryList: categoryList.map(x => x.category),
            autoIncValues,
            HSNCodesList,
            suppliersOptions,
            WXLDimensionsUnit: WXLDimensionsUnit.split(",").map(x => x)
        });
    } catch (error) {
        console.error("getAllMasterData Child Item", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.viewByBOMId = asyncHandler(async (req, res) => {
    try {
        let BOMData;
        if (req.query.category == CHILD_ITEM_CATEGORY_NAME.GRAND_CHILD) {
            BOMData = await getGrandByBOMIdForChildItem(req.user.company, req.query.childItemId);
        } else {
            BOMData = await getChildByBOMIdForChildItem(req.user.company, req.query.childItemId);
        }
        if (BOMData) {
            return res.success({
                BOMData
            });
        } else {
            const errors = "BOM Not available";
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("getById Child Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllChildItemsList = async (company, category, options = {}) => {
    try {
        const rows = await Model.find(
            {
                status: OPTIONS.defaultStatus.ACTIVE,
                childItemCategory: category,
                company: company
            },
            options
        );
        return rows;
    } catch (error) {
        console.error("getAllChildItemsList", error);
    }
};
exports.getAllChildItemsListForBOM = async (company, category = null, title, project = null) => {
    try {
        let lookupArray = [];
        let BOM = {$ifNull: ["$BOMOfGrandChildItem.BOMNo", "-"]};
        if (title == "SKU") {
            BOM = {$cond: ["$BOMOfGrandChildItem.BOMNo", "$BOMOfGrandChildItem.BOMNo", "$BOMOfChildPart.BOMNo"]};
            lookupArray = [
                {
                    $lookup: {
                        from: "BOMOfGrandChildItem",
                        let: {fieldId: "$_id"},
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$childItem", "$$fieldId"]
                                    }
                                }
                            },
                            {$project: {BOMNo: 1}}
                        ],
                        as: "BOMOfGrandChildItem"
                    }
                },
                {
                    $unwind: {
                        path: "$BOMOfGrandChildItem",
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $lookup: {
                        from: "BOMOfChildPart",
                        let: {fieldId: "$_id"},
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$childItem", "$$fieldId"]
                                    }
                                }
                            },
                            {$project: {BOMNo: 1}}
                        ],
                        as: "BOMOfChildPart"
                    }
                },
                {
                    $unwind: {
                        path: "$BOMOfChildPart",
                        preserveNullAndEmptyArrays: true
                    }
                }
            ];
        } else if (title == "ChildItem") {
            BOM = {$ifNull: ["$BOMOfGrandChildItem.BOMNo", "-"]};
            lookupArray = [
                {
                    $lookup: {
                        from: "BOMOfGrandChildItem",
                        let: {fieldId: "$_id"},
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$childItem", "$$fieldId"]
                                    }
                                }
                            },
                            {$project: {BOMNo: 1}}
                        ],
                        as: "BOMOfGrandChildItem"
                    }
                },
                {
                    $unwind: {
                        path: "$BOMOfGrandChildItem",
                        preserveNullAndEmptyArrays: true
                    }
                }
            ];
        }
        let projectObj = {
            reference: "$_id",
            referenceModel: "ChildItem",
            itemCode: 1,
            itemName: 1,
            itemDescription: 1,
            supplierCode: "$sourceOfManufacturing",
            supplier: null,
            UOM: "$unitOfMeasurement",
            unitCost: "$itemCost",
            itemCost: {$ifNull: ["$partCount", 0]},
            partCount: {$literal: 0},
            childItemCategory: 1,
            qtyPerSKUUnit: {$literal: 0},
            wastePercentage: {$literal: 0},
            BOM: {$ifNull: [BOM, "-"]},
            type: "childItem",
            _id: 0
        };
        if (project) {
            projectObj = project;
        }
        const rows = await Model.aggregate([
            {
                $match: {
                    status: OPTIONS.defaultStatus.ACTIVE,
                    company: ObjectId(company),
                    ...(!!category && {childItemCategory: category})
                }
            },
            ...lookupArray,
            {
                $project: projectObj
            }
        ]);
        return rows;
    } catch (error) {
        console.error("getAllChildItemsList", error);
    }
};
exports.getAllChildItemMasterCountByCategoryAndSOM = async company => {
    try {
        const result = await Model.aggregate([
            {
                $match: {
                    company: ObjectId(company)
                }
            },
            {
                $group: {
                    _id: null,
                    inHouseL20Counts: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        {$eq: ["$childItemCategory", "L20/Child Item"]},
                                        {$eq: ["$sourceOfManufacturing", "Inhouse"]}
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    outSourcedL20Counts: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        {$eq: ["$childItemCategory", "L20/Child Item"]},
                                        {$eq: ["$sourceOfManufacturing", "Outsourced"]}
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    outSourcedL30Counts: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        {$eq: ["$childItemCategory", "L30/Grand Child"]},
                                        {$eq: ["$sourceOfManufacturing", "Outsourced"]}
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    inHouseL30Counts: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        {$eq: ["$childItemCategory", "L30/Grand Child"]},
                                        {$eq: ["$sourceOfManufacturing", "Inhouse"]}
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    }
                }
            },
            {
                $project: {
                    inHouseL20Counts: 1,
                    outSourcedL20Counts: 1,
                    outSourcedL30Counts: 1,
                    inHouseL30Counts: 1,
                    _id: 0
                }
            }
        ]);
        let obj = {
            inHouseL20Counts: result[0]?.inHouseL20Counts || 0,
            outSourcedL20Counts: result[0]?.outSourcedL20Counts || 0,
            outSourcedL30Counts: result[0]?.outSourcedL30Counts || 0,
            inHouseL30Counts: result[0]?.inHouseL30Counts || 0
        };
        return obj;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};
