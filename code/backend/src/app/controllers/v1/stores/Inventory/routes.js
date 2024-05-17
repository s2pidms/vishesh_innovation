const app = require("express")();
const {validate} = require("../../../../middleware/validators");
const upload = require("../../../../middleware/upload");
const RoutesReports = require("./routesReports");
const {
    create,
    getAll,
    getById,
    update,
    deleteById,
    getAllMasterData,
    getAllInventoryCorrectionByItems,
    updateSPSInventory
} = require("./Inventory");
const {getAllStockPreparationShop} = require("./InventoryReports");

app.post("/create", create);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put("/update", update);
app.put("/updateSPSInventory", updateSPSInventory);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getAllInventoryCorrectionByItems", getAllInventoryCorrectionByItems);
app.get("/getAllStockPreparationShop", getAllStockPreparationShop);
app.use("/", RoutesReports);
module.exports = app;
