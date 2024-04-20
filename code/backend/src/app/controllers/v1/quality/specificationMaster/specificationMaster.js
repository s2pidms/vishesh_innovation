const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/quality/specificationModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {getAllSpecificationAttributes} = require("../../../../models/quality/helpers/specificationHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {SPECIFICATION} = require("../../../../mocks/schemasConstant/qualityConstant");
const {getAllSpecificationAggregate} = require("../../../../models/quality/repository/specificationRepository");
const ObjectId = mongoose.Types.ObjectId;
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllSpecificationAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
                }
            }
        ];

        let rows = await getAllSpecificationAggregate({pipeline, project, queryParams: req.query});
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
                message: "Specification Master has been created successfully"
            });
        }
    } catch (e) {
        console.error("create Specification Master", e);
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
                message: "Specification Master has been updated successfully"
            });
        }
    } catch (e) {
        console.error("update Specification Master", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("Specification Master")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Specification Master");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Specification Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Specification Master");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Specification Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(SPECIFICATION.AUTO_INCREMENT_DATA(), req.user.company);
        let UOMListOptions = await getAllModuleMaster(req.user.company, "SPECIFICATION_UOM");
        return res.success({autoIncrementNo, UOMListOptions});
    } catch (error) {
        console.error("getAllMasterData Specification Master", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllSpecificationList = async company => {
    try {
        let rows = await Model.find({
            company: company
        }).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllSpecificationList", e);
    }
};
