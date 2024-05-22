const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/purchase/sacModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData} = require("../../../../helpers/global.options");
const {getAllSACAttributes} = require("../../../../models/purchase/helpers/sacHelper");
const {default: mongoose} = require("mongoose");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {PURCHASE_SAC} = require("../../../../mocks/schemasConstant/purchaseConstant");
const SACRepository = require("../../../../models/purchase/repository/sacRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllSACAttributes();
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
        let rows = await SACRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllSAC", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// @desc    create SAC new Record
// @route   POST /purchase/SAC/create
exports.create = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findOne(
            {
                sacCode: req.body.sacCode
            },
            {_id: 1}
        );
        if (existing) {
            let errors = MESSAGES.apiErrorStrings.Data_EXISTS("SAC Code");
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
// @desc    update SAC  Record
// @route   PUT /purchase/SAC/update/:id
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
        const autoIncrementNo = await getAndSetAutoIncrementNo(PURCHASE_SAC.AUTO_INCREMENT_DATA(), req.user.company);
        return res.success({autoIncrementNo});
    } catch (error) {
        console.error("getAllMasterData SAC", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllSACs SAC Record
exports.getAllSACs = asyncHandler(async company => {
    try {
        let rows = await Model.find({
            isActive: "Y",
            company: company
        }).sort({sacMasterEntryNo: -1});
        return rows;
    } catch (e) {
        console.error("getAllSACs", e);
    }
});
exports.getSACObj = async SACCode => {
    try {
        let rows = await Model.findOne({
            sacCode: SACCode
        });
        return rows;
    } catch (e) {
        console.error("getSACObj", e);
    }
};

exports.InsertSAC = async createObj => {
    try {
        let itemDetails = await Model.findOne({sacCode: createObj.sacCode});
        if (!itemDetails) {
            await Model.create(createObj);
        }
    } catch (e) {
        console.error("InsertSAC", e);
    }
};
