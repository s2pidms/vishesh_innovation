const router = require("express").Router();

const BOM = require("./billOfMaterial/routes");
const SFGStock = require("./SFGStock/routes");
const WIPInventory = require("./WIPInventory/routes");
const stockIssueToProduction = require("./stockIssueToProduction/routes");
const stockTransferToStore = require("./stockTransferToStore/routes");
const childItemMaster = require("./childItemMaster/routes");
const productMaster = require("./productMaster/routes");
const processResourceManagement = require("./process-resource-management/routes");
const processMaster = require("./processMaster/routes");
const directCost = require("./directCost/routes");
const SKUCostSheet = require("./SKUCostSheet/routes");
const jobCard = require("./jobCard/routes");
const goodsIssuePPICToProduction = require("./goodsIssuePPICToProduction/routes");
const goodsTransferRequest = require("./goodsTransferRequest/routes");

router.use("/billOfMaterial", BOM);
router.use("/SFGStock", SFGStock);
router.use("/WIPInventory", WIPInventory);
router.use("/stockIssueToProduction", stockIssueToProduction);
router.use("/stockTransferToStore", stockTransferToStore);
router.use("/childItemMaster", childItemMaster);
router.use("/productMaster", productMaster);
router.use("/processResourceManagement", processResourceManagement);
router.use("/processMaster", processMaster);
router.use("/directCost", directCost);
router.use("/SKUCostSheet", SKUCostSheet);
router.use("/jobCard", jobCard);
router.use("/goodsIssuePPICToProduction", goodsIssuePPICToProduction);
router.use("/goodsTransferRequest", goodsTransferRequest);

module.exports = router;
