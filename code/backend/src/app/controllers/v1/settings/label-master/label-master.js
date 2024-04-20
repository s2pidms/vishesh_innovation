const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/settings/labelMasterModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {outputData, getAllAggregationFooter} = require("../../../../helpers/utility");
const {generateCreateData, getMatchData} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {getAllLabelMasterAttributes} = require("../../../../models/settings/helpers/labelMasterHelper");
const memoryCacheHandler = require("../../../../utilities/memoryCacheHandler");
const ObjectId = mongoose.Types.ObjectId;
exports.getAll = asyncHandler(async (req, res) => {
    try {
        const {
            search = null,
            excel = "false",
            page = 1,
            pageSize = 10,
            column = "createdAt",
            direction = -1,
            menuItemId = null
        } = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let project = getAllLabelMasterAttributes();
        let match = await getMatchData(project, search);
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await Model.aggregate([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    menuItemId: ObjectId(menuItemId)
                }
            },
            ...getAllAggregationFooter(project, match, column, direction, pagination)
        ]);
        return res.success({
            ...outputData(rows)
        });
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
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
                message: MESSAGES.apiSuccessStrings.ADDED("Label Master")
            });
            await this.updateCacheGlobalLabel(req.user.company);
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails = await generateCreateData(itemDetails, req.body);
        itemDetails = await itemDetails.save();
        res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Label Master has been")
        });
        await this.updateCacheGlobalLabel(req.user.company);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Label Master")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Label Master");
            res.preconditionFailed(errors);
        }
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Label Master");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        res.serverError(errors);
        console.error(e);
    }
});
exports.getAllLabelJSON = async company => {
    try {
        let rows = [];
        const cachedData = memoryCacheHandler.get("labelMaster");
        if (cachedData) {
            rows = cachedData;
        } else {
            rows = await this.updateCacheGlobalLabel(company);
        }
        return rows;
    } catch (e) {
        console.error(e);
    }
};

exports.updateCacheGlobalLabel = async company => {
    try {
        let rows = await Model.find(
            {
                company: company
            },
            {
                menuItemId: 1,
                labelName: 1,
                displayLabelName: 1
            }
        );
        memoryCacheHandler.put("labelMaster", rows);
        return rows;
    } catch (error) {
        console.error(e);
    }
};
