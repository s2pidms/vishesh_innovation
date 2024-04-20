const asyncHandler = require("express-async-handler");
const Model = require("../../../../../models/planning/billOfMaterialModels/BoMOfChildPartModel");
const MESSAGES = require("../../../../../helpers/messages.options");
const {outputData, getAllAggregationFooter} = require("../../../../../helpers/utility");
const {generateCreateData, getMatchData, OPTIONS} = require("../../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {findAppParameterValue} = require("../../../settings/appParameter/appParameter");
const ChildItemMaster = require("../../childItemMaster/childItemMaster");
const {CHILD_ITEM_CATEGORY_NAME} = require("../../../../../mocks/constantData");
const {getAllItemsForBOM} = require("../../../purchase/items/items");
const {getAllCheckedItemCategoriesList} = require("../../../purchase/itemCategoryMaster/itemCategoryMaster");
const {
    getAllBOMOfChildPartAttributes
} = require("../../../../../models/planning/helpers/billOfMaterialHelper/BoMOfChildPartHelper");
const {BOM_OF_CHILD_PART} = require("../../../../../mocks/schemasConstant/planningConstant");
const {getAndSetAutoIncrementNo} = require("../../../settings/autoIncrement/autoIncrement");
const {
    getAllBoMOfChildPartAggregate
} = require("../../../../../models/planning/repository/BOMRepository/BoMOfChildPartRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.create = asyncHandler(async (req, res) => {
    try {
        let existingUser = await Model.findOne({
            childItem: req.body.childItem
        });
        if (existingUser) {
            let errors = "BOM already exists with this same Child Part";
            return res.preconditionFailed(errors);
        }
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
                message: MESSAGES.apiSuccessStrings.ADDED("BOM Child Part Production")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create BOM Child Part Production", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllBOMOfChildPartAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            }
        ];

        let rows = await getAllBoMOfChildPartAggregate({pipeline, project, queryParams: req.query});
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
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BOM Child Part Production");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById BOM Child Part Production", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("BOM Child Part Production")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BOM Child Part Production");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById BOM Child Part Production", e);
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
        if (req.body.BOMOfChildPartDetails) {
            itemDetails.BOMOfChildPartDetails = req.body.BOMOfChildPartDetails;
        }
        itemDetails = await itemDetails.save();
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("BOM Child Part Production has been")
        });
    } catch (e) {
        console.error("update BOM Child Part Production", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        let childItems = await ChildItemMaster.getAllChildItemsListForBOM(
            req.user.company,
            CHILD_ITEM_CATEGORY_NAME.GRAND_CHILD,
            "ChildItem"
        );
        let childItemsOptions = await ChildItemMaster.getAllChildItemsList(
            req.user.company,
            CHILD_ITEM_CATEGORY_NAME.CHILD_ITEM,
            {
                itemCode: 1,
                itemDescription: 1,
                itemName: 1,
                unitOfMeasurement: 1
            }
        );
        let itemCategoriesList = await getAllCheckedItemCategoriesList({
            categoryStatus: OPTIONS.defaultStatus.ACTIVE,
            BOM: true
        });
        itemCategoriesList = itemCategoriesList.map(x => x.category);
        let itemsList = await getAllItemsForBOM(req.user.company, itemCategoriesList);
        let mergedItems = [...itemsList, ...childItems];
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...BOM_OF_CHILD_PART.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        return res.success({
            autoIncrementNo,
            mergedItems,
            childItemsOptions
        });
    } catch (error) {
        console.error("getAllMasterData BOM Child Part Production", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getChildByBOMIdForChildItem = async (company, childItemId) => {
    try {
        const rows = await Model.findOne({
            company: company,
            childItem: childItemId
        });
        return rows;
    } catch (error) {
        console.error("getChildByBOMIdForChildItem", error);
    }
};
exports.getBOMOfChildPartCount = async company => {
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
                    counts: {$sum: 1}
                }
            },
            {
                $project: {
                    _id: 0,
                    counts: 1
                }
            }
        ]);
        return result[0]?.counts || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};

exports.checkBOMOfChildExistsById = asyncHandler(async (req, res) => {
    try {
        let exists = await Model.findOne({
            childItem: req.params.id
        });
        if (exists) {
            let errors = "BOM already exists with this same Child Part";
            return res.preconditionFailed(errors);
        }
    } catch (error) {
        console.error("Not able to get record ", error);
    }
});
