const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/sales/serviceInvoiceModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {successMessage} = require("../../../../helpers/utility");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {getAllCustomers} = require("../customerMaster/customerMaster");
const {
    getFirstDateOfMonth,
    getLastDateOfMonth,
    getFirstDayOfFiscalYear,
    getLastDayOfFiscalYear,
    getFirstDateOfCurrentFiscalYear
} = require("../../../../utilities/utility");
const {CONSTANTS} = require("../../../../../config/config");
const {
    getMonthDiffFromCurrentFiscalYear,
    getEndDateTime,
    getStartDateTime,
    dateToAnyFormat
} = require("../../../../helpers/dateTime");
const {getCompanyLocations} = require("../../settings/company/company");
const {
    getAllServiceInvoiceAttributes,
    getAllServiceInvoiceExcelAttributes,
    getAllServiceInvoiceReportsAttributes
} = require("../../../../models/sales/helpers/serviceInvoiceHelper");
// const {getServiceInvoiceMailConfig} = require("./serviceInvoiceMail");
const {LAKH} = require("../../../../mocks/number.constant");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {SERVICE_INVOICE} = require("../../../../mocks/schemasConstant/salesConstant");
const {filteredCustomerList} = require("../../../../models/sales/repository/customerRepository");
const {filteredSalesServiceMasterList} = require("../../../../models/sales/repository/salesServiceMasterRepository");
const SIRepository = require("../../../../models/sales/repository/serviceInvoiceRepository");
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {SALES_MAIL_CONST} = require("../../../../mocks/mailTriggerConstants");
const ObjectId = mongoose.Types.ObjectId;
// @route   GET /sales/credit Note/getAll
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllServiceInvoiceAttributes();
        if (req.query.excel == "true") {
            project = getAllServiceInvoiceExcelAttributes();
        }
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company),
                    status: {$in: ["Awaiting Approval", "Approved"]}
                }
            }
        ];
        let rows = await SIRepository.getAllServiceInvoiceAggregate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAll", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// @route   POST /sales/credit Note/create
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
                message: MESSAGES.apiSuccessStrings.ADDED("Service Invoice")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Service Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// @route   PUT /sales/credit Note/update/:id
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
            res.success({message: successMessage("Service Invoice", itemDetails.status)});
            // let mailUpdateObj = {
            //     serviceInvoiceId: itemDetails._id,
            //     status: itemDetails.status,
            //     company: req.user.company
            // };
            // getServiceInvoiceMailConfig(mailUpdateObj);
            if ([OPTIONS.defaultStatus.APPROVED, OPTIONS.defaultStatus.REPORT_GENERATED].includes(itemDetails.status)) {
                let mailTriggerCreateObj = {
                    subModuleId: itemDetails._id,
                    action: itemDetails.status,
                    company: req.user.company,
                    mailAction: itemDetails.status,
                    collectionName: SERVICE_INVOICE.COLLECTION_NAME,
                    message: `Service Invoice ${itemDetails.status} - ${itemDetails.serviceInvoiceNumber}`,
                    module: SALES_MAIL_CONST.SERVICE_INV.MODULE,
                    subModule: SALES_MAIL_CONST.SERVICE_INV.SUB_MODULE,
                    isSent: false
                };
                await MailTriggerRepository.createDoc(mailTriggerCreateObj);
            }
        }
    } catch (e) {
        console.error("update Service Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// @route   PUT /sales/credit Note/delete/:id
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Service Invoice")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Service Invoice");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Service Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// @route   GET /sales/credit Note/getById/:id
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate("customer", "customerName company GSTIN")
            .populate("company", "companyName GSTIN")
            .lean();
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Service Invoice");
            return res.unprocessableEntity(errors);
        }
        existing.customer.company = existing.company;
        return res.success(existing);
    } catch (e) {
        console.error("getById Service Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getSIDetailsById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate("customer", "customerBillingAddress GSTIN customerContactInfo ")
            .populate({
                path: "company",
                model: "Company",
                select: {
                    companyName: 1,
                    GSTIN: 1,
                    companyBillingAddress: 1,
                    placesOfBusiness: 1,
                    contactInfo: 1,
                    swiftCode: 1,
                    companyBankMICRCode: 1,
                    intermediaryBank: 1,
                    companyBefName: 1,
                    companyBankName: 1,
                    companyAccountNumber: 1,
                    companyBankIFSCCode: 1,
                    companyBankBranch: 1,
                    intermediaryBankSwiftCode: 1,
                    companySignatureUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$companySignature"]},
                    companyPdfHeaderUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$companyPdfHeader"]},
                    SOSignatureUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$SOSignature"]},
                    SOPdfHeaderUrl: {$concat: [`${CONSTANTS.domainUrl}company/`, "$SOPdfHeader"]}
                }
            })
            .lean();
        if (existing && existing.company.placesOfBusiness.length > 0) {
            for (const e of existing.company.placesOfBusiness) {
                if (e.locationID == existing.billFromLocation && e.SOPdfHeader) {
                    existing.company.SOPdfHeaderUrl = `${CONSTANTS.domainUrl}company/` + e.SOPdfHeader;
                }
                if (e.locationID == existing.billFromLocation && e.SOSignature) {
                    existing.company.SOSignatureUrl = `${CONSTANTS.domainUrl}company/` + e.SOSignature;
                }
            }
        }
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Service Invoice");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Service Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @route   GET /sales/credit Note/getAllMasterData
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...SERVICE_INVOICE.AUTO_INCREMENT_DATA()},
            req.user.company
        );
        const customersOptions = await filteredCustomerList([
            {$match: {company: ObjectId(req.user.company), isCustomerActive: "A"}},
            {$sort: {customerName: 1}},
            {
                $lookup: {
                    from: "Company",
                    localField: "company",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                GSTIN: 1,
                                _id: 0
                            }
                        }
                    ],
                    as: "company"
                }
            },
            {$unwind: "$company"},
            {
                $addFields: {
                    customerBillingAddress: {$arrayElemAt: ["$customerBillingAddress", 0]}
                }
            },
            {
                $project: {
                    customerName: 1,
                    customerCode: 1,
                    customerBillingState: "$customerBillingAddress.state",
                    customerBillingCity: "$customerBillingAddress.city",
                    customerBillingPinCode: "$customerBillingAddress.pinCode",
                    GSTIN: 1,
                    customerCategory: 1,
                    customerPaymentTerms: 1,
                    customerCurrency: 1,
                    company: 1
                }
            }
        ]);
        const servicesList = await filteredSalesServiceMasterList([
            {$match: {company: ObjectId(req.user.company), isActive: "Yes"}},
            {$sort: {serviceCode: -1}},
            {
                $project: {
                    serviceCode: 1,
                    serviceDescription: 1,
                    sacCode: 1,
                    gst: 1,
                    igst: 1,
                    sgst: 1,
                    cgst: 1
                }
            }
        ]);
        const billFromLocation = await getCompanyLocations(req.user.company);
        const customerCategory = await findAppParameterValue("SALES_CATEGORY", req.user.company);
        return res.success({
            autoIncrementNo,
            customersOptions,
            servicesList,
            billFromLocationOptions: billFromLocation.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            customerCategoryOptions: customerCategory.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (error) {
        console.error("getAllMasterData Service Invoice", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const customers = await getAllCustomers(req.user.company, {customerName: 1});
        const {fromDate = null, toDate = null, customerId = null} = req.query;
        let query = {
            ...(!!customerId && {
                customer: ObjectId(customerId)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    serviceInvoiceDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                }),
            company: ObjectId(req.user.company),
            status: {$in: ["Report Generated"]}
        };
        let project = getAllServiceInvoiceReportsAttributes();
        let pipeline = [
            {
                $match: query
            }
        ];
        let rows = await SIRepository.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        invoiceAmount: {$sum: {$toDouble: "$invoiceAmount"}},
                        totalTaxAmount: {$sum: {$toDouble: "$totalTaxAmount"}},
                        totalAmountWithTax: {$sum: {$toDouble: "$totalAmountWithTax"}}
                    }
                },
                {
                    $project: {
                        invoiceAmount: {$round: ["$invoiceAmount", 2]},
                        totalTaxAmount: {$round: ["$totalTaxAmount", 2]},
                        totalAmountWithTax: {$round: ["$totalAmountWithTax", 2]},
                        _id: 0
                    }
                }
            ]
        });
        return res.success({
            customers,
            ...rows
        });
    } catch (e) {
        console.error("getAllReports Service Invoice", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllNetServices = async company => {
    const rows = await Model.aggregate([
        {
            $match: {
                company: ObjectId(company),
                status: {$in: [OPTIONS.defaultStatus.REPORT_GENERATED]}
            }
        },
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$serviceInvoiceDate"}}
            }
        },
        {
            $facet: {
                MTDNetService: [
                    {
                        $match: {
                            matchDate: {
                                $gte: dateToAnyFormat(getFirstDateOfMonth(), "YYYY-MM-DD"),
                                $lte: dateToAnyFormat(getLastDateOfMonth(), "YYYY-MM-DD")
                            }
                        }
                    },
                    {
                        $lookup: {
                            from: "Customer",
                            localField: "customer",
                            foreignField: "_id",
                            pipeline: [{$project: {customerCategory: 1}}],
                            as: "customer"
                        }
                    },
                    {
                        $unwind: "$customer"
                    },
                    {
                        $match: {
                            "customer.customerCategory": {$in: ["Domestic – OEM", "Domestic – Dealer"]}
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            amount: {$sum: "$totalValue"}
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            amount: {$round: [{$divide: ["$amount", LAKH]}, 2]}
                        }
                    }
                ],
                YTDNetService: [
                    {
                        $match: {
                            status: {$nin: ["Created", "Rejected"]},
                            matchDate: {
                                $gte: dateToAnyFormat(getFirstDayOfFiscalYear(), "YYYY-MM-DD"),
                                $lte: dateToAnyFormat(getLastDayOfFiscalYear(), "YYYY-MM-DD")
                            }
                        }
                    },
                    {
                        $lookup: {
                            from: "Customer",
                            localField: "customer",
                            foreignField: "_id",
                            pipeline: [{$project: {customerCategory: 1}}],
                            as: "customer"
                        }
                    },
                    {
                        $unwind: "$customer"
                    },
                    {
                        $match: {
                            "customer.customerCategory": {$in: ["Domestic – OEM", "Domestic – Dealer"]}
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            amount: {$sum: "$totalValue"}
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            amount: {$round: [{$divide: ["$amount", LAKH]}, 2]}
                        }
                    }
                ]
            }
        }
    ]);
    let obj = {
        MTDNetService: rows[0]?.MTDNetService[0]?.amount || 0,
        YTDNetService: rows[0]?.YTDNetService[0]?.amount || 0
    };
    return obj;
};

exports.getAvgMonthlyNetService = async company => {
    const monthDifference = getMonthDiffFromCurrentFiscalYear("months");
    const resultDomestic = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$serviceInvoiceDate"}}
            }
        },
        {
            $match: {
                company: ObjectId(company),
                status: {$nin: ["Awaiting Approval"]},
                matchDate: {
                    $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                    $lte: dateToAnyFormat(getLastDayOfFiscalYear(), "YYYY-MM-DD")
                }
            }
        },
        {
            $lookup: {
                from: "Customer",
                localField: "customer",
                foreignField: "_id",
                pipeline: [{$project: {customerCategory: 1}}],
                as: "customer"
            }
        },
        {
            $unwind: "$customer"
        },
        {
            $match: {
                "customer.customerCategory": {$in: ["Domestic – OEM", "Domestic – Dealer"]}
            }
        },
        {
            $group: {
                _id: null,
                amount: {$sum: "$totalValue"}
            }
        },
        {
            $project: {
                _id: 1,
                amount: {$round: [{$divide: ["$amount", monthDifference]}, 1]}
            }
        }
    ]);
    if (resultDomestic.length > 0) {
        return resultDomestic[0];
    } else {
        return (resultDomestic[0] = {amount: 0});
    }
};
exports.getTotalNoOfInvoicesPerDay = async company => {
    const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
    let rows = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$serviceInvoiceDate"}}
            }
        },
        {
            $match: {
                company: ObjectId(company),
                matchDate: currentDate
            }
        },
        {
            $group: {
                _id: null,
                totalBookedInvoices: {
                    $sum: {$cond: [{$eq: ["$status", OPTIONS.defaultStatus.AWAITING_APPROVAL]}, 1, 0]}
                },
                totalInvoicedValueWithoutTax: {$sum: "$totalValue"},
                totalInvoicedValueWithTax: {$sum: "$totalAmountWithTax"}
            }
        },
        {
            $project: {
                _id: 0,
                totalBookedInvoices: 1,
                totalInvoicedValueWithoutTax: {$round: [{$divide: ["$totalInvoicedValueWithoutTax", LAKH]}, 2]},
                totalInvoicedValueWithTax: {$round: [{$divide: ["$totalInvoicedValueWithTax", LAKH]}, 2]}
            }
        }
    ]);
    rows = {
        totalBookedInvoices: rows[0]?.totalBookedInvoices || 0,
        totalInvoicedValueWithoutTax: rows[0]?.totalInvoicedValueWithoutTax || 0,
        totalInvoicedValueWithTax: rows[0]?.totalInvoicedValueWithTax || 0
    };
    return rows;
};

// exports.getAllInvoiceAgingReports = asyncHandler(async (req, res) => {
//     try {
//         const customersList = await getAllCustomers(req.user.company, {
//             customerName: 1
//         });
//         const {
//             search = null,
//             excel = "false",
//             page = 1,
//             pageSize = 10,
//             column = "createdAt",
//             direction = -1,
//             toDate = null,
//             fromDate = null,
//             customer = null
//         } = req.query;
//         let skip = Math.max(0, page - 1) * pageSize;
//         let query = {
//             company: ObjectId(req.user.company),
//             paymentStatus: {$in: [OPTIONS.defaultStatus.UNPAID, OPTIONS.defaultStatus.PARTIALLY_PAID]},
//             status: OPTIONS.defaultStatus.REPORT_GENERATED,
//             ...(!!customer && {customer: ObjectId(customer)}),
//             ...(!!toDate &&
//                 !!fromDate && {
//                     serviceInvoiceDate: {
//                         $lte: getEndDateTime(toDate),
//                         $gte: getStartDateTime(fromDate)
//                     }
//                 })
//         };
//         let project = getAllSIInvoicePaymentReportsAttributes();
//         let match = await getMatchData(project, search);
//         let pagination = [];
//         if (excel == "false") {
//             pagination = [{$skip: +skip}, {$limit: +pageSize}];
//         }
//         let rows = await Model.aggregate([
//             {
//                 $match: query
//             },
//             {
//                 $addFields: {
//                     invoiceAge: {
//                         $dateDiff: {
//                             startDate: "$serviceInvoiceDate",
//                             endDate: new Date(),
//                             unit: "day"
//                         }
//                     }
//                 }
//             },
//             ...getAllReportsAggregationFooter(project, match, column, direction, pagination, [
//                 {
//                     $group: {
//                         _id: null,
//                         totalValue: {$sum: {$toDouble: "$totalValue"}},
//                         totalTaxAmount: {$sum: {$toDouble: "$GSTAmount"}},
//                         totalAmountWithTax: {$sum: {$toDouble: "$totalAmountWithTax"}}
//                     }
//                 },
//                 {
//                     $project: {
//                         totalValue: {$round: ["$totalValue", 2]},
//                         totalTaxAmount: {$round: ["$totalTaxAmount", 2]},
//                         totalAmountWithTax: {$round: ["$totalAmountWithTax", 2]}
//                     }
//                 }
//             ])
//         ]);
//         return res.success({
//             customersList,
//             ...outputDataReports(rows)
//         });
//     } catch (e) {
//         console.error("getAllInvoiceAgingReports", e);
//         const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
//         return res.serverError(errors);
//     }
// });

// exports.getAllServiceInvoice = async (company, project = {}) => {
//     try {
//         let rows = await Model.find(
//             {
//                 paymentStatus: {$in: [OPTIONS.defaultStatus.UNPAID, OPTIONS.defaultStatus.PARTIALLY_PAID]},
//                 status: OPTIONS.defaultStatus.REPORT_GENERATED,
//                 company: company
//             },
//             project
//         );
//         return rows;
//     } catch (e) {
//         console.error("getAllCustomers", e);
//         const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
//         return errors;
//     }
// };
// exports.updateSIPaymentStatusOnInvoicePayment = async serviceInvoiceId => {
//     try {
//         await Model.findOneAndUpdate(
//             {
//                 _id: serviceInvoiceId
//             },
//             {$set: {paymentStatus: OPTIONS.defaultStatus.PAID}},
//             {returnOriginal: true}
//         );
//     } catch (e) {
//         console.error("updateSIPaymentStatusOnInvoicePayment", e);
//     }
// };
