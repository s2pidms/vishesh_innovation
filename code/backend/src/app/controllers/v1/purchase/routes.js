const router = require("express").Router();

const supplier = require("./suppliers/routes");
const item = require("./items/routes");
const service = require("./serviceMaster/routes");
const HSN = require("./HSN/routes");
const SAC = require("./SAC/routes");
const purchaseOrders = require("./purchaseOrder/routes");
const servicePurchaseOrders = require("./servicePurchaseOrder/routes");
const capitalGoods = require("./capitalGoods/routes");
const debitNote = require("./debitNote/routes");
const supplierRuleMaster = require("./supplierRule/routes");
const itemCategoryMaster = require("./itemCategoryMaster/routes");
const externalServiceProvider = require("./externalServiceProviderMaster/routes");
const channelPartner = require("./channelPartner/routes");
const purchaseIndent = require("./purchaseIndent/routes");

router.use("/supplierMaster", supplier);
router.use("/itemMaster", item);
router.use("/serviceMaster", service);
router.use("/HSN", HSN);
router.use("/SAC", SAC);
router.use("/po", purchaseOrders);
router.use("/spo", servicePurchaseOrders);
router.use("/cgm", capitalGoods);
router.use("/debitNote", debitNote);
router.use("/supplierRuleMaster", supplierRuleMaster);
router.use("/itemCategoryMaster", itemCategoryMaster);
router.use("/externalServiceProvider", externalServiceProvider);
router.use("/channelPartner", channelPartner);
router.use("/purchaseIndent", purchaseIndent);

module.exports = router;
