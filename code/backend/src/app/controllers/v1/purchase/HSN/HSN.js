const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/purchase/hsnModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, getMatchData} = require("../../../../helpers/global.options");
const {getAllHSNAttributes, getAllHSNExcelAttributes} = require("../../../../models/purchase/helpers/hsnHelper");
const {default: mongoose} = require("mongoose");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {PURCHASE_HSN} = require("../../../../mocks/schemasConstant/purchaseConstant");
const HSNRepository = require("../../../../models/purchase/repository/hsnRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllHSNAttributes();
        if (req.query.excel == "true") {
            project = getAllHSNExcelAttributes();
        }
        let pipeline = [
            {$match: {company: ObjectId(req.user.company)}},
            {
                $addFields: {
                    revision: {$first: "$revision"}
                }
            },
            {
                $unwind: {path: "$revision", preserveNullAndEmptyArrays: true}
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
        let rows = await HSNRepository.getAllPaginate({pipeline, project, queryParams: req.query});
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
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("HSN")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create HSN", e);
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
            message: MESSAGES.apiSuccessStrings.UPDATE("HSN has been")
        });
    } catch (e) {
        console.error("update HSN", e);
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
                message: MESSAGES.apiSuccessStrings.DELETED("HSN")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("HSN");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById HSN", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("HSN");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById HSN", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            PURCHASE_HSN.AUTO_INCREMENT_DATA(),
            req.user.company,
            false
        );
        return res.success({autoIncrementNo});
    } catch (error) {
        console.error("getAllMasterData HSN", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllHSNs = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            isActive: "Y",
            company: company
        }).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllHSNs", e);
    }
});
exports.getHSNByCode = async hsnCode => {
    try {
        let existing = await Model.findOne({hsnCode: hsnCode});
        return existing;
    } catch (e) {
        console.error("getById HSN", e);
    }
};
