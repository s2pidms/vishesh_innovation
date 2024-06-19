const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllJobWorkOrderAttributes} = require("../../../../models/purchase/helpers/jobWorkOrderHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {JOB_WORK_ORDER} = require("../../../../mocks/schemasConstant/purchaseConstant");
const JobWorkOrderRepository = require("../../../../models/purchase/repository/jobWorkOrderRepository");
const {filteredJobWorkerMasterList} = require("../../../../models/purchase/repository/jobWorkerMasterRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const {filteredJobWorkItemMasterList} = require("../../../../models/purchase/repository/jobWorkItemMasterRepository");
const {filteredServiceMasterList} = require("../../../../models/purchase/repository/serviceMasterRepository");
const {getAllPaymentTerms} = require("../../sales/paymentTerms/paymentTerms");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllJobWorkOrderAttributes();
        let pipeline = [{$match: {company: ObjectId(req.user.company)}}];
        let rows = await JobWorkOrderRepository.getAllPaginate({
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
        const itemDetails = await JobWorkOrderRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Job Work Order")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Job Work Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await JobWorkOrderRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await JobWorkOrderRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Job Work Order has been")
        });
    } catch (e) {
        console.error("update Job Work Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await JobWorkOrderRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Job Work Order")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Order");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Job Work Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await JobWorkOrderRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Order");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Job Work Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            JOB_WORK_ORDER.AUTO_INCREMENT_DATA(),
            req.user.company,
            false
        );
        const jobWorkerOptions = await filteredJobWorkerMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {$sort: {jobWorkerName: 1}},
            {
                $project: {
                    jobWorker: "$_id",
                    jobWorkerName: "$jobWorkerName",
                    currency: "$currency",
                    jobWorkerCode: 1,
                    state: "$primaryAddress.state",
                    cityOrDistrict: "$primaryAddress.cityOrDistrict",
                    pinCode: "$primaryAddress.pinCode",
                    primaryAddress: 1
                }
            }
        ]);
        const serviceMastersOptions = await filteredServiceMasterList([
            {$match: {company: ObjectId(req.user.company), isActive: "Y"}},
            {$sort: {serviceCode: -1}},
            {
                $project: {
                    _id: 1,
                    serviceCode: 1,
                    sacCode: 1,
                    serviceDescription: 1,
                    gst: 1,
                    igst: 1,
                    sgst: 1,
                    cgst: 1,
                    ugst: 1
                }
            }
        ]);
        const paymentTerms = await getAllPaymentTerms(req.user.company);
        const freightTermsOptions = await getAllModuleMaster(req.user.company, "FREIGHT_TERMS");
        const jobWODiscountOptions = await getAllModuleMaster(req.user.company, "JOB_WO_DISCOUNT");

        return res.success({
            autoIncrementNo,
            jobWorkerOptions,
            serviceMastersOptions,
            paymentTerms,
            freightTermsOptions,
            jobWODiscountOptions
        });
    } catch (error) {
        console.error("getAllMasterData Job Work Order", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getJWItemsByJobWorker = asyncHandler(async (req, res) => {
    try {
        const JWItemsOptions = await filteredJobWorkItemMasterList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: OPTIONS.defaultStatus.ACTIVE
                }
            },
            {
                $unwind: "$jobWorkerDetails"
            },
            {
                $match: {
                    "jobWorkerDetails.jobWorker": ObjectId(req.params.id)
                }
            },
            {
                $project: {
                    jobWorkItemCode: 1,
                    jobWorkItemName: 1,
                    jobWorkItemDescription: 1,
                    orderInfoUOM: 1,
                    partNo: "$jobWorkerDetails.partNo",
                    partName: "$jobWorkerDetails.partName"
                }
            },
            {$sort: {jobWorkItemCode: 1}}
        ]);
        return res.success({JWItemsOptions});
    } catch (e) {
        console.error("getById Job Work Order", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
