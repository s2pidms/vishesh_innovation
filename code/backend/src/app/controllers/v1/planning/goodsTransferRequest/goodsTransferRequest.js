const {default: mongoose} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {
    getAllGoodsTransferRequestAttributes
} = require("../../../../models/planning/helpers/goodsTransferRequestHelper");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {GOODS_TRANSFER_REQUEST} = require("../../../../mocks/schemasConstant/planningConstant");
const GoodsTransferRequestRepository = require("../../../../models/planning/repository/goodsTransferRequestRepository");
const {getCompanyLocations} = require("../../settings/company/company");
const {getAllInventoryCorrectionByItems} = require("../../stores/Inventory/Inventory");
const {filteredDepartmentList} = require("../../../../models/settings/repository/departmentRepository");
const {OPTIONS} = require("../../../../helpers/global.options");
const {getEndDateTime, getStartDateTime} = require("../../../../helpers/dateTime");
const InventoryRepository = require("../../../../models/stores/repository/inventoryCorrectionRepository");
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllGoodsTransferRequestAttributes();
        let pipeline = [
            {$match: {company: ObjectId(req.user.company), status: OPTIONS.defaultStatus.AWAITING_APPROVAL}}
        ];
        let rows = await GoodsTransferRequestRepository.getAllPaginate({
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
        let inventoryRecords = await getAllInventoryCorrectionByItems(req.user.company, createdObj.GTRequestDetails);
        let codes = createdObj.GTRequestDetails.filter(x => {
            if (inventoryRecords.length) {
                return !inventoryRecords.map(y => y?.item?._id).some(ele => String(ele) == String(x?.item));
            } else {
                return true;
            }
        });
        let itemCodes = codes.map(x => x.itemCode);
        const itemDetails = await GoodsTransferRequestRepository.createDoc(createdObj);
        if (itemDetails) {
            res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("Goods Transfer Request"),
                itemCodes
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create Goods Transfer Request", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await GoodsTransferRequestRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        if (req.body.status == OPTIONS.defaultStatus.APPROVED) {
            req.body.GTRequestDetails = req.body.GTRequestDetails.map(ele => {
                ele.balancedQty = ele.GTRequestQty;
                ele.GTQty = 0;
                return ele;
            });
        }
        itemDetails = await GoodsTransferRequestRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Goods Transfer Request has been")
        });
    } catch (e) {
        console.error("update Goods Transfer Request", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await GoodsTransferRequestRepository.deleteDoc({_id: req.params.id});
        if (deleteItem) {
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("Goods Transfer Request")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Goods Transfer Request");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById Goods Transfer Request", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await GoodsTransferRequestRepository.getDocById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("Goods Transfer Request");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById Goods Transfer Request", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            GOODS_TRANSFER_REQUEST.AUTO_INCREMENT_DATA(),
            req.user.company,
            false
        );
        const locationOptions = await getCompanyLocations(req.user.company);
        const departmentOptions = await filteredDepartmentList([
            {
                $match: {
                    goodsTransferRequest: true,
                    company: ObjectId(req.user.company)
                }
            },
            {
                $project: {
                    _id: 0,
                    label: "$departmentName",
                    value: "$departmentName"
                }
            }
        ]);
        return res.success({
            autoIncrementNo,
            locationOptions: locationOptions.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            departmentOptions: departmentOptions
        });
    } catch (error) {
        console.error("getAllMasterData Goods Transfer Request", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllItemsByLocationAndDept = asyncHandler(async (req, res) => {
    try {
        const itemsList = await InventoryRepository.filteredInventoryCorrectionList([
            {
                $match: {
                    department: req.query.department,
                    deliveryLocation: req.query.location
                    // closedIRQty: {$gt: 0}
                }
            },
            {
                $addFields: {
                    convertedClosedIRQty: {
                        $cond: [
                            {$eq: ["$UOM", "$secondaryUnit"]},
                            {
                                $cond: [
                                    {$ne: ["$primaryToSecondaryConversion", null]},
                                    {
                                        $divide: ["$closedIRQty", "$primaryToSecondaryConversion"]
                                    },
                                    {
                                        $multiply: ["$closedIRQty", "$secondaryToPrimaryConversion"]
                                    }
                                ]
                            },
                            "$closedIRQty"
                        ]
                    },
                    UOM: {$ifNull: ["$primaryUnit", "$UOM"]}
                }
            },
            {
                $group: {
                    _id: {itemId: "$item", UOM: "$UOM", width: "$width", length: "$length"},
                    closedIRQty: {$sum: "$convertedClosedIRQty"},
                    primaryToSecondaryConversion: {$first: "$primaryToSecondaryConversion"},
                    secondaryToPrimaryConversion: {$first: "$secondaryToPrimaryConversion"},
                    primaryUnit: {$first: "$primaryUnit"},
                    secondaryUnit: {$first: "$secondaryUnit"},
                    conversionOfUnits: {$first: "$conversionOfUnits"},
                    itemCode: {$first: "$itemCode"},
                    itemName: {$first: "$itemName"},
                    itemDescription: {$first: "$itemDescription"},
                    conversionOfUnits: {$first: "$conversionOfUnits"}
                }
            },
            {
                $project: {
                    _id: 0,
                    GTRequestLineNumber: {$literal: 0},
                    item: "$_id.itemId",
                    itemCode: 1,
                    itemName: 1,
                    itemDescription: 1,
                    UOM: "$_id.UOM",
                    primaryToSecondaryConversion: 1,
                    secondaryToPrimaryConversion: 1,
                    primaryUnit: 1,
                    secondaryUnit: 1,
                    conversionOfUnits: 1,
                    IRQty: {$round: ["$closedIRQty", 4]},
                    GTRequestQty: {$literal: 0},
                    GTQty: {$literal: 0},
                    balancedQty: {$literal: 0},
                    previousGTRequestQty: {$literal: 0}
                }
            },
            {
                $sort: {itemCode: 1}
            }
        ]);
        return res.success(itemsList);
    } catch (error) {
        console.error("getAllItemsByLocationAndDept Goods Transfer Request", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.updateGTRQtyOnGTResponse = async (updatedBy, GTRId, GTRLineNumber, updateItemId, responseQty) => {
    try {
        const GTReqData = await GoodsTransferRequestRepository.getDocById(GTRId);
        if (GTReqData) {
            const newGTRDetails = GTReqData.GTRequestDetails.map(ele => {
                if (ele.GTRequestLineNumber === GTRLineNumber && ele.item.toString() === updateItemId.toString()) {
                    ele.balancedQty = ele.balancedQty + ele.previousGTRequestQty - responseQty;
                    ele.previousGTRequestQty = responseQty;
                }
                return ele;
            });
            GTReqData.updatedBy = updatedBy;
            GTReqData.GTRequestDetails = newGTRDetails;
            const updatedGoodsRequisition = await GTReqData.save();
            return updatedGoodsRequisition;
        }
    } catch (error) {
        console.error("updatedGoodsRequisition::::: Error in updating Goods Requisition ======= ", error);
    }
};
exports.updateGTRQtyOnGTResponseRejected = async (updatedBy, GTRId, GTRLineNumber, updateItemId, responseQty) => {
    try {
        const GTReqData = await GoodsTransferRequestRepository.getDocById(GTRId);
        if (GTReqData) {
            const newGTRDetails = GTReqData.GTRequestDetails.map(ele => {
                if (ele.GTRequestLineNumber === GTRLineNumber && ele.item.toString() === updateItemId.toString()) {
                    ele.balancedQty = ele.balancedQty + responseQty;
                    ele.previousGTRequestQty = 0;
                }
                return ele;
            });
            GTReqData.updatedBy = updatedBy;
            GTReqData.GTRequestDetails = newGTRDetails;
            const updatedGoodsRequisition = await GTReqData.save();
            return updatedGoodsRequisition;
        }
    } catch (error) {
        console.error("updatedGoodsRequisition::::: Error in updating Goods Requisition ======= ", error);
    }
};
exports.getAllGtRequestFulfillmentReports = asyncHandler(async (req, res) => {
    try {
        const {fromDate = null, toDate = null, status = null} = req.query;
        let project = {
            GTRequestNo: 1,
            GTRequestDate: {$dateToString: {format: "%d-%m-%Y", date: "$GTRequestDate"}},
            itemCode: "$GTRequestDetails.itemCode",
            itemName: "$GTRequestDetails.itemName",
            itemDescription: "$GTRequestDetails.itemDescription",
            UOM: "$GTRequestDetails.UOM",
            GTRequestQty: "$GTRequestDetails.GTRequestQty",
            GTQty: {
                $round: [{$abs: {$subtract: ["$GTRequestDetails.GTRequestQty", "$GTRequestDetails.balancedQty"]}}, 2]
            },
            GTStatus: 1,
            createdAt: 1
        };
        let query = {
            company: ObjectId(req.user.company),
            ...(!!toDate &&
                !!fromDate && {
                    GTRequestDate: {
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
                $unwind: "$GTRequestDetails"
            },
            {
                $addFields: {
                    GTStatus: {
                        $cond: [
                            {
                                $and: [
                                    {$eq: ["$GTRequestDetails.balancedQty", 0]},
                                    {$ne: ["$GTRequestDetails.GTRequestQty", 0]}
                                ]
                            },
                            "Fulfilled",
                            {
                                $cond: [
                                    {
                                        $and: [
                                            {$eq: ["$GTRequestDetails.balancedQty", "$GTRequestDetails.GTRequestQty"]},
                                            {$ne: ["$status", "Rejected"]}
                                        ]
                                    },
                                    "Awaiting Issue",
                                    {$cond: [{$eq: ["$status", "Rejected"]}, "Rejected", "Partially Fulfilled"]}
                                ]
                            }
                        ]
                    }
                }
            },
            {
                $match: {
                    ...(!!status && {
                        GTStatus: status == "All" ? {$exists: true} : status
                    })
                }
            }
        ];
        let rows = await GoodsTransferRequestRepository.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success({
            statusOptions: ["All", "Awaiting Issue", "Partially Fulfilled", "Fulfilled", "Rejected"],
            ...rows
        });
    } catch (e) {
        console.error("getAllGRSummaryReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
