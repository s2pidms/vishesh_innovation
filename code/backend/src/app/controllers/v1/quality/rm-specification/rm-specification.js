const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/quality/rmSpecificationModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {OPTIONS} = require("../../../../helpers/global.options");
const {getAllItemCategory} = require("../../purchase/itemCategoryMaster/itemCategoryMaster");
const {getAllRMSpecificationAttributes} = require("../../../../models/quality/helpers/rmSpecificationHelper");
const {default: mongoose} = require("mongoose");
const {RM_SPECIFICATION} = require("../../../../mocks/schemasConstant/qualityConstant");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {filteredSpecificationList} = require("../../../../models/quality/repository/specificationRepository");
const {filteredItemList} = require("../../../../models/purchase/repository/itemRepository");
const RMSpecificationRepository = require("../../../../models/quality/repository/rmSpecificationRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllRMSpecificationAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                itemCode: 1,
                                itemName: 1,
                                itemDescription: 1,
                                UOM: "$orderInfoUOM"
                            }
                        }
                    ],
                    as: "item"
                }
            },
            {$unwind: "$item"}
        ];
        let rows = await RMSpecificationRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   POST /quality/inspectionParameter/create
exports.create = asyncHandler(async (req, res) => {
    try {
        let existingUser = await RMSpecificationRepository.findOneDoc({
            item: req.body.item
        });
        if (existingUser) {
            let errors = "RM Specification already exists with this same itemCode";
            return res.preconditionFailed(errors);
        }
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const itemDetails = await RMSpecificationRepository.createDoc(createdObj);
        if (itemDetails) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("RM Specification")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create RM Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   PUT /quality/inspectionParameter/update/:id
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await RMSpecificationRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await RMSpecificationRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("RM Specification has been")
        });
    } catch (e) {
        console.error("update RM Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   PUT /quality/inspectionParameter/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await RMSpecificationRepository.getDocById(req.params.id);
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("RM Specification")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("RM Specification");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById RM Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /quality/inspectionParameter/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await RMSpecificationRepository.filteredRMSpecificationList([
            {
                $match: {
                    _id: ObjectId(req.params.id)
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                itemCode: 1,
                                itemName: 1,
                                itemDescription: 1,
                                UOM: "$orderInfoUOM"
                            }
                        }
                    ],
                    as: "item"
                }
            },
            {$unwind: "$item"},
            {
                $project: {
                    item: "$item._id",
                    itemCode: "$item.itemCode",
                    itemName: "$item.itemName",
                    itemDescription: "$item.itemDescription",
                    UOM: "$item.UOM",
                    specificationInfo: 1,
                    itemCategory: 1
                }
            }
        ]);
        if (!existing.length) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("RM Specification");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing[0]);
    } catch (e) {
        console.error("getById RM Specification", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /quality/inspectionParameter/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const specificationList = await filteredSpecificationList([
            {$match: {company: ObjectId(req.user.company)}},
            {$sort: {createdAt: -1}},
            {
                $project: {
                    seq: null,
                    specValue: null,
                    tolerance: null,
                    LTL: null,
                    UTL: null,
                    specificationCode: 1,
                    characteristic: 1,
                    UOM: 1,
                    testStandard: 1,
                    measuringInstrument: 1
                }
            }
        ]);
        const itemCategoryListOptions = await getAllItemCategory(req.user.company, {category: 1});
        const itemsListOptions = await filteredItemList([
            {$match: {company: ObjectId(req.user.company), isActive: "A"}},
            {$sort: {itemCode: -1}},
            {
                $project: {
                    itemType: 1,
                    itemCode: 1,
                    itemName: 1,
                    itemDescription: 1,
                    orderInfoUOM: 1,
                    _id: 1
                }
            }
        ]);
        let autoIncrementNo = await getAndSetAutoIncrementNo(RM_SPECIFICATION.AUTO_INCREMENT_DATA(), req.user.company);
        return res.success({autoIncrementNo, specificationList, itemCategoryListOptions, itemsListOptions});
    } catch (error) {
        console.error("getAllMasterData RM Specification", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllRMSpecification = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            status: OPTIONS.defaultStatus.ACTIVE,
            company: company
        }).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllRM Specification", e);
    }
});
exports.getAllRMSpecificationByItemId = async (company, itemId) => {
    try {
        let rows = await Model.findOne(
            {
                status: OPTIONS.defaultStatus.ACTIVE,
                company: company,
                item: itemId
            },
            {specificationInfo: 1}
        ).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllRM Specification", e);
    }
};
