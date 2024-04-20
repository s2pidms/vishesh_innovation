const asyncHandler = require("express-async-handler");
const Model = require("../../../../../models/planning/billOfMaterialModels/BoMOfGrandChildItemModel");
const MESSAGES = require("../../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const ChildItemMaster = require("../../childItemMaster/childItemMaster");
const {CHILD_ITEM_CATEGORY_NAME} = require("../../../../../mocks/constantData");
const {getAllItemsForBOM} = require("../../../purchase/items/items");
const {getAllCheckedItemCategoriesList} = require("../../../purchase/itemCategoryMaster/itemCategoryMaster");
const {
    getAllBOMOfGrandChildItemAttributes
} = require("../../../../../models/planning/helpers/billOfMaterialHelper/BoMOfGrandChildItemHelper");
const {BOM_OF_GRAND_CHILD_PART} = require("../../../../../mocks/schemasConstant/planningConstant");
const {getAndSetAutoIncrementNo} = require("../../../settings/autoIncrement/autoIncrement");
const {
    getAllBoMOfGrandChildItemAggregate
} = require("../../../../../models/planning/repository/BOMRepository/BoMOfGrandChildItemRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.create = asyncHandler(async (req, res) => {
    try {
        let existingUser = await Model.findOne({
            childItem: req.body.childItem
        });
        if (existingUser) {
            let errors = "BOM already exists with this same Grand Child";
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
                message: MESSAGES.apiSuccessStrings.ADDED("BOM Grand Child Item Planning")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create BOM Grand Child Item Planning", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllBOMOfGrandChildItemAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            }
        ];

        let rows = await getAllBoMOfGrandChildItemAggregate({pipeline, project, queryParams: req.query});
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
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BOM Grand Child Item Planning");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById BOM Grand Child Item Planning", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("BOM Grand Child Item Planning")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("BOM Grand Child Item Planning");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById BOM Grand Child Item Planning", e);
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
        if (req.body.BOMOfGrandChildItemDetails) {
            itemDetails.BOMOfGrandChildItemDetails = req.body.BOMOfGrandChildItemDetails;
        }
        itemDetails = await itemDetails.save();

        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("BOM Grand Child Item Planning has been")
        });
    } catch (e) {
        console.error("update BOM Grand Child Item Planning", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const childItemsOptions = await ChildItemMaster.getAllChildItemsList(
            req.user.company,
            CHILD_ITEM_CATEGORY_NAME.GRAND_CHILD,
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
        const itemsList = await getAllItemsForBOM(req.user.company, itemCategoriesList);
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...BOM_OF_GRAND_CHILD_PART.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        return res.success({
            autoIncrementNo,
            childItemsOptions,
            itemsList
        });
    } catch (error) {
        console.error("getAllMasterData BOM Grand Child Item Planning", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getGrandByBOMIdForChildItem = async (company, childItemId) => {
    try {
        const rows = await Model.findOne({
            company: company,
            childItem: childItemId
        });
        return rows;
    } catch (error) {
        console.error("getGrandByBOMIdForChildItem", error);
    }
};
exports.getBOMOfGrandChildPartCount = async company => {
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

exports.checkBOMOfGrChildExistsById = asyncHandler(async (req, res) => {
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
