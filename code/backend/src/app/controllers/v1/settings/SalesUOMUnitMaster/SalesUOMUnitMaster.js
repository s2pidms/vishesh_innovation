const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllSalesUOMUnitMasterAttributes} = require("../../../../models/settings/helpers/SalesUOMUnitMasterHelper");
const SalesUOMUnitMasterRepository = require("../../../../models/settings/repository/SalesUOMUnitMasterRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllSalesUOMUnitMasterAttributes();
        let pipeline = [{$match: {company: ObjectId(req.user.company)}}];
        let rows = await SalesUOMUnitMasterRepository.getAllPaginate({
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
        const itemDetails = await SalesUOMUnitMasterRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Sales UOM Unit Master")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Sales UOM Unit Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await SalesUOMUnitMasterRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await SalesUOMUnitMasterRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Sales UOM Unit Master has been")
        });
    } catch (e) {
        console.error("update Sales UOM Unit Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await SalesUOMUnitMasterRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Sales UOM Unit Master")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Sales UOM Unit Master");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Sales UOM Unit Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await SalesUOMUnitMasterRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Sales UOM Unit Master");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Sales UOM Unit Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
    } catch (error) {
        console.error("getAllMasterData Sales UOM Unit Master", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
