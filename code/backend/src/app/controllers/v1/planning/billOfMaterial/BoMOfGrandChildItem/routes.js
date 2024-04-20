const app = require("express")();
const {validate} = require("../../../../../middleware/validators");
const {
    create,
    getAll,
    getById,
    update,
    deleteById,
    getAllMasterData,
    checkBOMOfGrChildExistsById
} = require("./BoMOfGrandChildItem");
app.post("/create", create);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put("/update/:id", validate("checkParamId"), update);
app.get("/checkBOMOfGrChildExistsById/:id", validate("checkParamId"), checkBOMOfGrChildExistsById);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);

module.exports = app;
