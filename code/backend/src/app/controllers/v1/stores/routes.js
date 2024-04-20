const router = require("express").Router();
// const {rolePermit} = require("../../../middleware/utils");
// const {usersRoles} = require("../../../helpers/global.options").OPTIONS;

const GoodsReceiptNote = require("./goodsReceiptNote/routes");
const GoodsInwardEntry = require("./goodsInwardEntry/routes");
const GoodsIssueAgainstGR = require("./goodsIssue/routes");
const Inventory = require("./Inventory/routes");
const FGIN = require("./finishedGoodsInwardEntry/routes");
const goodsTransferResponse = require("./goodsTransferResponse/routes");

router.use("/gin", GoodsInwardEntry);
router.use("/grn", GoodsReceiptNote);
router.use("/goodsIssue", GoodsIssueAgainstGR);
router.use("/inventory", Inventory);
router.use("/FGIN", FGIN);
router.use("/goodsTransferResponse", goodsTransferResponse);

module.exports = router;
