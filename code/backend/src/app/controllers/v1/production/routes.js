const router = require("express").Router();

const GR = require("./goodsRequisition/routes");
const FGCorrection = require("./FGCorrection/routes");
const childPartProduction = require("./childPartProduction/routes");
const SKUPartProduction = require("./SKUPartProduction/routes");
const grandPartProduction = require("./grandPartProduction/routes");
const inkMasterProduction = require("./inkMaster/routes");
const mapProcessMachine = require("./map-process-machine/routes");
const jobCardOutput = require("./jobCardOutput/routes");
const inkMixing = require("./inkMixing/routes");
const jobCardEntry = require("./jobCardEntry/routes");
const jcEntry = require("./jcEntry/routes");
const screenMakingLog = require("./productionHouse/screenMakingLog/routes");
const inkMixingLog = require("./productionHouse/inkMixingLog/routes");
const stockCutting = require("./productionHouse/stockCutting/routes");
const screenPrintingLog = require("./productionHouse/screenPrintingLog/routes");
const lamination = require("./productionHouse/lamination/routes");
const weeding = require("./productionHouse/weeding/routes");
const throughPunching = require("./productionHouse/throughPunching/routes");
const packing = require("./productionHouse/packing/routes");

router.use("/goodsRequisition", GR);
router.use("/FGCorrection", FGCorrection);
router.use("/childPartProduction", childPartProduction);
router.use("/SKUPartProduction", SKUPartProduction);
router.use("/grandPartProduction", grandPartProduction);
router.use("/inkMasterProduction", inkMasterProduction);
router.use("/mapProcessMachine", mapProcessMachine);
router.use("/jobCardOutput", jobCardOutput);
router.use("/inkMixing", inkMixing);
router.use("/jobCardEntry", jobCardEntry);
router.use("/jcEntry", jcEntry); // for Control Panel production in Continental
router.use("/screenMakingLog", screenMakingLog);
router.use("/inkMixingLog", inkMixingLog);
router.use("/stockCutting", stockCutting);
router.use("/screenPrintingLog", screenPrintingLog);
router.use("/lamination", lamination);
router.use("/weeding", weeding);
router.use("/throughPunching", throughPunching);
router.use("/packing", packing);

module.exports = router;
