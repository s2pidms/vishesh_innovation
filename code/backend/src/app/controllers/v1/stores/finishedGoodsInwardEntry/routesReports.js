const app = require("express")();
const {
    getAllReports,
    getAllFGINSummaryReports,
    getAllFGINLocationWiseReports,
    getAllFGINAllLocationReports,
    getAllFGINValueFinanceReports,
    getAllFGInventoryReports
} = require("./finishedGoodsInwardEntryReports");

app.get("/getAllReports", getAllReports);
app.get("/getAllFGINSummaryReports", getAllFGINSummaryReports);
app.get("/getAllFGINLocationWiseReports", getAllFGINLocationWiseReports);
app.get("/getAllFGINAllLocationReports", getAllFGINAllLocationReports);
app.get("/getAllFGINValueFinanceReports", getAllFGINValueFinanceReports);
app.get("/getAllFGInventoryReports", getAllFGInventoryReports);
module.exports = app;
