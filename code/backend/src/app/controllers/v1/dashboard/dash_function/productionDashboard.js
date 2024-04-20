const memoryCacheHandler = require("../../../../utilities/memoryCacheHandler");
const {getTotalNoOfSKUProducedPerDay} = require("../../production/SKUPartProduction/SKUPartProduction");
const {getTotalNoOfChildPartProducedPerDay} = require("../../production/childPartProduction/childPartProduction");
const {
    getAllGRCounts,
    getAllMonthlyGRTrends,
    getTotalGoodsRequisitionPerDay
} = require("../../production/goodsRequisition/goodsRequisitionDashboard");
const {getTotalNoOfGrandChildPartProducedPerDay} = require("../../production/grandPartProduction/grandPartProduction");
const {
    getAllFGINEntriesCounts,
    getAllMonthlyFGINTrends
} = require("../../stores/finishedGoodsInwardEntry/finishedGoodsInwardEntry");
const {getTotalGoodsIssueAgainstGRPerDay} = require("../../stores/goodsIssue/goodsIssue");

exports.production = async company => {
    try {
        const [
            GRAllCounts,
            FGINEntriesCount,
            monthlyGRTrend,
            monthlyFGINTrends,
            totalGoodsRequisitionCreatedPerDay,
            totalGoodsIssueAgainstGR,
            totalSKUProducedPerDay,
            totalChildPartProducedPerDay,
            totalGrandChildPartProducedPerDay
        ] = await Promise.all([
            getAllGRCounts(company),
            getAllFGINEntriesCounts(company),
            getAllMonthlyGRTrends(company),
            getAllMonthlyFGINTrends(company),
            getTotalGoodsRequisitionPerDay(company),
            getTotalGoodsIssueAgainstGRPerDay(company),
            getTotalNoOfSKUProducedPerDay(company),
            getTotalNoOfChildPartProducedPerDay(company),
            getTotalNoOfGrandChildPartProducedPerDay(company)
        ]);
        let output = {
            barChartDataEmpPaidSalary: {
                labels: monthlyGRTrend?.months || [],
                datasets: [{data: monthlyGRTrend?.orders || []}]
            },
            barChartDataFGIEntry: {
                labels: monthlyFGINTrends?.months || [],
                datasets: [{data: monthlyFGINTrends?.orders || []}]
            },
            totalRequisitions: GRAllCounts?.allCounts || 0,
            approvedRequisitions: GRAllCounts?.approvedCounts || 0,
            pendingRequisitions: GRAllCounts?.openedCounts || 0,
            totalFGInwardEntries: FGINEntriesCount || 0,
            totalGoodsRequisitionCreatedPerDay: totalGoodsRequisitionCreatedPerDay || 0,
            totalGoodsIssueAgainstGRPerDay: totalGoodsIssueAgainstGR || 0,
            totalSKUProducedPerDay: totalSKUProducedPerDay || 0,
            totalChildPartProducedPerDay: totalChildPartProducedPerDay || 0,
            totalGrandChildPartProducedPerDay: totalGrandChildPartProducedPerDay || 0,
            unit: null
        };
        memoryCacheHandler.put("production", {});
        memoryCacheHandler.put("production", output);
        return output;
    } catch (e) {
        console.error(e);
    }
};
