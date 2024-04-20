const app = require("express")();
const {validate} = require("../../../../middleware/validators");
const {
    create,
    getAll,
    getById,
    update,
    deleteById,
    getAllMasterData,
    getCustomersByCategory,
    getJCDetailsByCustomerId,
    getAllJobTrackingMasterData,
    getAllReports,
    getBOMBySKUOrDSKU,
    getByIdForPDF
} = require("./jobCard");

app.post("/create", create);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.get("/getByIdForPDF/:id", validate("checkParamId"), getByIdForPDF);
app.put("/update/:id", validate("checkParamId"), update);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);
app.get("/getAllJobTrackingMasterData", getAllJobTrackingMasterData);
app.get("/getCustomersByCategory", getCustomersByCategory);
app.get("/getJCDetailsByCustomerId", getJCDetailsByCustomerId);
app.get("/getAllReports", getAllReports);
app.get("/getBOMBySKUOrDSKU", getBOMBySKUOrDSKU);

module.exports = app;
