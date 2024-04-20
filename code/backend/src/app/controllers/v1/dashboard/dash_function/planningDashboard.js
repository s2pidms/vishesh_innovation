const {getBOMOfSKUCount} = require("../../planning/billOfMaterial/BoMOfSKU/BoMOfSKUs");
const {getBOMOfGrandChildPartCount} = require("../../planning/billOfMaterial/BoMOfGrandChildItem/BoMOfGrandChildItem");
const {getBOMOfChildPartCount} = require("../../planning/billOfMaterial/BoMOfChildPart/BoMOfChildPart");
const {getAllChildItemMasterCountByCategoryAndSOM} = require("../../planning/childItemMaster/childItemMaster");
const {getTotalGoodsRequisitionPerDay} = require("../../production/goodsRequisition/goodsRequisitionDashboard");
const memoryCacheHandler = require("../../../../utilities/memoryCacheHandler");
exports.planning = async company => {
    try {
        const [
            BOMOfSKUCount,
            BOMOfGrandChildPartCount,
            BOMOfChildPartCount,
            childItemMasterCountByCategoryAndSOM,
            totalGoodsRequisition
        ] = await Promise.all([
            getBOMOfSKUCount(company),
            getBOMOfGrandChildPartCount(company),
            getBOMOfChildPartCount(company),
            getAllChildItemMasterCountByCategoryAndSOM(company),
            getTotalGoodsRequisitionPerDay(company)
        ]);
        let output = {
            barMonthlyMaintenanceCost: {
                labels: [],
                datasets: [{data: []}]
            },
            barMonthlyWOStatusCount: {
                labels: [],
                datasets: [{data: []}]
            },
            totalNoOfSkuBOM: BOMOfSKUCount || 0,
            totalNoOfChildPartBOM: BOMOfChildPartCount || 0,
            totalNoOfGrChildPartBOM: BOMOfGrandChildPartCount || 0,
            totalGRPerDay: totalGoodsRequisition || 0,
            totalNoOfInHouseChildPart: childItemMasterCountByCategoryAndSOM?.inHouseL20Counts || 0,
            totalNoOfInHouseGrChildPart: childItemMasterCountByCategoryAndSOM?.inHouseL30Counts || 0,
            totalNoOfOutsourcedChildPart: childItemMasterCountByCategoryAndSOM?.outSourcedL20Counts || 0,
            totalNoOfOutsourcedGrChildPart: childItemMasterCountByCategoryAndSOM?.outSourcedL30Counts || 0,
            unit: null
        };
        memoryCacheHandler.put("planning", {});
        memoryCacheHandler.put("planning", output);

        return output;
    } catch (e) {
        console.error(e);
    }
};
