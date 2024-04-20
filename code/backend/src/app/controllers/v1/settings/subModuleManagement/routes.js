const app = require("express")();
const {validate} = require("../../../../middleware/validators");
const {getAll, getById, update, deleteById} = require("./subModuleManagement");

app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put("/update", update);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
module.exports = app;
