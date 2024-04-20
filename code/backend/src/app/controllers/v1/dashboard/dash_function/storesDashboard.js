const {
    getAllGINItemCount,
    getTotalInventoryValue,
    getTotalInventoryValuePerDay
} = require("../../stores/Inventory/Inventory");
const {
    getGRNCounts,
    getMonthlyGRNVolume,
    getTotalGRNCreatedPerDay
} = require("../../stores/goodsReceiptNote/goodsReceiptNote");
const {getGINCounts, getTotalGINCreatedPerDay} = require("../../stores/goodsInwardEntry/goodsInwardEntry");
const {getGRCounts} = require("../../production/goodsRequisition/goodsRequisitionDashboard");
const {
    getGICounts,
    getMonthlyGIStatus,
    getTotalGoodsIssueAgainstGRPerDay
} = require("../../stores/goodsIssue/goodsIssue");
const memoryCacheHandler = require("../../../../utilities/memoryCacheHandler");

exports.stores = async company => {
    try {
        const [
            GINItemCount,
            totalInventoryValue,
            GRNCounts,
            GINCounts,
            GRCounts,
            GICounts,
            monthlyGRNVolume,
            monthlyGIStatus,
            totalGRNCreatedPerDay,
            totalGINCreatedPerDay,
            totalGoodsIssueAgainstGR,
            totalInventoryValuePerDay
        ] = await Promise.all([
            getAllGINItemCount(company),
            getTotalInventoryValue(company),
            getGRNCounts(company),
            getGINCounts(company),
            getGRCounts(company),
            getGICounts(company),
            getMonthlyGRNVolume(company),
            getMonthlyGIStatus(company),
            getTotalGRNCreatedPerDay(company),
            getTotalGINCreatedPerDay(company),
            getTotalGoodsIssueAgainstGRPerDay(company),
            getTotalInventoryValuePerDay(company)
        ]);
        let output = {
            barMonthlyGRNVolume: {
                labels: monthlyGRNVolume?.Months || [],
                datasets: [{data: monthlyGRNVolume?.Orders || []}]
            },
            barMonthlyGIStatus: {
                labels: monthlyGIStatus?.Months || [],
                datasets: [
                    {
                        data: monthlyGIStatus?.GIOpenedData || [],
                        label: "Requested",
                        borderColor: "#009658",
                        backgroundColor: "#009658"
                    },
                    {
                        data: monthlyGIStatus?.GIAcknowledgementData || [],
                        label: "Fulfilled"
                    }
                ]
            },
            GINItemCount: GINItemCount || 0,
            totalInventoryValue: totalInventoryValue || 0,
            GRNCounts: GRNCounts || 0,
            GINCounts: GINCounts || 0,
            GRCounts: GRCounts || 0,
            GICounts: GICounts || 0,
            totalGRNCreatedPerDay: totalGRNCreatedPerDay || 0,
            totalGINCreatedPerDay: totalGINCreatedPerDay || 0,
            totalGoodsIssueAgainstGR: totalGoodsIssueAgainstGR || 0,
            totalInventoryValuePerDay: totalInventoryValuePerDay || 0
        };
        memoryCacheHandler.put("stores", {});
        memoryCacheHandler.put("stores", output);
        return output;
    } catch (e) {
        console.error(e);
    }
};
