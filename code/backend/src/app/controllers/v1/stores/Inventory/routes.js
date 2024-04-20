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
    getAllInventoryCorrectionByItems
} = require("./Inventory");

app.post("/create", create);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put("/update", update);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getAllInventoryCorrectionByItems", getAllInventoryCorrectionByItems);
app.use("/", RoutesReports);
module.exports = app;
