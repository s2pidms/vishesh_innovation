const asyncHandler = require("express-async-handler");
const Model = require("../../../../models/stores/inventoryCorrectionModel");
const AutoIncrement = require("../../../../models/settings/autoIncrementModel");
const MESSAGES = require("../../../../helpers/messages.options");
const {INVENTORY_CORRECTION_MODULE_PREFIX} = require("../../../../helpers/moduleConstants");
const {generateCreateData, OPTIONS} = require("../../../../helpers/global.options");
const {findAppParameterValue} = require("../../settings/appParameter/appParameter");
const {default: mongoose} = require("mongoose");
const {getFirstDateOfCurrentFiscalYear, getLastDateOfCurrentFiscalYear} = require("../../../../utilities/utility");
const {getAllItemCategory} = require("../../purchase/itemCategoryMaster/itemCategoryMaster");
const {dateToAnyFormat} = require("../../../../helpers/dateTime");
const {LAKH} = require("../../../../mocks/number.constant");
const {getAllInventoryCorrectionAttributes} = require("../../../../models/stores/helpers/inventoryCorrectionHelper");
const InvCorrectionRepository = require("../../../../models/stores/repository/inventoryCorrectionRepository");
const {getAndSetAutoIncrementNo} = require("../../settings/autoIncrement/autoIncrement");
const {INVENTORY_CORRECTION} = require("../../../../mocks/schemasConstant/storesConstant");
const {filteredSupplierList} = require("../../../../models/purchase/repository/supplierRepository");
const {filteredItemList} = require("../../../../models/purchase/repository/itemRepository");
const {filteredHSNList} = require("../../../../models/purchase/repository/hsnRepository");
const {inventoryUpload} = require("../../../../middleware/inventoryUpload");
// const {inventoryUpload} = require("../../../../middleware/inventoryUpload");
const ObjectId = mongoose.Types.ObjectId;

// @desc    getAll   InventoryCorrection Record
exports.getAll = asyncHandler(async (req, res) => {
    try {
        let project = getAllInventoryCorrectionAttributes();
        let pipeline = [
            {
                $match: {
                    company: ObjectId(req.user.company)
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
            {
                $lookup: {
                    from: "MRN",
                    localField: "MRN",
                    foreignField: "_id",
                    pipeline: [{$project: {MRNNumber: 1}}],
                    as: "MRN"
                }
            },
            {$unwind: "$MRN"}
        ];
        let rows = await InvCorrectionRepository.getAllPaginate({pipeline, project, queryParams: req.query});
        return res.success(rows);
    } catch (e) {
        console.error("getAllInventoryCorrectionAggregate", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    create   InventoryCorrection new Record
exports.create = asyncHandler(async (req, res) => {
    try {
        // let existing = await Model.findOne({
        //     roleName: req.body.roleName,
        // });
        // if (existing) {
        //     let errors = MESSAGES.apiErrorStrings.Data_EXISTS("  InventoryCorrection");
        //     return res.preconditionFailed(errors);
        // }
        let createdObj = {
            company: req.user.company,
            createdBy: req.user.sub,
            updatedBy: req.user.sub,
            ...req.body
        };
        const saveObj = new Model(createdObj);

        const itemDetails = await saveObj.save();
        if (itemDetails) {
            await AutoIncrement.setNextId("InventoryCorrection", INVENTORY_CORRECTION_MODULE_PREFIX, req.user.company);
            return res.success({
                message: MESSAGES.apiSuccessStrings.ADDED("  InventoryCorrection")
            });
        } else {
            const errors = MESSAGES.apiErrorStrings.INVALID_REQUEST;
            return res.serverError(errors);
        }
    } catch (e) {
        console.error("create   InventoryCorrection", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    update   InventoryCorrection  Record
exports.update = asyncHandler(async (req, res) => {
    try {
        for await (const element of req.body) {
            let itemDetails = await Model.findById(element._id);
            itemDetails.updatedBy = req.user.sub;
            itemDetails = await generateCreateData(itemDetails, element);

            await itemDetails.save();
        }
        return res.success({
            message: MESSAGES.apiSuccessStrings.UPDATE("InventoryCorrection has been")
        });
    } catch (e) {
        console.error("update   InventoryCorrection", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    deleteById   InventoryCorrection Record
exports.deleteById = asyncHandler(async (req, res) => {
    try {
        const deleteItem = await Model.findById(req.params.id);
        if (deleteItem) {
            await deleteItem.remove();
            return res.success({
                message: MESSAGES.apiSuccessStrings.DELETED("  InventoryCorrection")
            });
        } else {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("  InventoryCorrection");
            return res.preconditionFailed(errors);
        }
    } catch (e) {
        console.error("deleteById   InventoryCorrection", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getById   InventoryCorrection Record
exports.getById = asyncHandler(async (req, res) => {
    try {
        let existing = await Model.findById(req.params.id);
        if (!existing) {
            let errors = MESSAGES.apiSuccessStrings.DATA_NOT_EXISTS("  InventoryCorrection");
            return res.unprocessableEntity(errors);
        }
        return res.success(existing);
    } catch (e) {
        console.error("getById   InventoryCorrection", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllMasterData   InventoryCorrection Record
exports.getAllMasterData = asyncHandler(async (req, res) => {
    try {
        const itemCategoryList = await getAllItemCategory(req.user.company);
        const autoIncrementNo = await getAndSetAutoIncrementNo(
            INVENTORY_CORRECTION.AUTO_INCREMENT_DATA(),
            req.user.company
        );
        let items = await findAppParameterValue("ITEM_SUB_CATEGORY", req.user.company);
        return res.success({
            autoIncrementNo,
            itemCategoriesOptions: itemCategoryList.map(x => x.category),
            itemSubCategoriesOptions: items.split(",").map(x => {
                return {
                    label: x,
                    value: x
                };
            })
        });
    } catch (error) {
        console.error("getAllMasterData   InventoryCorrection", error);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});

// @desc    getAllServicePurchaseOrders   InventoryCorrection Record
exports.getAllServicePurchaseOrders = asyncHandler(async company => {
    try {
        let rows = await Model.find(
            {
                company: company,
                ICStatus: true
            }
            // {roleCode: 1, roleName: 1}
        ).sort({createdAt: -1});
        return rows;
    } catch (e) {
        console.error("getAllServicePurchaseOrders", e);
    }
});

const getAllData = asyncHandler(async (req, query, excel) => {
    try {
        const {page = 1, pageSize = 10, column = "createdAt", direction = -1} = req.query;
        let skip = Math.max(0, page - 1) * pageSize;
        let rows = [];
        if (excel == "false") {
            rows = await Model.aggregate([
                {$match: query},
                {
                    $lookup: {
                        from: "Items",
                        localField: "item",
                        foreignField: "_id",
                        pipeline: [{$project: {itemCode: 1, itemName: 1, itemDescription: 1}}],
                        as: "item"
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
                    $project: {
                        GINDate: 1,
                        MRN: 1,
                        item: 1,
                        UOM: 1,
                        openIRQty: 1,
                        closedIRQty: 1,
                        purchaseRatINR: 1,
                        itemValueINR: {$multiply: ["$closedIRQty", "$purchaseRatINR"]}
                    }
                },
                {$sort: {[column]: +direction}},
                {$skip: +skip},
                {$limit: +pageSize}
            ]);
        } else {
            rows = await Model.aggregate([
                {$match: query},
                {
                    $lookup: {
                        from: "Items",
                        localField: "item",
                        foreignField: "_id",
                        pipeline: [{$project: {itemCode: 1, itemName: 1, itemDescription: 1}}],
                        as: "item"
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
                    $project: {
                        GINDate: 1,
                        MRN: 1,
                        item: 1,
                        UOM: 1,
                        openIRQty: 1,
                        closedIRQty: 1,
                        itemValueINR: {$multiply: ["$closedIRQty", "$purchaseRatINR"]}
                    }
                },
                {$sort: {[column]: +direction}}
            ]);
        }
        return rows;
    } catch (e) {
        console.error("getAllData InventoryCorrection", e);
        const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
        return res.serverError(errors);
    }
});
exports.updateInventory = asyncHandler(async GIDetails => {
    try {
        for await (const element of GIDetails) {
            let updatedIC = await Model.findOne({_id: element.IC});
            updatedIC.closedIRQty = element.IRQty - element.GIQty;
            await updatedIC.save();
        }
    } catch (e) {
        console.error("updateInventory", e);
    }
});
exports.updateInventoryOnResolveDiscrepancy = async GIDetails => {
    try {
        for await (const element of GIDetails) {
            let updatedIC = await Model.findOne({_id: element.IC});
            if (+element.diffQty != 0) {
                updatedIC.closedIRQty = +updatedIC.closedIRQty - +element.inventoryQty;
            }
            await updatedIC.save();
        }
    } catch (e) {
        console.error("updateInventoryOnResolveDiscrepancy", e);
    }
};
exports.updateInventoryOnStockTransferToStore = async (item, transferQty, company) => {
    try {
        await Model.findOneAndUpdate(
            {
                item: item,
                company: company
            },
            {$inc: {closedIRQty: +transferQty}}
        );
    } catch (e) {
        console.error("updateInventoryOnStockTransferToStore", e);
    }
};
exports.getAllGINItemCount = async company => {
    try {
        const count = await Model.distinct("item", {
            company: ObjectId(company),
            ICDate: {
                $gte: getFirstDateOfCurrentFiscalYear(),
                $lte: getLastDateOfCurrentFiscalYear()
            }
        });
        return count.length;
    } catch (error) {
        console.error("getAllGINItemCount", error);
    }
};
exports.getTotalInventoryValue = async company => {
    try {
        const result = await Model.aggregate([
            {
                $addFields: {
                    matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$ICDate"}}
                }
            },
            {
                $match: {
                    company: ObjectId(company),
                    closedIRQty: {$gt: 0},
                    matchDate: {
                        $gte: dateToAnyFormat(getFirstDateOfCurrentFiscalYear(), "YYYY-MM-DD"),
                        $lte: dateToAnyFormat(getLastDateOfCurrentFiscalYear(), "YYYY-MM-DD")
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalInventoryValue: {$sum: {$multiply: ["$closedIRQty", "$purchaseRatINR"]}}
                }
            },
            {
                $project: {
                    _id: null,
                    totalInventoryValue: {
                        $round: [{$divide: ["$totalInventoryValue", LAKH]}, 2]
                    }
                }
            }
        ]);
        return result[0]?.totalInventoryValue || 0;
    } catch (error) {
        console.error(error);
    }
};
exports.getAllInventoryCorrectionByItems = asyncHandler(async (company, GRDetails) => {
    try {
        GRDetails = GRDetails.map(x => ObjectId(x.item));
        let query = {
            company: ObjectId(company),
            closedIRQty: {$gt: 0},
            ...(GRDetails.length > 0 && {item: {$in: GRDetails}})
        };
        let rows = await Model.aggregate([
            {
                $match: query
            },
            {
                $lookup: {
                    from: "GoodInwardEntry",
                    localField: "GIN",
                    foreignField: "_id",
                    // pipeline: [{$project: {MRNDate : 1}}],
                    as: "GIN"
                }
            },
            {
                $unwind: {
                    path: "$GIN",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "MRN",
                    localField: "MRN",
                    foreignField: "_id",
                    pipeline: [
                        {
                            $project: {
                                MRNNumber: 1,
                                MRNDate: {$ifNull: ["$MRNDate", "$createdAt"]},
                                createdAt: 1
                            }
                        }
                    ],
                    as: "MRN"
                }
            },
            {
                $unwind: {
                    path: "$MRN",
                    preserveNullAndEmptyArrays: true
                }
            },
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
                                itemDescription: 1,
                                itemType: 1,
                                itemSubCategory: 1,
                                conversionOfUnits: 1,
                                shelfLife: 1
                            }
                        },
                        {$sort: {itemCode: +1}}
                    ],
                    as: "item"
                }
            },
            {
                $unwind: {
                    path: "$item",
                    preserveNullAndEmptyArrays: true
                }
            },
            {$sort: {"item.itemCode": 1, "MRN.MRNNumber": 1}}
        ]);
        return rows;
    } catch (e) {
        console.error("getAllInventoryCorrectionByItems", e);
    }
});
exports.getTotalInventoryValuePerDay = async company => {
    const currentDate = dateToAnyFormat(new Date(), "YYYY-MM-DD");
    const rows = await Model.aggregate([
        {
            $addFields: {
                matchDate: {$dateToString: {format: "%Y-%m-%d", date: "$ICDate"}}
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
                totalInventoryValue: {$sum: "$lineValueINR"}
            }
        },
        {
            $project: {
                _id: 0,
                totalInventoryValue: {$round: ["$totalInventoryValue", 2]}
            }
        }
    ]);
    return rows[0]?.totalInventoryValue || 0;
};

exports.checkInventoryValidation = async excelData => {
    let supplierArray = excelData.map(x => x.supplierCode);
    let uniqueSetSupplier = Array.from(new Set(supplierArray));
    const falseArr = OPTIONS.falsyArray;
    console.log("uniqueSetSupplier", uniqueSetSupplier);
    let allSuppliers = await filteredSupplierList([
        {
            $match: {
                supplierCode: {$in: uniqueSetSupplier}
            }
        },
        {
            $project: {
                _id: 1,
                supplierCode: 1,
                supplierName: 1
            }
        }
    ]);
    let itemArray = excelData.map(element => element.itemCode);
    let uniqueSetItems = Array.from(new Set(itemArray));
    console.log("uniqueSetItems", uniqueSetItems);
    let allItemDetails = await filteredItemList([
        {$match: {itemCode: {$in: uniqueSetItems}}},
        {
            $project: {
                _id: 1,
                itemCode: 1,
                itemName: 1,
                supplierDetails: 1,
                hsn: 1,
                orderInfoUOM: 1,
                primaryToSecondaryConversion: 1,
                secondaryToPrimaryConversion: 1,
                primaryUnit: 1,
                secondaryUnit: 1
            }
        }
    ]);
    let hsnArray = allItemDetails.map(element => element.hsn);
    let uniqueSetHSN = Array.from(new Set(hsnArray));
    console.log("uniqueSetHSN", uniqueSetHSN);
    let allHSN = await filteredHSNList([
        {
            $match: {
                hsnCode: {$in: uniqueSetHSN}
            }
        },
        {
            $project: {hsnCode: 1}
        }
    ]);
    excelData = excelData.map(x => {
        x.isValid = true;
        x.message = null;
        let itemsDetails = allItemDetails.find(item => String(item.itemCode) === String(x.itemCode));
        if (falseArr.includes(itemsDetails)) {
            x.isValid = false;
            x.message = `Item Code - ${x.itemCode} is not exists`;
        }
        let supplierDetails = allSuppliers.find(s => String(s.supplierCode) === String(x.supplierCode));
        if (falseArr.includes(supplierDetails)) {
            x.isValid = false;
            x.message = `Supplier Code - ${x.supplierCode} is not exists`;
        } else {
            let supplierDetailsData = itemsDetails.supplierDetails.find(
                s => String(s.supplierId) === String(supplierDetails._id)
            );
            if (falseArr.includes(supplierDetailsData)) {
                x.isValid = false;
                x.message = `Supplier is not link with item - ${x.supplierCode}-${x.itemCode} `;
            }
        }

        if (!itemsDetails.orderInfoUOM) {
            x.isValid = false;
            x.message = `Item orderInfoUOM is not exists`;
        }
        let hsnDetails = allHSN.find(h => String(h.hsnCode) === String(itemsDetails.hsn));
        if (falseArr.includes(hsnDetails)) {
            x.isValid = false;
            x.message = `HSN Code - ${itemsDetails.hsn} is not exists`;
        }
        if (!itemsDetails.primaryUnit) {
            x.isValid = false;
            x.message = `Item primaryUnit is not exists`;
        }
        if (!itemsDetails.secondaryUnit) {
            x.isValid = false;
            x.message = `Item secondaryUnit is not exists`;
        }
        if (!itemsDetails.primaryToSecondaryConversion || !itemsDetails.primaryToSecondaryConversion) {
            x.isValid = false;
            x.message = `Item Unit Conversions is not exists`;
        }

        return x;
    });
    const inValidRecords = excelData.filter(x => !x.isValid);
    const validRecords = excelData.filter(x => x.isValid);
    return {inValidRecords, validRecords};
};
exports.bulkInsertInventoryByCSV = async jsonData => {
    try {
        let notFoundObj = await inventoryUpload(jsonData);
        return {message: "Uploaded successfully!", notFoundObj};
    } catch (error) {
        console.error(error);
    }
};
