const app = require("express")();
const {validate} = require("../../../../middleware/validators");
const {
    getAll,
    getById,
    update,
    deleteById,
    getAllFilteredCardsManagement,
    updateById,
    getCountsMenuItemWise
} = require("./subModuleManagement");

app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.put("/update", update);
app.put("/updateById/:id", validate("checkParamId"), updateById);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllFilteredCardsManagement", getAllFilteredCardsManagement);
app.get("/getCountsMenuItemWise", getCountsMenuItemWise);
module.exports = app;
