const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/stores/FGINModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllReportsAggregationFooter, outputDataReports} = require("../../../../helpers/utility");
const {getMatchData} = require("../../../../helpers/global.options");
const {default: mongoose} = require("mongoose");
const {getCompanyLocations} = require("../../settings/company/company");
const {getDateDiff, dateToAnyFormat, getEndDateTime, getStartDateTime} = require("../../../../helpers/dateTime");
const FGINHelper = require("../../../../models/stores/helpers/FGINHelper");
const FGINRepository = require("../../../../models/stores/repository/FGINRepository");
const ObjectId = mongoose.Types.ObjectId;

exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const {SKUName = null, fromDate = null, toDate = null} = req.query;
        let project = FGINHelper.getAllFGINReportsAttributes();
        let query = {
            company: ObjectId(req.user.company),
            FGINQuantity: {$gt: 0},
            status: {$in: ["Created"]},
            ...(!!SKUName && {
                SKUId: ObjectId(SKUName)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    manufacturingDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let pipeline = [
            {
                $match: query
            },
            {
                $addFields: {
                    balancedQty: {$toString: "$balancedQty"},
                    manufacturingDateS: {$dateToString: {format: "%d-%m-%Y", date: "$manufacturingDate"}},
                    expiryDateS: {$dateToString: {format: "%d-%m-%Y", date: "$expiryDate"}}
                }
            }
        ];
        let rows = await FGINRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success(rows);
    } catch (e) {
        console.error("getAllFinishedGoodsInwardEntry", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllFGINSummaryReports = asyncHandler(async (req, res) => {
    try {
        const {fromDate = null, toDate = null, location = null} = req.query;
        let project = FGINHelper.getAllFGINSummaryReportsAttributes();
        let query = {
            company: ObjectId(req.user.company),
            // producedQty: {$gt: 0},
            ...(!!location && {
                location: location
            }),
            ...(!!toDate &&
                !!fromDate && {
                    FGINDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let pipeline = [
            {
                $match: query
            },
            {
                $addFields: {
                    shelfLife: {
                        $cond: [
                            {
                                $ne: [{$type: "$shelfLife"}, "missing"]
                            },
                            {$ceil: "$shelfLife"},
                            {$literal: null}
                        ]
                    }
                }
            },
            {
                $addFields: {
                    expiryDate: {
                        $cond: [
                            {
                                $ne: [{$type: "$shelfLife"}, "missing"]
                            },
                            {
                                $dateAdd: {
                                    startDate: "$manufacturingDate",
                                    unit: "month",
                                    amount: "$shelfLife"
                                }
                            },
                            {$literal: null}
                        ]
                    }
                }
            }
        ];
        let rows = await FGINRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success(rows);
    } catch (e) {
        console.error("getAllFGINSummaryReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllFGINLocationWiseReports = asyncHandler(async (req, res) => {
    try {
        const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
        const locations = await getCompanyLocations(req.user.company);
        const {fromDate = null, toDate = null, location = null} = req.query;
        let project = FGINHelper.getAllFGINLocationWiseReportsAttributes();
        let query = {
            company: ObjectId(req.user.company),
            FGINQuantity: {$gt: 0},
            ...(!!location && {
                location: location
            }),
            ...(!!toDate &&
                !!fromDate && {
                    FGINDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let pipeline = [
            {
                $match: query
            }
        ];
        let output = await FGINRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        if (output.rows.length > 0) {
            for (const ele of output.rows) {
                if (!!ele.expiryDate) {
                    ele.expiryDate = dateToAnyFormat(ele.expiryDate, "YYYY-MM-DD");
                    let dateDiff = getDateDiff(ele.expiryDate, currentDate, "days");
                    if (+dateDiff < 0) {
                        ele.aging = "red";
                    } else if (+dateDiff > 0 && +dateDiff < 30) {
                        ele.aging = "orange";
                    } else {
                        ele.aging = "green";
                    }
                    ele.expiryDate = dateToAnyFormat(ele.expiryDate, "DD-MM-YYYY");
                }
            }
        }
        return res.success({
            ...output,
            locations: locations.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (e) {
        console.error("getAllFGINDetailsReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllFGINAllLocationReports = asyncHandler(async (req, res) => {
    try {
        const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
        const locations = await getCompanyLocations(req.user.company);
        const {fromDate = null, location = null} = req.query;
        let project = FGINHelper.getAllFGINAllLocationReportsAttributes();
        let query = {
            company: ObjectId(req.user.company),
            FGINQuantity: {$gt: 0},
            ...(!!location && {
                location: location == "All" ? {$exists: true} : location
            }),
            ...(!!fromDate && {
                matchDate: {
                    $gte: fromDate
                }
            })
        };
        let pipeline = [
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$FGINDate"}}
                }
            },
            {
                $match: query
            }
        ];
        let output = await FGINRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        if (output.rows.length > 0) {
            for (const ele of output.rows) {
                if (!!ele.expiryDate) {
                    ele.expiryDate = dateToAnyFormat(ele.expiryDate, "YYYY-MM-DD");
                    let dateDiff = getDateDiff(ele.expiryDate, currentDate, "days");
                    if (+dateDiff < 0) {
                        ele.aging = "red";
                    } else if (+dateDiff > 0 && +dateDiff < 30) {
                        ele.aging = "orange";
                    } else {
                        ele.aging = "green";
                    }
                    ele.expiryDate = dateToAnyFormat(ele.expiryDate, "DD-MM-YYYY");
                }
            }
        }
        return res.success({
            ...output,
            locations: locations.split(",")
        });
    } catch (e) {
        console.error("getAllFGINAllLocationReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllFGINValueFinanceReports = asyncHandler(async (req, res) => {
    try {
        const locations = await getCompanyLocations(req.user.company);
        const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
        const {fromDate = null, toDate = null, location = null} = req.query;
        let project = FGINHelper.getAllFGINValueFinanceReportsAttributes();
        let query = {
            company: ObjectId(req.user.company),
            FGINQuantity: {$gt: 0},
            ...(!!location && {
                location: location
            }),
            ...(!!toDate &&
                !!fromDate && {
                    manufacturingDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let pipeline = [
            {
                $match: query
            },
            {
                $lookup: {
                    from: "SKUMaster",
                    localField: "SKUId",
                    foreignField: "_id",
                    pipeline: [{$project: {customerInfo: 1}}],
                    as: "SKUId"
                }
            },
            {$unwind: "$SKUId"},
            {
                $addFields: {
                    customerInfo: {$first: "$SKUId.customerInfo"}
                }
            },
            {
                $unwind: {
                    path: "$customerInfo",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $addFields: {
                    lineValue: {
                        $round: [{$multiply: [{$toDouble: "$customerInfo.standardSellingRate"}, "$FGINQuantity"]}, 2]
                    }
                }
            }
        ];
        let output = await FGINRepository.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        totalLineValue: {$sum: {$toDouble: "$lineValue"}}
                    }
                },
                {
                    $project: {
                        _id: null,
                        totalLineValue: {$round: ["$totalLineValue", 2]}
                    }
                }
            ]
        });
        if (output.rows.length > 0) {
            for (const ele of output.rows) {
                if (!!ele.expiryDate) {
                    ele.expiryDate = dateToAnyFormat(ele.expiryDate, "YYYY-MM-DD");
                    let dateDiff = getDateDiff(ele.expiryDate, currentDate, "days");
                    if (+dateDiff < 0) {
                        ele.aging = "red";
                    } else if (+dateDiff > 0 && +dateDiff < 30) {
                        ele.aging = "orange";
                    } else {
                        ele.aging = "green";
                    }
                }
            }
        }
        return res.success({
            ...output,
            locations: locations.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (e) {
        console.error("getAllFGINValueFinanceReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
