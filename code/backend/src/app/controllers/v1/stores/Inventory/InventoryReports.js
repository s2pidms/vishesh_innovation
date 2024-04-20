const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/stores/inventoryCorrectionModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {outputData, getAllAggregationFooter} = require("../../../../helpers/utility");
const {getMatchData} = require("../../../../helpers/global.options");
const {getAllSuppliers} = require("../../purchase/suppliers/suppliers");
const {getAllItems} = require("../../purchase/items/items");
const {default: mongoose} = require("mongoose");
const {getDateDiff, dateToAnyFormat, getEndDateTime, getStartDateTime} = require("../../../../helpers/dateTime");
const {getCompanyLocations} = require("../../settings/company/company");
const InventoryCorrectionHelper = require("../../../../models/stores/helpers/inventoryCorrectionHelper");
const InventoryCorrectionRepo = require("../../../../models/stores/repository/inventoryCorrectionRepository");
const {filteredItemList} = require("../../../../models/purchase/repository/itemRepository");
const {GOODS_TRANSFER_REQUEST_DEPT} = require("../../../../mocks/constantData");
const ObjectId = mongoose.Types.ObjectId;
exports.getAllReports = asyncHandler(async (req, res) => {
    try {
        const {
            search = null,
            excel = "false",
            page = 1,
            pageSize = 10,
            column = "createdAt",
            direction = -1,
            supplier = null,
            itemId = null,
            fromDate = null,
            toDate = null
        } = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let project = InventoryCorrectionHelper.getAllInventoryCorrectionReportsAttributes();
        const suppliers = await getAllSuppliers(req.user.company, {supplierName: 1});
        const items = await getAllItems(req.user.company, {itemCode: 1, itemName: 1});
        let match = await getMatchData(project, search);
        match = {
            ...match,
            ...(!!supplier && {
                supplier: ObjectId(supplier)
            })
        };
        let query = {
            company: ObjectId(req.user.company),
            closedIRQty: {$gt: 0},
            ...(!!itemId && {
                item: ObjectId(itemId)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    ICDate: {
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
            {$match: query},
            {
                $addFields: {
                    GINDateS: {$dateToString: {format: "%d-%m-%Y", date: "$GINDate"}},
                    itemValueINR: {$toString: {$multiply: ["$closedIRQty", "$purchaseRatINR"]}},
                    closedIRQty: {$toString: "$closedIRQty"},
                    openIRQty: {$toString: "$openIRQty"},
                    purchaseRatINR: {$toString: "$purchaseRatINR"}
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [{$project: {itemCode: 1, itemName: 1, itemDescription: 1}}],
                    as: "item"
                }
            },
            {$unwind: "$item"},
            {
                $lookup: {
                    from: "MRN",
                    localField: "MRN",
                    foreignField: "_id",
                    pipeline: [{$project: {MRNNumber: 1, supplier: 1}}],
                    as: "MRN"
                }
            },
            {$unwind: "$MRN"},
            ...getAllAggregationFooter(project, match, column, direction, pagination)
        ]);
        let totalAmount = await Model.aggregate([
            {$match: query},
            {
                $group: {
                    _id: null,
                    totalItemValueINR: {$sum: {$multiply: ["$closedIRQty", "$purchaseRatINR"]}}
                }
            },
            {
                $project: {
                    totalItemValueINR: 1,
                    _id: 0
                }
            }
        ]);
        return res.success({
            ...outputData(rows),
            suppliers,
            items,
            totalAmount
        });
    } catch (e) {
        console.error("getAllAdvanceSalaryRequest", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllFilterData = asyncHandler(async (req, res) => {
    try {
        // await this.getAllDuplicatesItem();
        const {
            search = null,
            // excel = "false",
            // page = 1,
            // pageSize = 10,
            column = "createdAt",
            direction = -1,
            itemGroup = null,
            itemCategory = null
        } = req.query;
        // let skip = Math.max(0, page - 1) * pageSize;
        let project = InventoryCorrectionHelper.getAllFilterDataAttributes();
        let match = await getMatchData(project, search);
        let query = {
            company: ObjectId(req.user.company),
            closedIRQty: {$gt: 0},
            ...(!!itemGroup && {
                itemType: itemGroup
            }),
            ...(!!itemCategory && {
                itemSubCategory: itemCategory
            })
        };
        let pagination = [];
        // if (excel == "false") {
        //     pagination = [{$skip: +skip}, {$limit: +pageSize}];
        // }
        let rows = await Model.aggregate([
            {$match: query},
            {
                $addFields: {
                    openIRQty: {$toString: "$openIRQty"},
                    GINDateS: {$dateToString: {format: "%d-%m-%Y", date: "$GINDate"}}
                }
            },
            {
                $lookup: {
                    from: "MRN",
                    localField: "MRN",
                    foreignField: "_id",
                    pipeline: [{$project: {MRNNumber: 1}}],
                    as: "MRN"
                }
            },
            {$unwind: "$MRN"},
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [
                        {$project: {itemCode: 1, itemName: 1, itemDescription: 1, itemType: 1, itemSubCategory: 1}}
                    ],
                    as: "item"
                }
            },
            {$unwind: "$item"},
            ...getAllAggregationFooter(project, match, column, direction, pagination)
        ]);
        return res.success({
            ...outputData(rows)
        });
    } catch (e) {
        console.error("getAllReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllDuplicatesItem = asyncHandler(async () => {
    try {
        let rows = await Model.aggregate([
            {
                $match: {
                    closedIRQty: {$gt: 0}
                }
            },
            {
                $project: {
                    UOM: 1,
                    item: 1
                }
            },
            {
                $group: {
                    _id: {item: "$item"},
                    count: {
                        $sum: 1
                    },
                    uniqueValues: {$addToSet: "$UOM"}
                }
            },
            {
                $match: {
                    // uniqueValues: {$size: {$gt: 1}}
                    $nor: [{uniqueValues: {$exists: false}}, {uniqueValues: {$size: 0}}, {uniqueValues: {$size: 1}}]
                }
            },
            {
                $project: {
                    item: "$_id.item",
                    _id: 0
                }
            }
        ]);
        console.log("rows", JSON.stringify(rows));
    } catch (e) {
        console.error("getAllDuplicatesItem", e);
    }
});

exports.getReorderLevelReports = asyncHandler(async (req, res) => {
    try {
        const items = await filteredItemList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    isActive: "A"
                }
            },
            {
                $project: {itemCode: 1}
            }
        ]);
        const {fromDate = null, toDate = null, item = null} = req.query;
        let query = {
            company: ObjectId(req.user.company),
            ...(!!item && {
                item: ObjectId(item)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    GINDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let project = InventoryCorrectionHelper.getReorderLevelReportsAttributes();
        let pipeline = [
            {
                $match: query
            },
            {
                $group: {
                    _id: "$item",
                    totalGINQty: {$sum: "$closedIRQty"}
                }
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "_id",
                    foreignField: "_id",
                    pipeline: [
                        {$project: {itemCode: 1, itemDescription: 1, itemName: 1, perishableGoods: 1, itemROL: 1}}
                    ],
                    as: "itemDetails"
                }
            },
            {
                $unwind: "$itemDetails"
            }
        ];
        let rows = await InventoryCorrectionRepo.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        return res.success({
            items,
            ...rows
        });
    } catch (e) {
        console.error("getReorderLevelReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getStockAgingReports = asyncHandler(async (req, res) => {
    try {
        const items = await filteredItemList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    isActive: "A"
                }
            },
            {
                $project: {itemCode: 1}
            }
        ]);
        const {fromDate = null, toDate = null, item = null} = req.query;
        const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
        let query = {
            company: ObjectId(req.user.company),
            closedIRQty: {$gt: 0},
            ...(!!item && {
                item: ObjectId(item)
            }),
            ...(!!toDate &&
                !!fromDate && {
                    GINDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                })
        };
        let project = InventoryCorrectionHelper.getStockAgingReportsAttributes();
        let pipeline = [
            {
                $match: query
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [
                        {$project: {itemCode: 1, itemDescription: 1, itemName: 1, perishableGoods: 1, shelfLife: 1}}
                    ],
                    as: "item"
                }
            },
            {$unwind: "$item"},
            {
                $match: {"item.perishableGoods": "Yes"}
            },
            {
                $addFields: {
                    GINDateS: {$dateToString: {format: "%d-%m-%Y", date: "$GINDate"}},
                    expiryDate: {
                        $dateAdd: {
                            startDate: "$GINDate",
                            unit: "month",
                            amount: "$item.shelfLife"
                        }
                    }
                }
            }
        ];
        let output = await InventoryCorrectionRepo.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        if (output.rows.length > 0) {
            for (const ele of output.rows) {
                if (ele.expiryDate) {
                    ele.expiryDate = `${ele.expiryDate.split("-")[2]}-${ele.expiryDate.split("-")[1]}-${
                        ele.expiryDate.split("-")[0]
                    }`;
                    let dateDiff = getDateDiff(ele.expiryDate, currentDate, "days");
                    if (+dateDiff < 0) {
                        ele.status = "red";
                    } else if (+dateDiff > 0 && +dateDiff < 30) {
                        ele.status = "yellow";
                    } else {
                        ele.status = "green";
                    }
                }
            }
        }
        // await insertManyInventory();
        return res.success({
            items,
            ...output
        });
    } catch (e) {
        console.error("getStockAgingReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
const insertManyInventory = async () => {
    try {
        let invList = await InventoryCorrectionRepo.filteredInventoryCorrectionList([
            {
                $lookup: {
                    from: "MRN",
                    localField: "MRN",
                    foreignField: "_id",
                    pipeline: [{$project: {MRNNumber: 1, MRNDate: 1, supplier: 1}}],
                    as: "MRN"
                }
            },
            {$unwind: "$MRN"},
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                itemCode: 1,
                                itemName: 1,
                                itemDescription: 1
                            }
                        }
                    ],
                    as: "item"
                }
            },
            {$unwind: "$item"},
            {
                $project: {
                    _id: {$toObjectId: "$_id"},
                    company: {$toObjectId: "$company"},
                    createdBy: {$toObjectId: "$createdBy"},
                    updatedBy: {$toObjectId: "$updatedBy"},
                    GIN: {$toObjectId: "$GIN"},
                    GINDate: 1,
                    MRN: {$toObjectId: "$MRN._id"},
                    supplier: {$toObjectId: "$MRN.supplier"},
                    MRNNumber: "$MRN.MRNNumber",
                    MRNDate: "$MRN.MRNDate",
                    ICStatus: 1,
                    UOM: 1,
                    primaryToSecondaryConversion: 1,
                    secondaryToPrimaryConversion: 1,
                    primaryUnit: 1,
                    secondaryUnit: 1,
                    conversionOfUnits: 1,
                    item: {$toObjectId: "$item._id"},
                    referenceModel: "Items",
                    itemCode: "$item.itemCode",
                    itemName: "$item.itemName",
                    itemDescription: "$item.itemDescription",
                    width: 1,
                    length: 1,
                    SQM: 1,
                    expiryDate: 1,
                    itemType: 1,
                    itemSubCategory: 1,
                    updatedQty: 1,
                    closedIRQty: 1,
                    standardRate: 1,
                    purchaseRate: 1,
                    purchaseRateUSD: 1,
                    purchaseRatINR: 1,
                    lineValueINR: 1,
                    batchDate: 1,
                    deliveryLocation: 1,
                    storageLocationMapping: 1,
                    department: GOODS_TRANSFER_REQUEST_DEPT.STORES,
                    type: "InventoryCorrection"
                }
            }
        ]);
        console.log("invList", JSON.stringify(invList));
        return;
        // First Take Backup Then only remove return
        await InventoryCorrectionRepo.deleteManyDoc({});
        return InventoryCorrectionRepo.insertManyDoc(invList);
    } catch (error) {
        console.error(error);
    }
};
exports.getAllInventoryLocationWiseReports = asyncHandler(async (req, res) => {
    try {
        const {fromDate = null, toDate = null, location = null} = req.query;
        let query = {
            company: ObjectId(req.user.company),
            ...(!!toDate &&
                !!fromDate && {
                    GINDate: {
                        $lte: getEndDateTime(toDate),
                        $gte: getStartDateTime(fromDate)
                    }
                }),
            ...(!!location && {deliveryLocation: location})
        };
        let project = InventoryCorrectionHelper.getAllInventoryLocationWiseReportsAttributes();
        let pipeline = [
            {
                $match: query
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [{$project: {itemCode: 1, itemName: 1, itemDescription: 1}}],
                    as: "item"
                }
            },
            {$unwind: "$item"}
        ];
        let rows = await InventoryCorrectionRepo.getAllPaginate({
            pipeline,
            project,
            queryParams: req.query
        });
        const locations = await getCompanyLocations(req.user.company);
        return res.success({
            locations: locations.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            ...rows
        });
    } catch (e) {
        console.error("getAllInventoryLocationWiseReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.getAllLocationSupplierItemWiseReports = asyncHandler(async (req, res) => {
    try {
        const suppliersList = await getAllSuppliers(req.user.company, {supplierName: 1});
        const itemsList = await filteredItemList([
            {
                $match: {
                    company: ObjectId(req.user.company),
                    isActive: "A"
                }
            },
            {
                $project: {itemCode: 1, itemName: 1}
            }
        ]);
        const locations = await getCompanyLocations(req.user.company);
        const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
        const {
            toDate = null,
            location = null,
            supplierId = null,
            itemId = null,
            department = GOODS_TRANSFER_REQUEST_DEPT.STORES
        } = req.query;
        let query = {
            company: ObjectId(req.user.company),
            closedIRQty: {$gt: 0},
            ...(!!itemId && {
                item: ObjectId(itemId)
            }),
            ...(!!toDate && {
                ICDate: {
                    $lte: getEndDateTime(toDate)
                }
            }),
            department: department
        };
        let project = InventoryCorrectionHelper.getAllLocationSupplierItemWiseReportsAttributes();
        let pipeline = [
            {
                $match: query
            },
            {
                $lookup: {
                    from: "Items",
                    localField: "item",
                    foreignField: "_id",
                    pipeline: [{$project: {itemCode: 1, itemName: 1, itemDescription: 1, shelfLife: 1}}],
                    as: "item"
                }
            },
            {$unwind: "$item"},
            {
                $addFields: {
                    expiryDate: {
                        $dateAdd: {
                            startDate: "$batchDate",
                            unit: "month",
                            amount: "$item.shelfLife"
                        }
                    }
                }
            },
            {
                $lookup: {
                    from: "MRN",
                    localField: "MRN",
                    foreignField: "_id",
                    pipeline: [{$project: {MRNNumber: 1, supplier: 1}}],
                    as: "MRN"
                }
            },
            {$unwind: "$MRN"},
            {
                $lookup: {
                    from: "Supplier",
                    localField: "MRN.supplier",
                    foreignField: "_id",
                    pipeline: [{$project: {supplierName: 1, _id: 1, supplierNickName: 1}}],
                    as: "supplier"
                }
            },
            {$unwind: "$supplier"},
            {
                $lookup: {
                    from: "GoodInwardEntry",
                    localField: "GIN",
                    foreignField: "_id",
                    pipeline: [{$project: {deliveryLocation: 1}}],
                    as: "GIN"
                }
            },
            {$unwind: "$GIN"},
            {
                $match: {
                    ...(!!location && {"GIN.deliveryLocation": location}),
                    ...(!!supplierId && {
                        "supplier._id": ObjectId(supplierId)
                    })
                }
            }
        ];
        let output = await InventoryCorrectionRepo.getAllReportsPaginate({
            pipeline,
            project,
            queryParams: req.query,
            groupValues: [
                {
                    $group: {
                        _id: null,
                        value: {$sum: {$toDouble: "$lineValue"}}
                    }
                }
            ]
        });

        if (output.rows.length > 0) {
            for (const ele of output.rows) {
                if (!!ele.expiryDate) {
                    ele.expiryDate = dateToAnyFormat(ele.expiryDate, "YYYY-MM-DD");
                    let dateDiff = getDateDiff(ele.expiryDate, currentDate, "days");
                    ele.expiryDate = ele.expiryDate.split("-").reverse().join("-");
                    if (+dateDiff < 0) {
                        ele.status = "red";
                    } else if (+dateDiff > 0 && +dateDiff < 30) {
                        ele.status = "orange";
                    } else {
                        ele.status = "green";
                    }
                } else {
                    ele.status = "green";
                }
            }
        }
        return res.success({
            suppliersList,
            itemsList,
            locations: locations.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            }),
            ...output
        });
    } catch (e) {
        console.error("getAllInventoryLocationWiseReports", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
// exports.getTotalNoOfInventoryPerDay = async company => {
//     const rows = await Model.aggregate([
//         {
//             $match: {
//                 company: ObjectId(company),
//                 ICDate: {
//                     $lte: getEndDateTime(new Date()),
//                     $gte: getStartDateTime(new Date())
//                 }
//             }
//         },
//         {
//             $group: {
//                 _id: null,
//                 totalInventory: {$sum: 1},
//                 totalInventoryValue: {$sum: "$lineValueINR"}
//             }
//         },
//         {
//             $project: {
//                 _id: 0,
//                 totalInventory: 1,
//                 totalInventoryValue: 1
//             }
//         }
//     ]);
//     return rows.length > 0 ? rows[0] : [];
// };
