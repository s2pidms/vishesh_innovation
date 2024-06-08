const router = require("express").Router();

const BOM = require("./billOfMaterial/routes");
const WIPInventory = require("./WIPInventory/routes");
const childItemMaster = require("./childItemMaster/routes");
const productMaster = require("./productMaster/routes");
const processResourceManagement = require("./process-resource-management/routes");
const processMaster = require("./processMaster/routes");
const directCost = require("./directCost/routes");
const SKUCostSheet = require("./SKUCostSheet/routes");
const jobCard = require("./jobCard/routes");
const goodsTransferRequest = require("./goodsTransferRequest/routes");
const stockPreparation = require("./stockPreparation/routes");
const BOMOfJobWorkItem = require("./BOMOfJobWorkItem/routes");

router.use("/billOfMaterial", BOM);
router.use("/WIPInventory", WIPInventory);
router.use("/childItemMaster", childItemMaster);
router.use("/productMaster", productMaster);
router.use("/processResourceManagement", processResourceManagement);
router.use("/processMaster", processMaster);
router.use("/directCost", directCost);
router.use("/SKUCostSheet", SKUCostSheet);
router.use("/jobCard", jobCard);
router.use("/goodsTransferRequest", goodsTransferRequest);
router.use("/stockPreparation", stockPreparation);
router.use("/BOMOfJobWorkItem", BOMOfJobWorkItem);

module.exports = router;
