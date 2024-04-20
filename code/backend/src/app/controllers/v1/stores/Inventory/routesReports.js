const app = require("express")();
const {
    getAllFilterData,
    getAllReports,
    getReorderLevelReports,
    getStockAgingReports,
    getAllInventoryLocationWiseReports,
    getAllLocationSupplierItemWiseReports
} = require("./InventoryReports");

app.get("/getAllFilterData", getAllFilterData);
app.get("/getAllReports", getAllReports);
app.get("/getReorderLevelReports", getReorderLevelReports);
app.get("/getStockAgingReports", getStockAgingReports);
app.get("/getAllInventoryLocationWiseReports", getAllInventoryLocationWiseReports);
app.get("/getAllLocationSupplierItemWiseReports", getAllLocationSupplierItemWiseReports);

module.exports = app;
