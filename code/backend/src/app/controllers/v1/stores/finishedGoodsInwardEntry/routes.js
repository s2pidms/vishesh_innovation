const app = require("express")();
const {validate} = require("../../../../middleware/validators");
const RouteReports = require("./routesReports");
const {
    create,
    getAll,
    getById,
    update,
    bulkCreate,
    deleteById,
    getAllMasterData,
    getAllFGINByProductCategory,
    getAllFGINMasterData
} = require("./finishedGoodsInwardEntry");

app.post("/create", create);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put("/update/:id", validate("checkParamId"), update);
app.post("/bulkCreate", bulkCreate);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getAllFGINMasterData", getAllFGINMasterData);
app.get("/getAllFGINByProductCategory", getAllFGINByProductCategory);
app.use("/", RouteReports);
module.exports = app;
