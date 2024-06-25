const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllCurrencyMasterAttributes} = require("../../../../models/settings/helpers/currencyMasterHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {CURRENCY_MASTER} = require("../../../../mocks/schemasConstant/settingsConstant");
const CurrencyMasterRepository = require("../../../../models/settings/repository/currencyMasterRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllCurrencyMasterAttributes();
        let pipeline = [{$match: {company: ObjectId(req.user.company)}}];
        let rows = await CurrencyMasterRepository.getAllPaginate({
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
        const itemDetails = await CurrencyMasterRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Currency Master")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Currency Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await CurrencyMasterRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await CurrencyMasterRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Currency Master has been")
        });
    } catch (e) {
        console.error("update Currency Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await CurrencyMasterRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Currency Master")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Currency Master");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Currency Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await CurrencyMasterRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Currency Master");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Currency Master", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            CURRENCY_MASTER.AUTO_INCREMENT_DATA(),
            req.user.company,
            false
        );
        return res.success({autoIncrementNo});
    } catch (error) {
        console.error("getAllMasterData Currency Master", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
