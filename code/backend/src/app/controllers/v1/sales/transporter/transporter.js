const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {default: mongoose} = require("mongoose");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {
    getAllTransporterMasterAttributes,
    getAllTransporterMasterExcelAttributes
} = require("../../../../models/sales/helpers/transporterMasterHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {TRANSPORTER_MASTER} = require("../../../../mocks/schemasConstant/salesConstant");
const TransporterMasterRepository = require("../../../../models/sales/repository/transporterMasterRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const ObjectId = mongoose.Types.ObjectId;

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllTransporterMasterAttributes();
        if (req.query.excel == "true") {
            project = getAllTransporterMasterExcelAttributes();
        }
        let pipeline = [
            {
                $match: {
                    status: {$in: ["Active"]},
                    company: ObjectId(req.user.company)
                }
            }
        ];
        let rows = await TransporterMasterRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("Transporter", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// @desc    create Transporter new Record
// @route   POST /purchase/servicePurchaseOrder/create
exports.create = asyncHandler(async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        await TransporterMasterRepository.createDoc(createdObj);
        return res.success({
            message: MESSAGES.apiSuccessStrings.ADDED("Transporter")
        });
    } catch (e) {
        console.error("create Transporter", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    update Transporter  Record
// @route   PUT /purchase/servicePurchaseOrder/update/:id
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await TransporterMasterRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await TransporterMasterRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Transporter")
        });
    } catch (e) {
        console.error("update Transporter", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    deleteById Transporter Record
// @route   PUT /purchase/servicePurchaseOrder/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await TransporterMasterRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Transporter")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Transporter");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Transporter", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getById Transporter Record
// @route   GET /purchase/servicePurchaseOrder/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await TransporterMasterRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Transporter");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Transporter", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllMasterData Transporter Record
// @route   GET /purchase/servicePurchaseOrder/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            TRANSPORTER_MASTER.AUTO_INCREMENT_DATA(),
            req.user.company
        );
        let transporterTypeOptions = await findAppParameterValue("MODE_OF_TRANSPORT", req.user.company);
        return res.success({
            autoIncrementNo,
            transporterTypeOptions: transporterTypeOptions.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (error) {
        console.error("getAllMasterData Transporter", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllTransporter = async (match, project) => {
    try {
        let rows = await TransporterMasterRepository.filteredTransporterMasterList([
            {
                $match: {status: OPTIONS.defaultStatus.ACTIVE, ...match}
            },
            {
                $project: project
            },
            {
                $sort: {label: 1}
            }
        ]);
        return rows;
    } catch (e) {
        console.error("getAllTransporter", e);
    }
};
