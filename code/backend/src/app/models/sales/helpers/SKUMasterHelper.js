const {CONSTANTS} = require("../../../../config/config");

exports.getAllSKUMasterAttributes = () => {
    return {
        SKUNo: 1,
        SKUStage: 1,
        productCategory: 1,
        SKUName: 1,
        SKUDescription: 1,
        hsn: 1,
        primaryUnit: 1,
        artWorkNo: 1,
        artWorkHyperLink: 1,
        shelfLife: 1,
        // drawingArtWorkFile: 1,
        // productionLayoutFile: 1,
        createdAt: 1,
        isActive: 1, 
        status: 1,
        // drawingArtWorkFileUrl: {$concat: [CONSTANTS.domainUrl, "Sku/", "$drawingArtWorkFile"]},
        // productionLayoutFileUrl: {$concat: [CONSTANTS.domainUrl, "Sku/", "$productionLayoutFile"]}
    };
};
exports.getAllSKUMasterReportsAttributes = () => {
    return {
        SKUNo: 1,
        SKUName: 1,
        SKUDescription: 1,
        productCategory: 1,
        primaryUnit: 1,
        isActive: {$cond: [{$eq: ["$isActive", "A"]}, "Active", "Inactive"]},
        customerName: "$customerInfo.customer.customerName",
        customerPartNo: "$customerInfo.customerPartNo",
        standardSellingRate: "$customerInfo.standardSellingRate"
    };
};
exports.getAllSKUMasterExcelAttributes = () => {
    return {
        productCategory: 1,
        SKUNo: 1,
        SKUName: 1,
        SKUStage: 1,
        SKUDescription: 1,
        hsn: 1,
        primaryUnit: 1,
        artWorkNo: 1,
        status: 1,
        shelfLife: 1,
        customerName: "$customerInfo.customerName",
        customerPartNo: "$customerInfo.customerPartNo",
        customerCurrency: "$customerInfo.customerCurrency",
        standardSellingRate: "$customerInfo.standardSellingRate",
        monthlyOffTake: "$customerInfo.monthlyOffTake",
        PONo: "$customerInfo.PONo",
        PODate: "$customerInfo.PODate",
        POValidDate: {$dateToString: {format: "%d-%m-%Y", date: "$customerInfo.POValidDate"}},
        shelfLife: 1,
        storageTemp: 1,
        storageHumidity: 1,
        specialStorageInstruction: 1,
        ADUnit: "$dimensionsDetails.actualDimensions.unit",
        ADWidth: "$dimensionsDetails.actualDimensions.width",
        ADLength: "$dimensionsDetails.actualDimensions.length",
        ADUps: "$dimensionsDetails.actualDimensions.ups",
        ADArea: "$dimensionsDetails.actualDimensions.area",
        ADMtSqArea: "$dimensionsDetails.actualDimensions.mSqArea",
        unit: "$dimensionsDetails.layoutDimensions.unit",
        width: "$dimensionsDetails.layoutDimensions.width",
        length: "$dimensionsDetails.layoutDimensions.length",
        ups: "$dimensionsDetails.layoutDimensions.ups",
        area: "$dimensionsDetails.layoutDimensions.area",
        mSqArea: "$dimensionsDetails.layoutDimensions.mSqArea",
        wastePercentage: "$dimensionsDetails.layoutDimensions.wastePercentage",
        // drawingArtWorkFileUrl: {
        //     $cond: [{$not: ["$drawingArtWorkFile"]}, "No", "Yes"]
        // },
        // productionLayoutFileUrl: {
        //     $cond: [{$not: ["$productionLayoutFile"]}, "No", "Yes"]
        // }
    };
};
