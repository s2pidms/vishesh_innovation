const app = require("express")();
const {
    getAllFilterData,
    getAllReports,
    getReorderLevelReports,
    getStockAgingReports,
    getAllInventoryLocationWiseReports,
    getAllLocationSupplierItemWiseReports,
    getStockPreparationShopReports
} = require("./InventoryReports");

app.get("/getAllFilterData", getAllFilterData);
app.get("/getAllReports", getAllReports);
app.get("/getReorderLevelReports", getReorderLevelReports);
app.get("/getStockAgingReports", getStockAgingReports);
app.get("/getAllInventoryLocationWiseReports", getAllInventoryLocationWiseReports);
app.get("/getAllLocationSupplierItemWiseReports", getAllLocationSupplierItemWiseReports);
app.get("/getStockPreparationShopReports", getStockPreparationShopReports);

module.exports = app;
