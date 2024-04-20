const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/settings/childItemCategoryModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {outputData, getAllAggregationFooter} = require("../../../../helpers/utility");
const {generateCreateData, getMatchData} = require("../../../../helpers/global.options");
const {getAllChildItemCategoryAttributes} = require("../../../../models/settings/helpers/childItemCategoryHelper");
const {default: mongoose} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        const {
            search = null,
            excel = "false",
            page = 1,
            pageSize = 10,
            column = "createdAt",
            direction = -1
        } = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let project = getAllChildItemCategoryAttributes();
        let match = await getMatchData(project, search);
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await Model.aggregate([...getAllAggregationFooter(project, match, column, direction, pagination)]);
        return res.success({
            ...outputData(rows)
        });
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
                message: "Child Item Category has been created successfully"
            });
        }
    } catch (e) {
        console.error("create Child Item Category", e);
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

        itemDetails = await itemDetails.save();
        if (itemDetails) {
            res.success({
                message: "Child Item Category has been updated successfully"
            });
        }
    } catch (e) {
        console.error("update Child Item Category", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("Child Item Category")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Child Item Category");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Child Item Category", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Child Item Category");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Child Item Category", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllChildItemCategory = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            categoryStatus: "Active"
        });
        return rows;
    } catch (e) {
        console.error("getAllChildItemCategory", e);
    }
});

exports.setChildItemNextAutoIncrementNo = async category => {
    try {
        await Model.findOneAndUpdate(
            {
                category: category
            },
            {$inc: {nextAutoIncrement: 1}}
        );
    } catch (e) {
        console.error("setChildItemNextAutoIncrementNo", e);
    }
};
