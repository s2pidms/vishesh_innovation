const router = require("express").Router();
const SKU = require("./SKU/routes");
const customerMaster = require("./customerMaster/routes");
const dispatch = require("./dispatchRequestNote/routes");
const salesOrder = require("./salesOrder/routes");
const B2c = require("./B2c/routes");
const proformaInvoice = require("./proformaInvoice/routes");
const creditNote = require("./creditNote/routes");
const HSN = require("./salesHSN/routes");
const SAC = require("./salesSAC/routes");
const transporter = require("./transporter/routes");
const serviceInvoice = require("./serviceInvoice/routes");
const serviceMaster = require("./serviceMaster/routes");
const mapCategoryHSN = require("./mapCategoryHSNMaster/routes");
const paymentTerms = require("./paymentTerms/routes");
const salesForecast = require("./sales-forecast/routes");
const salesDebitNote = require("./salesDebitNote/routes");
const quotationSKU = require("./quotationSKU/routes");
const salesProductMaster = require("./salesProductMaster/routes");
const customerDiscountManagement = require("./customerDiscountManagement/routes");
const directTaxInvoice = require("./directTaxInvoice/routes");

router.use("/SKU", SKU);
router.use("/customerMaster", customerMaster);
router.use("/drn", dispatch);
router.use("/salesOrder", salesOrder);
router.use("/B2c", B2c);
router.use("/proformaInvoice", proformaInvoice);
router.use("/creditNote", creditNote);
router.use("/HSN", HSN);
router.use("/SAC", SAC);
router.use("/serviceInvoice", serviceInvoice);
router.use("/serviceMaster", serviceMaster);
router.use("/transporter", transporter);
router.use("/mapCategoryHSN", mapCategoryHSN);
router.use("/paymentTerms", paymentTerms);
router.use("/salesForecast", salesForecast);
router.use("/salesDebitNote", salesDebitNote);
router.use("/quotationSKU", quotationSKU);
router.use("/salesProductMaster", salesProductMaster);
router.use("/customerDiscountManagement", customerDiscountManagement);
router.use("/directTaxInvoice", directTaxInvoice);

module.exports = router;
