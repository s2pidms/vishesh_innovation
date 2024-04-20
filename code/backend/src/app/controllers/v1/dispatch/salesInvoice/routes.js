const app = require("express")();
const {validate} = require("../../../../middleware/validators");
const {
    create,
    getAll,
    getById,
    deleteById,
    getAllMasterData,
    previewTaxInv,
    getAllSILineDetails,
    getAllEwayBillList,
    getSalesInvoiceByIdForPDF
} = require("./salesInvoice");
const {getAllReports, getAllSalesAndInvoiceAnalysis, getAllSalesRegisterReports} = require("./salesInvoiceReports");
const {eWayBillGenerate, eInvoiceGenerate} = require("./e-way");

app.post("/create", create);
app.get("/getAll", getAll);
app.get("/getById/:id", validate("checkParamId"), getById);
app.get("/getSalesInvoiceByIdForPDF/:id", validate("checkParamId"), getSalesInvoiceByIdForPDF);
app.delete("/delete/:id", validate("checkParamId"), deleteById);
app.get("/getAllMasterData", getAllMasterData);
app.post("/previewTaxInv", previewTaxInv);
app.get("/getAllSILineDetails", getAllSILineDetails);
app.get("/getAllSalesAndInvoiceAnalysis", getAllSalesAndInvoiceAnalysis);
app.get("/getAllReports", getAllReports);
app.get("/getAllSalesRegisterReports", getAllSalesRegisterReports);
app.get("/getAllEwayBillList", getAllEwayBillList);
app.post("/eWayBillGenerate", eWayBillGenerate);
app.post("/eInvoiceGenerate", eInvoiceGenerate);
module.exports = app;
