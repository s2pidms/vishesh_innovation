const app = require("express").Router();
const {getAllItemWiseReports, getAllRawMaterialInspectionReports, getAllMRNReports} = require("./MrnReports");
app.get("/getAllMRNReports", getAllMRNReports);
app.get("/getAllItemWiseReports", getAllItemWiseReports);
app.get("/getAllRawMaterialInspectionReports", getAllRawMaterialInspectionReports);

module.exports = app;
