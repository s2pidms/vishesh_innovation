exports.getAllChildItemMasterAttributes = () => {
    return {
        itemCode: 1,
        itemName: 1,
        itemDescription: 1,
        HSNCode: 1,
        unitOfMeasurement: 1,
        avgConsumptionPerMonth: 1,
        sourceOfManufacturing: 1,
        childItemCategory: 1,
        shelfLife: 1,
        status: 1,
        createdAt: 1
    };
};
exports.getAllChildItemMasterExcelAttributes = () => {
    return {
        childItemCategory: 1,
        itemCode: 1,
        itemName: 1,
        itemDescription: 1,
        HSNCode: 1,
        unitOfMeasurement: 1,
        avgConsumptionPerMonth: 1,
        itemCost: 1,
        sourceOfManufacturing: 1,
        supplierName: "$supplierDetails.supplierName",
        supplierPartNo: "$supplierDetails.supplierPartNo",
        currency: "$supplierDetails.currency",
        purchaseCost: "$supplierDetails.purchaseCost",
        // extServiceProviderName: "$serviceProviderDetails.extServiceProviderName",
        // manufacturingCost: "$serviceProviderDetails.manufacturingCost",
        // paymentTerms: "$serviceProviderDetails.paymentTerms",
        shelfLife: 1,
        // storageTemp: 1,
        // storageHumidity: 1,
        // specialStorageInstruction: 1,
        status: 1
    };
};
