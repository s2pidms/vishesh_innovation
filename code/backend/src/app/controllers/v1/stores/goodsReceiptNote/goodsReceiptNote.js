const Model = require("../../../../models/stores/GRNModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {
    updatePOQtyOnGRN,
    updatePOQtyOnGRNUpdate,
    updatePOStatusOnGRN,
    updatePOQtyOnGRNCancel
} = require("../../purchase/purchaseOrder/purchaseOrder");
const {default: mongoose} = require("mongoose");
const {
    getFirstDateOfCurrentFiscalYear,
    getLastDateOfCurrentFiscalYear,
    getFiscalMonthsName
} = require("../../../../utilities/utility");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {dateToAnyFormat} = require("../../../../helpers/dateTime");
const GRNHelper = require("../../../../models/stores/helpers/GRNHelper");
// const {getGRNMailConfig} = require("./goodsReceiptNoteMail");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {GOODS_RECEIPT_NOTE} = require("../../../../mocks/schemasConstant/storesConstant");
const {filteredSupplierList} = require("../../../../models/purchase/repository/supplierRepository");
const {filteredPurchaseOrderList} = require("../../../../models/purchase/repository/purchaseOrderRepository");
const GRNRepository = require("../../../../models/stores/repository/GRNRepository");
const {getAllTransporter} = require("../../sales/transporter/transporter");
const ObjectId = mongoose.Types.ObjectId;
const MailTriggerRepository = require("../../../../models/settings/repository/mailTriggerRepository");
const {STORES_MAIL_CONST} = require("../../../../mocks/mailTriggerConstants");

// @desc    getAll GoodsReceiptNote Record
exports.getAll = async (req, res) => {
    try {
        const {statusArray = null} = req.query;
        let project = GRNHelper.getAllGRNAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company),
                    GRNStatus: {$nin: statusArray}
                }
            },
            {
                $addFields: {
                    GRNDateS: {$dateToString: {format: "%d-%m-%Y", date: "$GRNDate"}}
                }
            },
            {
                $lookup: {
                    from: "Supplier",
                    localField: "supplier",
                    foreignField: "_id",
                    pipeline: [{$project: {supplierName: 1}}],
                    as: "supplier"
                }
            },
            {$unwind: "$supplier"},
            {
                $lookup: {
                    from: "PurchaseOrder",
                    localField: "PONumber",
                    foreignField: "_id",
                    pipeline: [{$project: {PONumber: 1, _id: 1}}],
                    as: "PONumber"
                }
            },
            {$unwind: "$PONumber"}
        ];
        let rows = await GRNRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllAdvanceSalaryRequest", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
// @desc    create GoodsReceiptNote new Record
exports.create = async (req, res) => {
    try {
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const saveObj = new Model(createdObj);
        const itemDetails = await saveObj.save();
        for (let n of itemDetails.GRNDetails) {
            await updatePOQtyOnGRN(
                req.user.sub,
                itemDetails.PONumber.valueOf(),
                n.POLineNumber,
                n.item.valueOf(),
                n.GRNQty
            );
        }
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("GoodsReceiptNote")
            });
            // let mailCreateObj = {
            //     GRNId: itemDetails._id,
            //     action: "created",
            //     company: req.user.company,
            //     mailAction: "Create"
            // };
            // getGRNMailConfig(mailCreateObj);
            let mailTriggerCreateObj = {
                subModuleId: itemDetails._id,
                action: "created",
                company: req.user.company,
                mailAction: "Create",
                collectionName: GOODS_RECEIPT_NOTE.COLLECTION_NAME,
                message: `Goods Receipt Note Created - ${itemDetails.GRNNumber}`,
                module: STORES_MAIL_CONST.GRN.MODULE,
                subModule: STORES_MAIL_CONST.GRN.SUB_MODULE,
                isSent: false
            };
            await MailTriggerRepository.createDoc(mailTriggerCreateObj);
        }
    } catch (e) {
        console.error("create GoodsReceiptNote", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @desc    update GoodsReceiptNote  Record
exports.update = async (req, res) => {
    try {
        let itemDetails = await Model.findById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await generateCreateData(itemDetails, req.body);
        if (req.body.GRNDetails && req.body.GRNDetails.length) {
            itemDetails.GRNDetails = req.body.GRNDetails;
        }
        itemDetails = await itemDetails.save();
        for (let n of itemDetails.GRNDetails) {
            await updatePOQtyOnGRNUpdate(
                req.user.sub,
                itemDetails.PONumber.valueOf(),
                n.POLineNumber,
                n.item.valueOf(),
                n.GRNQty
            );
        }
        if (itemDetails.GRNStatus == OPTIONS.defaultStatus.APPROVED) {
            await updatePOStatusOnGRN(itemDetails.PONumber.valueOf(), req.params.id);
        }
        if (itemDetails) {
            res.success({
                message: `GRN has been ${
                    itemDetails.GRNStatus == "Awaiting Approval" ? "updated" : itemDetails.GRNStatus.toLowerCase()
                } successfully`
            });
            // let mailUpdateObj = {
            //     GRNId: itemDetails._id,
            //     action: "modified",
            //     company: req.user.company,
            //     mailAction: itemDetails.GRNStatus
            // };
            // getGRNMailConfig(mailUpdateObj);
            if (!["Awaiting Approval", "GRN Partial Created", "GRN Created"].includes(itemDetails.GRNStatus)) {
                let mailTriggerCreateObj = {
                    subModuleId: itemDetails._id,
                    action: itemDetails.GRNStatus,
                    company: req.user.company,
                    mailAction: itemDetails.GRNStatus,
                    collectionName: GOODS_RECEIPT_NOTE.COLLECTION_NAME,
                    message: `Goods Receipt Note ${itemDetails.GRNStatus} - ${itemDetails.GRNNumber}`,
                    module: STORES_MAIL_CONST.GRN.MODULE,
                    subModule: STORES_MAIL_CONST.GRN.SUB_MODULE,
                    isSent: false
                };
                await MailTriggerRepository.createDoc(mailTriggerCreateObj);
            }
        }
    } catch (e) {
        console.error("update GoodsReceiptNote", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @desc    deleteById GoodsReceiptNote Record
exports.deleteById = async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("GoodsReceiptNote")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("GoodsReceiptNote");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById GoodsReceiptNote", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @desc    getById GoodsReceiptNote Record
exports.getById = async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id)
            .populate("PONumber")
            .populate("supplier", "_id supplierCode supplierName")
            .populate(
                "GRNDetails.item",
                "_id itemCode itemName  orderInfoUOM itemDescription primaryUnit conversionOfUnits"
            );
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("GoodsReceiptNote");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById GoodsReceiptNote", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

// @desc    getAllMasterData GoodsReceiptNote Record
exports.getAllMasterData = async (req, res) => {
    try {
        const GRNQtyPercent = await findAppParameterValue("ALLOWABLE_GRN_QUANTITY_PERCENTAGE", req.user.company);
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            {...GOODS_RECEIPT_NOTE.AUTO_INCREMENT_DATA()},
            req.user.company
        );

        const suppliersOptions = await filteredSupplierList([
            {$match: {company: ObjectId(req.user.company), isSupplierActive: "A"}},
            {$sort: {supplierName: 1}},
            {
                $addFields: {
                    supplierBillingAddress: {$arrayElemAt: ["$supplierBillingAddress", 0]}
                }
            },
            {
                $project: {
                    label: "$supplierName",
                    value: "$_id",
                    supplierCode: 1,
                    supplierBillingState: "$supplierBillingAddress.state",
                    supplierBillingCity: "$supplierBillingAddress.city",
                    supplierBillingPinCode: "$supplierBillingAddress.pinCode"
                }
            }
        ]);
        const transporter = await getAllTransporter(
            {
                company: ObjectId(req.user.company)
            },
            {label: "$name", value: "$name", _id: 0}
        );
        return res.success({
            autoIncrementNo,
            suppliersOptions,
            GRNQtyPercent: +GRNQtyPercent,
            transporterOptions: transporter
        });
    } catch (error) {
        console.error("getAllMasterData GoodsReceiptNote", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
exports.getPOBySupplierId = async (req, res) => {
    try {
        const rows = await filteredPurchaseOrderList([
            {
                $match: {
                    supplier: ObjectId(req.params.id),
                    POStatus: {$in: ["Report Generated", "GRN Partial Created", "GRN Created"]},
                    company: ObjectId(req.user.company)
                }
            },
            {$sort: {PONumber: -1}},
            {
                $project: {
                    PONumber: 1,
                    PODate: 1,
                    deliveryLocation: 1
                }
            }
        ]);
        return res.success(rows);
    } catch (error) {
        console.error("getPOBySupplierId ", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
exports.getGRNDetailsByPOId = async (req, res) => {
    try {
        const rows = await filteredPurchaseOrderList([
            {
                $match: {
                    _id: ObjectId(req.params.id),
                    company: ObjectId(req.user.company)
                }
            },
            {$unwind: {path: "$PODetails", preserveNullAndEmptyArrays: true}},
            {
                $lookup: {
                    from: "Items",
                    localField: "PODetails.item",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                itemCode: 1,
                                itemName: 1,
                                itemDescription: 1,
                                conversionOfUnits: 1
                            }
                        }
                    ],
                    as: "PODetails.item"
                }
            },
            {
                $unwind: "$PODetails.item"
            },
            {
                $project: {
                    item: "$PODetails.item._id",
                    itemCode: "$PODetails.item.itemCode",
                    itemName: "$PODetails.item.itemName",
                    itemDescription: "$PODetails.item.itemDescription",
                    primaryToSecondaryConversion: "$PODetails.primaryToSecondaryConversion",
                    secondaryToPrimaryConversion: "$PODetails.secondaryToPrimaryConversion",
                    conversionOfUnits: "$PODetails.unitConversion",
                    POLineNumber: "$PODetails.POLineNumber",
                    UOM: "$PODetails.UOM",
                    primaryUnit: "$PODetails.primaryUnit",
                    secondaryUnit: "$PODetails.secondaryUnit",
                    POQty: "$PODetails.POQty",
                    standardRate: "$PODetails.standardRate",
                    purchaseRate: "$PODetails.purchaseRate",
                    invoicedQty: {$ifNull: ["$PODetails.invoicedQty", 0]},
                    balancedQty: {$ifNull: ["$PODetails.balancedQty", 0]},
                    canceledQty: {$ifNull: ["$PODetails.canceledQty", 0]},
                    batchDate: {$dateToString: {format: "%Y-%m-%d", date: new Date()}}
                }
            }
        ]);
        return res.success(rows);
    } catch (error) {
        console.error("getPOBySupplierId GoodsReceiptNote", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
exports.getAllGrnList = async company => {
    try {
        let rows = await Model.find({
            GRNStatus: {
                $in: [
                    OPTIONS.defaultStatus.APPROVED,
                    OPTIONS.defaultStatus.REPORT_GENERATED,
                    OPTIONS.defaultStatus.PARTIALLY_RELEASED
                ]
            },
            company: company
        })
            .populate(
                "GRNDetails.item",
                "_id gst igst cgst shelfLife sgst ugst itemCode itemName itemDescription hsn conversionOfUnits QCLevels itemType"
            )
            .sort({GRNNumber: -1});
        return rows;
    } catch (e) {
        console.error("getAlGrnList", e);
    }
};

exports.updateGRNStatusOnMRN = async grnId => {
    try {
        let GRN = await Model.findById(grnId);
        GRN.GRNStatus = "Closed";
        await GRN.save();
    } catch (error) {
        console.error("updatePOQtyOnGRN::::: Error in updating Purchase Order ======= ", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.getGRNCounts = async company => {
    try {
        const result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$GRNDate"}}
                }
            },
            {
                $match: {
                    company: ObjectId(company),
                    GRNStatus: {
                        $in: [
                            OPTIONS.defaultStatus.APPROVED,
                            OPTIONS.defaultStatus.REPORT_GENERATED,
                            OPTIONS.defaultStatus.CLOSED
                        ]
                    },
                    matchDate: {
                        $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                        $lte: dateToAnyFormat(getLastDateOfCurrentFiscalYear(), "YYYY-MM-DD")
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    counts: {$sum: 1}
                }
            }
        ]);
        return result[0]?.counts || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};
exports.getAllGRNAwaitingForMRNCounts = async company => {
    try {
        const result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$GRNDate"}}
                }
            },
            {
                $match: {
                    company: ObjectId(company),
                    GRNStatus: {
                        $in: [OPTIONS.defaultStatus.APPROVED, OPTIONS.defaultStatus.REPORT_GENERATED]
                    },
                    matchDate: {
                        $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                        $lte: dateToAnyFormat(getLastDateOfCurrentFiscalYear(), "YYYY-MM-DD")
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    counts: {$sum: 1}
                }
            }
        ]);
        return result[0]?.counts || 0;
    } catch (error) {
        console.error("Not able to get record ", error);
    }
};
exports.getMonthlyGRNVolume = async company => {
    try {
        const monthsArray = getFiscalMonthsName();
        const GRNData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$GRNDate"}}
                }
            },
            {
                $match: {
                    company: ObjectId(company),
                    GRNStatus: {
                        $in: ["Report Generated", "Closed"]
                    },
                    matchDate: {
                        $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                        $lte: dateToAnyFormat(getLastDateOfCurrentFiscalYear(), "YYYY-MM-DD")
                    }
                }
            },
            {
                $group: {
                    _id: {year_month: {$substrCP: ["$GRNDate", 0, 7]}},
                    count: {$sum: 1}
                }
            },
            {
                $sort: {"_id.year_month": 1}
            },
            {
                $project: {
                    _id: 0,
                    count: 1,
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
                    data: {$push: {k: "$month_year", v: "$count"}}
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
                GRNData[index] = propertyValues[n];
                n++;
            });
            let monthlyGRNVolume = {Months: monthsArray, Orders: GRNData};
            return monthlyGRNVolume;
        } else {
            let monthlyGRNVolume = {Months: monthsArray, Orders: []};
            return monthlyGRNVolume;
        }
    } catch (error) {
        console.error(error);
    }
};

exports.getMonthlyGeneratedGRNVolume = async company => {
    try {
        const monthsArray = getFiscalMonthsName();
        const GRNData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = await Model.aggregate([
            {
                $match: {
                    company: ObjectId(company),
                    GRNStatus: OPTIONS.defaultStatus.REPORT_GENERATED,
                    GRNDate: {
                        $gte: getFirstDateOfCurrentFiscalYear(),
                        $lte: getLastDateOfCurrentFiscalYear()
                    }
                }
            },
            {
                $group: {
                    _id: {year_month: {$substrCP: ["$GRNDate", 0, 7]}},
                    count: {$sum: 1}
                }
            },
            {
                $sort: {"_id.year_month": 1}
            },
            {
                $project: {
                    _id: 0,
                    count: 1,
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
                    data: {$push: {k: "$month_year", v: "$count"}}
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
                GRNData[index] = propertyValues[n];
                n++;
            });
            let monthlyGRNVolume = {months: monthsArray, orders: GRNData};
            return monthlyGRNVolume;
        } else {
            let monthlyGRNVolume = {months: monthsArray, orders: []};
            return monthlyGRNVolume;
        }
    } catch (error) {
        console.error(error);
    }
};

exports.getAllGRNForSupplementaryPO = async (req, res) => {
    try {
        let rows = await Model.aggregate([
            {$unwind: "$GRNDetails"},
            {
                $match: {
                    // GRNStatus: {$nin: ["Report Generated", "Closed"]},
                    "GRNDetails.POQty": {$exists: true},
                    $expr: {
                        $gt: ["$GRNDetails.GRNQty", "$GRNDetails.POQty"]
                    }
                }
            },
            {
                $project: {
                    GRNNumber: 1,
                    GRNQty: "$GRNDetails.GRNQty",
                    POQty: "$GRNDetails.POQty"
                }
            }
        ]);
        return res.success({
            rows
        });
    } catch (e) {
        console.error("getAllGRNForSupplementaryPO", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};

exports.updateOnCancelGRN = async (req, res) => {
    try {
        const options = {
            new: true
        };
        let updatedGRN = await Model.findOneAndUpdate(
            {
                _id: ObjectId(req.params.id),
                GRNStatus: {$in: [OPTIONS.defaultStatus.REPORT_GENERATED, OPTIONS.defaultStatus.APPROVED]}
            },
            {GRNStatus: OPTIONS.defaultStatus.CANCELLED},
            options
        );
        if (updatedGRN.GRNStatus == OPTIONS.defaultStatus.CANCELLED) {
            await updatePOQtyOnGRNCancel(req.user.sub, updatedGRN);
        }
        return res.success({
            message: MESSAGES.apiSuccessStrings.CANCELLED("GoodsReceiptNote")
        });
    } catch (e) {
        console.error("update GoodsReceiptNote", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
};
exports.getTotalGRNCreatedPerDay = async company => {
    const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
    const rows = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$GRNDate"}}
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
                count: {$sum: {$cond: [{$eq: ["$GRNStatus", OPTIONS.defaultStatus.AWAITING_APPROVAL]}, 1, 0]}}
            }
        },
        {
            $project: {
                _id: 0,
                count: 1
            }
        }
    ]);
    return rows[0]?.count || 0;
};
