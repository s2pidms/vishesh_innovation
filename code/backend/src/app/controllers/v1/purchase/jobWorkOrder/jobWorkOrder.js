const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {
    getAllJobWorkOrderAttributes,
    getAllJobWorkOrderReportsAttributes
} = require("../../../../models/purchase/helpers/jobWorkOrderHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {JOB_WORK_ORDER} = require("../../../../mocks/schemasConstant/purchaseConstant");
const JobWorkOrderRepository = require("../../../../models/purchase/repository/jobWorkOrderRepository");
const {filteredJobWorkerMasterList} = require("../../../../models/purchase/repository/jobWorkerMasterRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const {filteredJobWorkItemMasterList} = require("../../../../models/purchase/repository/jobWorkItemMasterRepository");
const {filteredServiceMasterList} = require("../../../../models/purchase/repository/serviceMasterRepository");
const {getAllPaymentTerms} = require("../../sales/paymentTerms/paymentTerms");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");
const {filteredCompanyList} = require("../../../../models/settings/repository/companyRepository");
const {CONSTANTS} = require("../../../../../config/config");
const {COMPANY_DEPARTMENTS} = require("../../../../mocks/constantData");
const {getEndDateTime, getStartDateTime} = require("../../../../helpers/dateTime");
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllJobWorkOrderAttributes();
        let pipeline = [
            {$match: {company: ObjectId(req.user.company), status: {$nin: [OPTIONS.defaultStatus.REPORT_GENERATED]}}}
        ];
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
exports.getByIdForPDF = asyncHandler(async (req, res) => {
    try {
        let existing = await JobWorkOrderRepository.filteredJobWorkOrderList([
            {
                $match: {
                    _id: ObjectId(req.params.id)
                }
            },
            {
                $lookup: {
                    from: "Company",
                    localField: "company",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                logoUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$logo"]},
                                companySignatureUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$companySignature"]},
                                contactInfo: {
                                    $arrayElemAt: [
                                        {
                                            $filter: {
                                                input: "$contactInfo",
                                                as: "info",
                                                cond: {$eq: ["$$info.department", COMPANY_DEPARTMENTS.PURCHASE]}
                                            }
                                        },
                                        0
                                    ]
                                }
                            }
                        }
                    ],
                    as: "company"
                }
            },
            {$unwind: "$company"}
        ]);
        if (!existing.length) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Job Work Order");
            return res.unprocessableEntity(errors);
        } else {
            existing = existing[0];
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
                    GSTINNo: 1,
                    additionalPlacesOfBusiness: {$concatArrays: [["$primaryAddress"], "$additionalPlacesOfBusiness"]}
                }
            }
        ]);
        const companyAddress = await filteredCompanyList([
            {
                $match: {
                    _id: ObjectId(req.user.company)
                }
            },
            {$unwind: "$placesOfBusiness"},
            {
                $addFields: {
                    "placesOfBusiness.companyName": "$companyName"
                }
            },
            {$replaceRoot: {newRoot: "$placesOfBusiness"}},
            {
                $project: {
                    companyName: 1,
                    locationID: "$locationID",
                    GSTIN: "$GSTINForAdditionalPlace",
                    line1: "$addressLine1",
                    line2: "$addressLine2",
                    line3: "$addressLine3",
                    line4: "$addressLine4",
                    state: "$state",
                    city: "$city",
                    district: "$district",
                    pinCode: "$pinCode",
                    country: "$country"
                }
            }
        ]);
        const serviceMastersOptions = await filteredServiceMasterList([
            {$match: {company: ObjectId(req.user.company), isActive: "Y"}},
            {
                //For Filtration I have used lookup
                $lookup: {
                    from: "SAC",
                    localField: "sacId",
                    foreignField: "_id",
                    as: "sacId"
                }
            },
            {$unwind: "$sacId"},
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
            paymentTermsOptions: paymentTerms.map(x => {
                return {
                    label: x.paymentDescription,
                    value: x.paymentDescription
                };
            }),
            freightTermsOptions,
            jobWODiscountOptions,
            companyAddress
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
                    HSNCode: 1,
                    partNo: "$jobWorkerDetails.partNo",
                    partName: "$jobWorkerDetails.partName",
                    gst: 1,
                    igst: 1,
                    cgst: 1,
                    sgst: 1,
                    ugst: 1,
                    processRatePerUnit: "$jobWorkerDetails.stdCostUom1"
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

exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const {jobWorker = null, toDate = null, fromDate = null} = req.query;
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
                    jobWorkerName: "$jobWorkerName"
                }
            }
        ]);
        let query = {
            company: ObjectId(req.user.company),
            status: {$in: [OPTIONS.defaultStatus.REPORT_GENERATED]},
            ...(!!jobWorker && {
                jobWorker: ObjectId(jobWorker)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    WODate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let project = getAllJobWorkOrderReportsAttributes();
        let pipeline = [{$match: query}];
        let rows = await JobWorkOrderRepository.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        WOTaxableValue: {$sum: "$WOTaxableValue"}
                    }
                },
                {
                    $project: {
                        WOTaxableValue: {$round: ["$WOTaxableValue", 2]}
                    }
                }
            ]
        });
        return res.success({...rows, jobWorkerOptions});
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
