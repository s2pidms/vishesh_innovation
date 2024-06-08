const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllBOMOfJobWorkItemAttributes} = require("../../../../models/planning/helpers/BOMOfJobWorkItemHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {BOM_OF_JOB_WORK_ITEM} = require("../../../../mocks/schemasConstant/planningConstant");
const BOMOfJobWorkItemRepository = require("../../../../models/planning/repository/BOMOfJobWorkItemRepository");
const {filteredJobWorkItemMasterList} = require("../../../../models/purchase/repository/jobWorkItemMasterRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const {filteredItemList} = require("../../../../models/purchase/repository/itemRepository");
const {getAllCheckedItemCategoriesList} = require("../../purchase/itemCategoryMaster/itemCategoryMaster");
const {filteredChildItemList} = require("../../../../models/planning/repository/childItemRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllBOMOfJobWorkItemAttributes();
        let pipeline = [{$match: {company: ObjectId(req.user.company)}}];
        let rows = await BOMOfJobWorkItemRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
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
        const itemDetails = await BOMOfJobWorkItemRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("BoM Of Job Work Item")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create BoM Of Job Work Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await BOMOfJobWorkItemRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await BOMOfJobWorkItemRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("BoM Of Job Work Item has been")
        });
    } catch (e) {
        console.error("update BoM Of Job Work Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await BOMOfJobWorkItemRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("BoM Of Job Work Item")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BoM Of Job Work Item");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById BoM Of Job Work Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await BOMOfJobWorkItemRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BoM Of Job Work Item");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById BoM Of Job Work Item", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            BOM_OF_JOB_WORK_ITEM.AUTO_INCREMENT_DATA(),
            req.user.company,
            false
        );
        const jobWorkItemOptions = await filteredJobWorkItemMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $project: {jobWorkItemCode: 1, jobWorkItemName: 1, jobWorkItemDescription: 1, orderInfoUOM: 1}
            }
        ]);
        return res.success({autoIncrementNo, jobWorkItemOptions});
    } catch (error) {
        console.error("getAllMasterData BoM Of Job Work Item", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllItemsForBOMOfJobWorkItem = asyncHandler(async (req, res) => {
    try {
        let itemCategoriesList = await getAllCheckedItemCategoriesList({
            categoryStatus: OPTIONS.defaultStatus.ACTIVE,
            jobWorkItem: true
        });
        itemCategoriesList = itemCategoriesList?.map(x => x?.category);
        let itemsList = await filteredItemList([
            {
                $match: {
                    isActive: "A",
                    company: ObjectId(req.user.company),
                    itemType: {$in: itemCategoriesList}
                }
            },
            {
                $addFields: {
                    supplierDetails: {$first: "$supplierDetails"}
                }
            },
            {
                $unwind: {
                    path: "$supplierDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    item: "$_id",
                    referenceModel: "Items",
                    itemCode: 1,
                    itemName: 1,
                    itemDescription: 1,
                    UOM: "$orderInfoUOM",
                    primaryUnit: 1,
                    secondaryUnit: 1,
                    conversionOfUnits: 1,
                    primaryToSecondaryConversion: 1,
                    unitCost: "$supplierDetails.stdCostUom1",
                    totalQtyPerPC: {$literal: 0},
                    itemCost: {$literal: 0},
                    qtyPerPartCount: {$literal: 0},
                    wastePercentage: {$literal: 0},
                    _id: 0
                }
            }
        ]);
        let childItemsList = await filteredChildItemList([
            {
                $match: {
                    status: OPTIONS.defaultStatus.ACTIVE,
                    company: ObjectId(req.user.company)
                }
            },
            {
                $addFields: {
                    supplierDetails: {$first: "$supplierDetails"}
                }
            },
            {
                $unwind: {
                    path: "$supplierDetails",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    item: "$_id",
                    referenceModel: "ChildItem",
                    itemCode: 1,
                    itemName: 1,
                    itemDescription: 1,
                    UOM: "$unitOfMeasurement",
                    primaryUnit: 1,
                    secondaryUnit: 1,
                    conversionOfUnits: 1,
                    primaryToSecondaryConversion: 1,
                    unitCost: "$supplierDetails.stdCostUom1",
                    totalQtyPerPC: {$literal: 0},
                    itemCost: {$literal: 0},
                    qtyPerPartCount: {$literal: 0},
                    wastePercentage: {$literal: 0},
                    _id: 0
                }
            },
            {
                $sort: {
                    itemCode: 1
                }
            }
        ]);
        if (childItemsList.length) {
            itemsList = [...itemsList, ...childItemsList];
        }
        return res.success({itemsList});
    } catch (error) {
        console.error("getAllItemsForBOMOfJobWorkItem BoM Of Job Work Item", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
