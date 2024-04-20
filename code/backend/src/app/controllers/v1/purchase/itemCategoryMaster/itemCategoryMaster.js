const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/purchase/itemCategoryModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, getMatchData, OPTIONS} = require("../../../../helpers/global.options");
const {getAllItemCategoryAttributes} = require("../../../../models/purchase/helpers/itemCategoryHelper");
const ItemCategoryRepository = require("../../../../models/purchase/repository/itemCategoryRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllItemCategoryAttributes();
        let rows = await ItemCategoryRepository.getAllPaginate({
            pipeline: [],
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
        const saveObj = new Model(createdObj);
        const itemDetails = await saveObj.save();
        if (itemDetails) {
            res.success({
                message: "Item Sub Category has been created successfully"
            });
        }
    } catch (e) {
        console.error("create Item Sub Category", e);
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

        if (req.body.subCategory) {
            itemDetails.subCategory = req.body.subCategory;
        }
        itemDetails = await itemDetails.save();
        if (itemDetails) {
            res.success({
                message: "Item Sub Category has been updated successfully"
            });
        }
    } catch (e) {
        console.error("update Item Sub Category", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("Item Sub Category")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Item Sub Category");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Item Sub Category", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Item Sub Category");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Item Sub Category", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllItemCategory = async (company, project = {}) => {
    try {
        let rows = await Model.find(
            {
                categoryStatus: OPTIONS.defaultStatus.ACTIVE
            },
            project
        );
        return rows;
    } catch (e) {
        console.error("getAllItemCategory", e);
    }
};

exports.getAllCheckedItemCategoriesList = async match => {
    try {
        let rows = await Model.find(match, {
            category: 1
        });
        return rows;
    } catch (e) {
        console.error("getAllCheckedItemCategoriesList", e);
    }
};

exports.setItemsNextAutoIncrementNo = async itemCategory => {
    try {
        await Model.findOneAndUpdate(
            {
                category: itemCategory
            },
            {$inc: {nextAutoIncrement: 1}}
        );
    } catch (e) {
        console.error("setItemsNextAutoIncrementNo", e);
    }
};
