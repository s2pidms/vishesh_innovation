const app = require("express")();
const {
    getAllReports,
    getAllFGINSummaryReports,
    getAllFGINLocationWiseReports,
    getAllFGINAllLocationReports,
    getAllFGINValueFinanceReports
} = require("./finishedGoodsInwardEntryReports");

app.get("/getAllReports", getAllReports);
app.get("/getAllFGINSummaryReports", getAllFGINSummaryReports);
app.get("/getAllFGINLocationWiseReports", getAllFGINLocationWiseReports);
app.get("/getAllFGINAllLocationReports", getAllFGINAllLocationReports);
app.get("/getAllFGINValueFinanceReports", getAllFGINValueFinanceReports);
module.exports = app;
