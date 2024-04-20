const app = require("express")();
const {validate} = require("../../../../../middleware/validators");
const {
    create,
    getAll,
    getById,
    update,
    deleteById,
    getAllMasterData,
    checkBOMOfChildExistsById
} = require("./BoMOfChildPart");
app.post("/create", create);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.get("/checkBOMOfChildExistsById/:id", validate("checkParamId"), checkBOMOfChildExistsById);
app.put("/update/:id", validate("checkParamId"), update);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);

module.exports = app;
