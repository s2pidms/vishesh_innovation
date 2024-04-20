const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/dispatch/salesInvoiceModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {getMatchData} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {getAllCustomers} = require("../../sales/customerMaster/customerMaster");
const {
    getFirstDateOfCurrentFiscalYear,
    getLastDateOfCurrentFiscalYear,
    getAllMonthName,
    getFiscalMonthsName
} = require("../../../../utilities/utility");
const {getAllReportsAggregationFooter, outputDataReports} = require("../../../../helpers/utility");
const {getEndDateTime, getStartDateTime} = require("../../../../helpers/dateTime");
const SalesInvoiceHelper = require("../../../../models/dispatch/helpers/salesInvoiceHelper");
const {LAKH} = require("../../../../mocks/number.constant");
const SalesReports = require("../../sales/salesOrder/salesOrderReports");
const SalesInvoiceRepository = require("../../../../models/dispatch/repository/salesInvoiceRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const {customer = null, fromDate = null, toDate = null} = req.query;
        let project = SalesInvoiceHelper.getAllReportsAttributes();
        let query = {
            company: ObjectId(req.user.company),
            salesInvoiceStatus: {$nin: ["Created", "Rejected"]},
            ...(!!customer && {
                customer: {$eq: ObjectId(customer)}
            }),
            ...(!!toDate &&
                !!fromDate && {
                    salesInvoiceDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let customers = await getAllCustomers(req.user.company, {customerName: 1, company: 0});
        let pipeline = [
            {
                $match: query
            },
            {
                $addFields: {
                    salesInvoiceDateS: {$dateToString: {format: "%d-%m-%Y", date: "$salesInvoiceDate"}}
                }
            },
            {
                $lookup: {
                    from: "Customer",
                    localField: "customer",
                    foreignField: "_id",
                    pipeline: [{$project: {GSTIN: 1, customerName: 1}}],
                    as: "customer"
                }
            },
            {$unwind: "$customer"}
        ];
        let rows = await SalesInvoiceRepository.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        totalInvoiceValue: {$sum: {$toDouble: "$salesInvoiceTotalAmountWithTax"}},
                        totalSalesInvoiceAmount: {$sum: {$toDouble: "$salesInvoiceTotalAmount"}},
                        totalSalesInvoiceTaxAmount: {$sum: {$toDouble: "$salesInvoiceTotalTaxAmount"}}
                    }
                },
                {
                    $project: {
                        _id: null,
                        totalInvoiceValue: {$round: ["$totalInvoiceValue", 2]},
                        totalSalesInvoiceAmount: {$round: ["$totalSalesInvoiceAmount", 2]},
                        totalSalesInvoiceTaxAmount: {$round: ["$totalSalesInvoiceTaxAmount", 2]}
                    }
                }
            ]
        });

        return res.success({
            customers,
            ...rows
        });
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllTaxInvoiceTrendAnalysisReports = async (reqQuery, company) => {
    try {
        const months = getAllMonthName();
        const {
            search = null,
            excel = "false",
            page = 1,
            pageSize = 10,
            column = "createdAt",
            direction = -1,
            fromDate = null,
            toDate = null
        } = reqQuery;
        let skip = Math.max(0, page - 1) * pageSize;
        let project = {
            month: 1,
            MM: "$_id.MM",
            YYYY: "$_id.YYYY",
            totalInvoiceAmount: 1
        };
        let match = await getMatchData(project, search);
        let query = {
            company: ObjectId(company),
            salesInvoiceStatus: {$nin: ["Created", "Rejected"]},
            ...(!!toDate &&
                !!fromDate && {
                    salesInvoiceDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let pagination = [];
        if (excel == "false") {
            pagination = [{$skip: +skip}, {$limit: +pageSize}];
        }
        let rows = await Model.aggregate([
            {
                $match: query
            },
            {
                $project: {
                    salesInvoiceDate: 1,
                    salesInvoiceTotalAmountWithTax: 1,
                    MM: {$month: "$salesInvoiceDate"},
                    YYYY: {$year: "$salesInvoiceDate"}
                }
            },
            {
                $group: {
                    _id: {MM: "$MM", YYYY: "$YYYY"},
                    amount: {$sum: "$salesInvoiceTotalAmountWithTax"}
                }
            },
            {
                $addFields: {
                    totalInvoiceAmount: {$toString: {$round: ["$amount", 2]}},
                    month: {
                        $arrayElemAt: [months, {$subtract: ["$_id.MM", 1]}]
                    }
                }
            },
            ...getAllReportsAggregationFooter(project, match, column, direction, pagination, [
                {
                    $group: {
                        _id: null,
                        totalInvoiceAmount: {$sum: {$toDouble: "$totalInvoiceAmount"}}
                    }
                },
                {
                    $project: {
                        totalInvoiceAmount: 1,
                        _id: 0
                    }
                }
            ])
        ]);
        return {
            ...outputDataReports(rows)
        };
    } catch (e) {
        console.error("getAllTaxInvoiceTrendAnalysisReports", e);
    }
};
exports.getAllSalesAndInvoiceAnalysis = asyncHandler(async (req, res) => {
    try {
        let salesTrendAnalysisList = await SalesReports.getAllSalesTrendAnalysisReports(req.query, req.user.company);
        let invoiceTrendAnalysisList = await this.getAllTaxInvoiceTrendAnalysisReports(req.query, req.user.company);
        let mergedOutput = {
            rows: [],
            count: salesTrendAnalysisList?.count || 0,
            totalInvoiceAmount: invoiceTrendAnalysisList?.totalAmounts?.totalInvoiceAmount || 0,
            SOTotalAmount: salesTrendAnalysisList?.totalAmounts?.SOTotalAmount || 0
        };
        for (const sales of salesTrendAnalysisList.rows) {
            for (const invoice of invoiceTrendAnalysisList.rows) {
                if (sales.month == invoice.month && sales.MM == invoice.MM && sales.YYYY == invoice.YYYY) {
                    mergedOutput.rows.push({...sales, ...invoice});
                }
            }
        }
        return res.success(mergedOutput);
    } catch (error) {
        console.error("getAllSalesAndInvoiceAnalysis", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllInvoiceAmountReports = async company => {
    try {
        const monthsArray = getFiscalMonthsName();
        const invoiceAmount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = await Model.aggregate([
            {
                $match: {
                    company: ObjectId(company),
                    salesInvoiceStatus: {$nin: ["Created", "Rejected"]},
                    salesInvoiceDate: {
                        $gte: getFirstDateOfCurrentFiscalYear(),
                        $lte: getLastDateOfCurrentFiscalYear()
                    }
                }
            },
            {
                $group: {
                    _id: {year_month: {$substrCP: ["$salesInvoiceDate", 0, 7]}},
                    totalAmount: {$sum: "$salesInvoiceTotalAmountWithTax"}
                }
            },
            {
                $sort: {"_id.year_month": 1}
            },
            {
                $project: {
                    _id: 0,
                    totalAmount: 1,
                    month_year: {
                        $concat: [
                            {
                                $arrayElemAt: [
                                    monthsArray,
                                    {
                                        $subtract: [{$toInt: {$substrCP: ["$_id.year_month", 5, 2]}}, 4]
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    data: {$push: {k: "$month_year", v: "$totalAmount"}}
                }
            },
            {
                $project: {
                    data: {$arrayToObject: "$data"},
                    _id: 0
                }
            }
        ]);
        if (result.length > 0) {
            const propertyNames = Object.keys(result[0].data);
            const propertyValues = Object.values(result[0].data);
            let n = 0;
            propertyNames.forEach(elem => {
                let index = monthsArray.indexOf(elem);
                invoiceAmount[index] = (propertyValues[n] / LAKH).toFixed(2);
                n++;
            });
            invoiceAmount;
        } else {
            invoiceAmount;
        }
        return invoiceAmount;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};

exports.getAllSalesRegisterReports = asyncHandler(async (req, res) => {
    try {
        const {customer = null, fromDate = null, toDate = null} = req.query;
        let project = SalesInvoiceHelper.getAllSalesRegisterReportsAttributes();
        let query = {
            company: ObjectId(req.user.company),
            salesInvoiceStatus: {$nin: ["Created", "Rejected"]},
            ...(!!customer && {
                customer: ObjectId(customer)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    salesInvoiceDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let customers = await getAllCustomers(req.user.company, {customerName: 1, company: 0});
        let pipeline = [
            {
                $match: query
            },
            {
                $lookup: {
                    from: "Customer",
                    localField: "customer",
                    foreignField: "_id",
                    pipeline: [{$project: {GSTIN: 1, customerName: 1}}],
                    as: "customer"
                }
            },
            {$unwind: "$customer"}
        ];
        let rows = await SalesInvoiceRepository.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        totalInvoiceValue: {$sum: {$toDouble: "$salesInvoiceTotalAmountWithTax"}}
                    }
                },
                {
                    $project: {
                        _id: null,
                        totalInvoiceValue: {$round: ["$totalInvoiceValue", 2]}
                    }
                }
            ]
        });

        return res.success({
            customers,
            ...rows
        });
    } catch (e) {
        console.error("getAllSalesRegisterReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
