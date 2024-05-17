const {CONSTANTS} = require("../../../../config/config");

exports.getAllItemAttributes = () => {
    return {
        isActive: {$cond: [{$eq: ["$isActive", "A"]}, "Active", "Inactive"]},
        itemCode: 1,
        itemName: 1,
        itemType: 1,
        perishableGoods: 1,
        storageTemp: 1,
        storageHumidity: 1,
        specialStorageInstruction: 1,
        generalSpecification: 1,
        itemDescription: 1,
        hsn: 1,
        supplierName: "$supplierDetails.supplierName",
        supplierDescription: "$supplierDetails.supplierDescription",
        supplierCurrency: "$supplierDetails.supplierCurrency",
        spin: "$supplierDetails.spin",
        uom1: "$supplierDetails.uom1",
        uom2: "$supplierDetails.uom2",
        stdCostUom1: "$supplierDetails.stdCostUom1",
        stdCostUom2: "$supplierDetails.stdCostUom2",
        primaryUnit: 1,
        shelfLife: 1,
        itemAMU: 1,
        itemROL: 1,
        tdsFile: 1,
        msdsFile: 1,
        drawing: 1,
        createdAt: 1,
        orderInfoUOM: 1,
        conversionOfUnits: 1,
        tdsFileUrl: {$concat: [CONSTANTS.domainUrl, "items/", "$tdsFile"]},
        msdsFileUrl: {$concat: [CONSTANTS.domainUrl, "items/", "$msdsFile"]},
        drawingUrl: {$concat: [CONSTANTS.domainUrl, "items/", "$drawing"]}
    };
};
exports.getAllItemExcelAttributes = () => {
    return {
        isActive: {$cond: [{$eq: ["$isActive", "A"]}, "Active", "Inactive"]},
        itemCode: 1,
        itemName: 1,
        itemType: 1,
        perishableGoods: 1,
        storageTemp: 1,
        storageHumidity: 1,
        specialStorageInstruction: 1,
        generalSpecification: 1,
        itemDescription: 1,
        dimWidth: "$dualUnitsDimensionsDetails.width",
        widthUnitUOM: "$dualUnitsDimensionsDetails.widthUnit",
        dimLength: "$dualUnitsDimensionsDetails.length",
        lengthUnitUOM: "$dualUnitsDimensionsDetails.lengthUnit",
        hsn: 1,
        supplierName: "$supplierDetails.supplierName",
        supplierDescription: "$supplierDetails.supplierDescription",
        supplierCurrency: "$supplierDetails.supplierCurrency",
        spin: "$supplierDetails.spin",
        uom1: "$supplierDetails.uom1",
        uom2: "$supplierDetails.uom2",
        stdCostUom1: "$supplierDetails.stdCostUom1",
        stdCostUom2: "$supplierDetails.stdCostUom2",
        primaryUnit: 1,
        secondaryUnit: 1,
        QCLevels: 1,
        shelfLife: 1,
        itemAMU: 1,
        itemROL: 1,
        tdsFile: 1,
        msdsFile: 1,
        drawing: 1,
        createdAt: 1,
        orderInfoUOM: 1,
        conversionOfUnits: 1,
        tdsFileUrl: {
            $cond: [{$not: ["$tdsFile"]}, "No", "Yes"]
        },
        msdsFileUrl: {
            $cond: [{$not: ["$msdsFile"]}, "No", "Yes"]
        }
    };
};
exports.getAllItemReportsAttributes = () => {
    return {
        supplier: "$supplierDetails.supplierId._id",
        supplierName: "$supplierDetails.supplierId.supplierName",
        supplierDescription: "$supplierDetails.supplierId.supplierDescription",
        unitPrice: 1,
        currency: "$supplierDetails.supplierCurrency",
        itemCode: 1,
        itemName: 1,
        itemType: 1,
        itemAMU: 1,
        itemROL: 1,
        orderInfoUOM: 1
    };
};
