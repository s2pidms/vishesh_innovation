const fs = require("fs");
const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/sales/saleSACModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const {
    getAllSaleSACAttributes,
    getAllSaleSACExcelAttributes
} = require("../../../../models/sales/helpers/saleSACHelper");
const {SALES_SAC} = require("../../../../mocks/schemasConstant/salesConstant");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {getAllSaleSACAggregate} = require("../../../../models/sales/repository/saleSACRepository");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllSaleSACAttributes();
        if (req.query.excel == "true") {
            project = getAllSaleSACExcelAttributes();
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company)}},
            {
                $addFields: {
                    revision: {$first: "$revision"}
                }
            },
            {
                $unwind: {
                    path: "$revision",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $addFields: {
                    gstRate: {$toString: "$gstRate"},
                    ugstRate: {$toString: "$ugstRate"},
                    cgstRate: {$toString: "$cgstRate"},
                    sgstRate: {$toString: "$sgstRate"},
                    igstRate: {$toString: "$igstRate"}
                }
            }
        ];
        let rows = await getAllSaleSACAggregate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllSAC", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.create = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findOne(
            {
                sacCode: req.body.sacCode
            },
            {_id: 1}
        );
        if (existing) {
            let errors = MESSAGES.apiErrorStrings.Data_EXISTS("SAC");
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
                message: MESSAGES.apiSuccessStrings.ADDED("SAC")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create SAC", e);
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

        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("SAC has been")
        });
    } catch (e) {
        console.error("update SAC", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    deleteById SAC Record
// @route   PUT /purchase/SAC/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("SAC")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("SAC");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById SAC", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getById SAC Record
// @route   GET /purchase/SAC/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("SAC");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById SAC", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllMasterData SAC Record
// @route   GET /purchase/SAC/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(SALES_SAC.AUTO_INCREMENT_DATA(), req.user.company);
        return res.success({autoIncrementNo});
    } catch (error) {
        console.error("getAllMasterData SAC", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllSalesSACs SAC Record
exports.getAllSalesSACs = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            isActive: "Y",
            company: company
        }).sort({sacMasterEntryNo: -1});
        return rows;
    } catch (e) {
        console.error("getAllSalesSACs", e);
    }
});
