const {STOCK_PREP_UOM} = require("../../../mocks/constantData");

exports.getAllInventoryCorrectionReportsAttributes = () => {
    return {
        GINDateS: 1,
        MRN: "$MRN.MRNNumber",
        supplier: "$MRN.supplier",
        itemCode: "$item.itemCode",
        itemName: "$item.itemName",
        itemDescription: "$item.itemDescription",
        UOM: 1,
        closedIRQty: 1,
        company: 1,
        itemValueINR: 1,
        openIRQty: 1,
        purchaseRatINR: 1,
        createdAt: 1
    };
};
exports.getAllInventoryCorrectionAttributes = () => {
    return {
        GINDate: 1,
        MRN: 1,
        item: 1,
        UOM: 1,
        openIRQty: 1,
        closedIRQty: 1,
        purchaseRatINR: 1,
        itemValueINR: {$multiply: ["$closedIRQty", "$purchaseRatINR"]}
    };
};
exports.getAllFilterDataAttributes = () => {
    return {
        itemCode: "$item.itemCode",
        itemName: "$item.itemName",
        itemDescription: "$item.itemDescription",
        itemType: "$item.itemType",
        itemSubCategory: "$item.itemSubCategory",
        MRNNumber: "$MRN.MRNNumber",
        UOM: 1,
        openIRQty: "$closedIRQty",
        closedIRQty: 1,
        GINDateS: 1,
        createdAt: 1
    };
};
exports.getReorderLevelReportsAttributes = () => {
    return {
        itemCode: "$itemDetails.itemCode",
        itemName: "$itemDetails.itemName",
        itemDescription: "$itemDetails.itemDescription",
        perishableGoods: "$itemDetails.perishableGoods",
        reorderLevel: "$itemDetails.itemROL",
        totalGINQty: 1,
        createdAt: 1,
        reorderLevelStatus: {$cond: [{$gt: ["$totalGINQty", "$itemDetails.itemROL"]}, "Active", "Inactive"]}
    };
};
exports.getStockAgingReportsAttributes = () => {
    return {
        itemCode: "$item.itemCode",
        itemName: "$item.itemName",
        itemDescription: "$item.itemDescription",
        perishableGoods: "$item.perishableGoods",
        shelfLife: "$item.shelfLife",
        GINQty: "$closedIRQty",
        expiryDate: {$dateToString: {format: "%d-%m-%Y", date: "$expiryDate"}},
        GINDateS: 1
    };
};
exports.getAllInventoryLocationWiseReportsAttributes = () => {
    return {
        itemCode: "$item.itemCode",
        itemName: "$item.itemName",
        itemDescription: "$item.itemDescription",
        openIRQty: {$toString: "$openIRQty"},
        deliveryLocation: 1,
        // storageLocationMapping: "$GRN.storageLocationMapping",
        UOM: 1,
        subLocation: "$storageLocationMapping.subLocation",
        rowNo: "$storageLocationMapping.rowNo",
        rackNo: "$storageLocationMapping.rackNo",
        binNo: "$storageLocationMapping.binNo",
        otherId: "$storageLocationMapping.otherId"
    };
};
exports.getStockPreparationShopReportsAttributes = () => {
    return {
        itemCode: 1,
        itemName: 1,
        itemDescription: 1,
        UOM: STOCK_PREP_UOM.SQM,
        closedIRQty: {$round: ["$convertedClosedIRQty", 2]},
        primaryToSecondaryConversion: 1,
        secondaryToPrimaryConversion: 1,
        primaryUnit: 1,
        secondaryUnit: 1,
        width: 1,
        length: 1,
        department: 1,
        MRNNumber: 1,
        formType: 1,
        aging: {
            $cond: {
                if: {
                    $or: [
                        {$eq: ["$expiryDate", null]},
                        {$gte: ["$expiryDate", {$add: [new Date(), 30 * 24 * 60 * 60 * 1000]}]}
                    ]
                },
                then: "green",
                else: {
                    $cond: {
                        if: {
                            $gt: ["$expiryDate", new Date()]
                        },
                        then: "yellow",
                        else: "red"
                    }
                }
            }
        }
    };
};
exports.getAllLocationSupplierItemWiseReportsAttributes = () => {
    return {
        MRNNumber: "$MRN.MRNNumber",
        supplier: "$MRN.supplier",
        itemCode: "$item.itemCode",
        itemName: "$item.itemName",
        itemDescription: "$item.itemDescription",
        primaryUnit: "$item.primaryUnit",
        secondaryUnit: "$item.secondaryUnit",
        conversionOfUnits: "$item.conversionOfUnits",
        primaryToSecondaryConversion: "$item.primaryToSecondaryConversion",
        secondaryToPrimaryConversion: "$item.secondaryToPrimaryConversion",
        stdCostUom1: "$item.supplierDetails.stdCostUom1",
        stdCostUom2: "$item.supplierDetails.stdCostUom2",
        UOM: 1,
        closedIRQty: 1,
        lineValue: {$round: [{$multiply: ["$closedIRQty", "$purchaseRatINR"]}, 2]},
        openIRQty: 1,
        purchaseRatINR: 1,
        supplierName: {
            $cond: {
                if: {
                    $or: [{$eq: ["$supplier.supplierNickName", null]}, {$eq: ["$supplier.supplierNickName", ""]}]
                },
                then: "$supplier.supplierName",
                else: "$supplier.supplierNickName"
            }
        },
        batchDate: 1,
        createdAt: 1,
        expiryDate: 1,
        deliveryLocation: "$GIN.deliveryLocation"
    };
};

exports.getAllStockPreparationShopAttributes = () => {
    return {
        itemCode: 1,
        itemName: 1,
        itemDescription: 1,
        UOM: STOCK_PREP_UOM.SQM,
        closedIRQty: {$round: ["$convertedClosedIRQty", 2]},
        primaryToSecondaryConversion: 1,
        secondaryToPrimaryConversion: 1,
        primaryUnit: 1,
        secondaryUnit: 1,
        width: 1,
        length: 1,
        department: 1,
        MRNNumber: 1,
        formType: 1,
        aging: {
            $cond: {
                if: {
                    $or: [
                        {$eq: ["$expiryDate", null]},
                        {$gte: ["$expiryDate", {$add: [new Date(), 30 * 24 * 60 * 60 * 1000]}]}
                    ]
                },
                then: "green",
                else: {
                    $cond: {
                        if: {
                            $gt: ["$expiryDate", new Date()]
                        },
                        then: "yellow",
                        else: "red"
                    }
                }
            }
        }
    };
};
