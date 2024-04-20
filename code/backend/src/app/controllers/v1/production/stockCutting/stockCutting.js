const {ObjectId} = require("../../../../../config/mongoose");
const asyncHandler = require("express-async-handler");
const MESSAGES = require("../../../../helpers/messages.options");
const {getAllStockCuttingAttributes} = require("../../../../models/production/helpers/stockCuttingHelper");
const StockCuttingRepository = require("../../../../models/production/repository/stockCuttingRepository");
const {filteredBoMOfSKUList} = require("../../../../models/planning/repository/BOMRepository/BoMOfSKURepository");
const {getAllCheckedItemCategoriesList} = require("../../purchase/itemCategoryMaster/itemCategoryMaster");
const {OPTIONS} = require("../../../../helpers/global.options");
const {STOCK_PREP_UOM, GOODS_TRANSFER_REQUEST_DEPT} = require("../../../../mocks/constantData");
const {getAllModuleMaster} = require("../../settings/module-master/module-master");

exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllStockCuttingAttributes();
        let pipeline = [{$match: {company: ObjectId(req.user.company)}}];
        let rows = await StockCuttingRepository.getAllPaginate({
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

exports.createOrUpdate = asyncHandler(async (req, res) => {
    try {
        let existing = await StockCuttingRepository.findOneDoc({
            jobCard: req.body.jobCard,
            SKU: req.body.SKU
        });
        if (existing) {
            existing.updatedBy = req.user.sub;
            existing = await StockCuttingRepository.updateDoc(existing, req.body);
        } else {
            let createdObj = {
                company: req.user.company,
                createdBy: req.user.sub,
                updatedBy: req.user.sub,
                ...req.body
            };
            await StockCuttingRepository.createDoc(createdObj);
        }
        res.success({
            message: MESSAGES.apiSuccessStrings.ADDED("Stock Cutting Log")
        });
    } catch (e) {
        console.error("create Stock Cutting Log", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.update = asyncHandler(async (req, res) => {
    try {
        let itemDetails = await StockCuttingRepository.getDocById(req.params.id);
        if (!itemDetails) {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.preconditionFailed(errors);
        }
        itemDetails.updatedBy = req.user.sub;
        itemDetails = await StockCuttingRepository.updateDoc(itemDetails, req.body);
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("Stock Cutting has been")
        });
    } catch (e) {
        console.error("update Stock Cutting", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        let stockCuttingData = {};
        stockCuttingData = await StockCuttingRepository.findOneDoc({
            jobCard: ObjectId(req.query.jobCard),
            SKU: ObjectId(req.query.SKU)
        });
        const processNames = await getAllModuleMaster(req.user.company, "STOCK_PROCESS_NAME");
        let itemCategoriesList = await getAllCheckedItemCategoriesList({
            categoryStatus: OPTIONS.defaultStatus.ACTIVE,
            stockPreparation: true
        });
        itemCategoriesList = itemCategoriesList.map(x => x.category);
        if (!stockCuttingData) {
            let BOMOfSKUData = await filteredBoMOfSKUList([
                {
                    $match: {
                        SKU: ObjectId(req.query.SKU)
                    }
                },
                {
                    $sort: {SKUCode: 1}
                },
                // {
                //     $unwind: "$BOMOfSKUDetails"
                // },
                {
                    $lookup: {
                        from: "Items",
                        localField: "BOMOfSKUDetails.reference",
                        foreignField: "_id",
                        pipeline: [
                            {
                                $project: {
                                    itemType: 1
                                }
                            }
                        ],
                        as: "item"
                    }
                },
                // {
                //     $unwind: {
                //         path: "$item",
                //         preserveNullAndEmptyArrays: true
                //     }
                // },
                {
                    $match: {
                        ...(itemCategoriesList.length > 0 && {"item.itemType": {$in: itemCategoriesList}})
                    }
                },
                {
                    $lookup: {
                        from: "InventoryCorrection",
                        localField: "BOMOfSKUDetails.reference",
                        foreignField: "item",
                        pipeline: [
                            // {
                            //     $group: {
                            //         _id: {itemId: "$item", UOM: "$UOM"},
                            //         closedIRQty: {$sum: "$closedIRQty"}
                            //     }
                            // },
                            {
                                $match: {
                                    department: GOODS_TRANSFER_REQUEST_DEPT.PLANNING
                                }
                            },
                            {
                                $addFields: {
                                    U1Qty: {
                                        $cond: [
                                            {$eq: ["$UOM", STOCK_PREP_UOM.SQM]},
                                            {
                                                $cond: [
                                                    {$ne: [{$type: "$primaryToSecondaryConversion"}, "missing"]},
                                                    {
                                                        $round: [
                                                            {
                                                                $divide: [
                                                                    "$closedIRQty",
                                                                    "$primaryToSecondaryConversion"
                                                                ]
                                                            },
                                                            2
                                                        ]
                                                    },
                                                    {
                                                        $cond: [
                                                            {
                                                                $ne: [
                                                                    {$type: "$secondaryToPrimaryConversion"},
                                                                    "missing"
                                                                ]
                                                            },
                                                            {
                                                                $round: [
                                                                    {
                                                                        $multiply: [
                                                                            "$closedIRQty",
                                                                            "$secondaryToPrimaryConversion"
                                                                        ]
                                                                    },
                                                                    2
                                                                ]
                                                            },
                                                            "$closedIRQty"
                                                        ]
                                                    }
                                                ]
                                            },
                                            "$closedIRQty"
                                        ]
                                    },
                                    MF: {$ifNull: ["$primaryToSecondaryConversion", "$secondaryToPrimaryConversion"]}
                                }
                            },
                            {
                                $project: {
                                    MRNNo: "$MRNNumber",
                                    MRN: "$MRN",
                                    item: "$item",
                                    itemCode: 1,
                                    itemName: 1,
                                    itemDescription: 1,
                                    U1: "$primaryUnit",
                                    U1Qty: 1,
                                    width: 1,
                                    widthUnit: "mm",
                                    length: 1,
                                    lengthUnit: "mm",
                                    MF: 1,
                                    U2: "$secondaryUnit",
                                    U2Qty: {
                                        $multiply: ["$U1Qty", "$MF"]
                                    }
                                }
                            }
                        ],
                        as: "inventory"
                    }
                },
                {
                    $addFields: {
                        PPICToProductionGT: [
                            {
                                MRNNo: {$literal: null},
                                MRN: {$literal: null},
                                item: {$literal: null},
                                itemCode: {$literal: null},
                                itemName: {$literal: null},
                                itemDescription: {$literal: null},
                                U1: {$literal: null},
                                U1Qty: {$literal: null},
                                width: {$literal: null},
                                widthUnit: {$literal: null},
                                length: {$literal: null},
                                lengthUnit: {$literal: null},
                                MF: {$literal: null},
                                U2: {$literal: null},
                                U2Qty: {$literal: null}
                            }
                        ]
                    }
                },
                {
                    $project: {
                        processName: null,
                        jobCard: req.query.jobCard,
                        jobCardNo: req.query.jobCardNo,
                        SKU: "$SKU",
                        SKUNo: "$SKUCode",
                        SKUName: 1,
                        SKUDescription: 1,
                        UOM: "$UOM",
                        SKUBatchQty: req.query.batchQty,
                        stockCuttingDetails: {
                            $map: {
                                input: "$BOMOfSKUDetails",
                                as: "details",
                                in: {
                                    reference: "$$details.reference",
                                    referenceModel: "$$details.referenceModel",
                                    itemCode: "$$details.itemCode",
                                    itemName: "$$details.itemName",
                                    itemDescription: "$$details.itemDescription",
                                    U1: "$$details.primaryUnit",
                                    U1Qty: {
                                        $multiply: [
                                            {$divide: ["$$details.partCount", "$partCount"]},
                                            +req.query.batchQty
                                        ]
                                    },
                                    width: "$$details.width",
                                    widthUnit: "$$details.widthUnit",
                                    length: "$$details.length",
                                    lengthUnit: "$$details.lengthUnit",
                                    MF: {$literal: 0},
                                    U2: "$$details.secondaryUnit",
                                    U2Qty: {$literal: 0},
                                    select: {$literal: false},
                                    U2TotalQty: {$literal: 0},
                                    PPICOpeningStock: "$inventory",
                                    PPICToProductionGT: "$PPICToProductionGT",
                                    PPICClosingStockCalculated: "$PPICToProductionGT",
                                    PPICClosingStockActual: "$PPICToProductionGT",
                                    rejectionQty: {$literal: 0},
                                    rejectionPercent: {$literal: 0},
                                    logEntry: {
                                        rejectionQty: {$literal: null},
                                        rejectionPercent: {$literal: null},
                                        remarks: {$literal: null},
                                        prodAuthorizedBy: {$literal: null},
                                        logEntryDetails: [
                                            {
                                                prodDate: {$literal: null},
                                                prodShift: {$literal: null},
                                                operatingStaff: {$literal: null},
                                                prodQty: {$literal: null}
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    $addFields: {
                        stockCuttingDetails: {
                            $map: {
                                input: "$stockCuttingDetails",
                                as: "details",
                                in: {
                                    $mergeObjects: [
                                        "$$details",
                                        {
                                            length: {
                                                $round: [
                                                    {
                                                        $cond: [
                                                            {$eq: ["$$details.U1", "RL"]},
                                                            {
                                                                $cond: [
                                                                    {$eq: ["$$details.lengthUnit", "m"]},
                                                                    {
                                                                        $multiply: [
                                                                            "$$details.length",
                                                                            "$$details.U1Qty"
                                                                        ]
                                                                    },
                                                                    {
                                                                        $multiply: [
                                                                            "$$details.length",
                                                                            "$$details.U1Qty",
                                                                            1000
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "$$details.length"
                                                        ]
                                                    },
                                                    2
                                                ]
                                            },
                                            U1Qty: {
                                                $cond: [{$eq: ["$$details.U1", "RL"]}, 1, "$$details.U1Qty"]
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            ]);
            stockCuttingData = BOMOfSKUData.length ? BOMOfSKUData[0] : {};
            stockCuttingData.stockCuttingDetails = stockCuttingData.stockCuttingDetails.map(x => {
                let DFW = x.widthUnit == "mm" ? 1000 : 1;
                let DFL = x.lengthUnit == "mm" ? 1000 : 1;
                x.MF = (x.width * x.length) / (DFW * DFL);
                x.U2Qty = +(x.U1Qty * x.MF).toFixed(2);
                x.MF = +x.MF.toFixed(2);
                return x;
            });
        }
        const shiftOptions = await getAllModuleMaster(req.user.company, "PRODUCTION_SHIFT");
        return res.success({stockCutting: stockCuttingData, processNames, shiftOptions});
    } catch (error) {
        console.error("getAllMasterData Screen Making Log", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
