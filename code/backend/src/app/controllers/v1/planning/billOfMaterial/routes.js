const router = require("express").Router();

const BoMOfChildPart = require("./BoMOfChildPart/routes");
const BoMOfSKU = require("./BoMOfSKU/routes");
const BoMOfGrandChildItem = require("./BoMOfGrandChildItem/routes");
const BoMOfProduct = require("./BoMOfProduct/routes");

router.use("/BoMOfChildPart", BoMOfChildPart);
router.use("/BoMOfSKU", BoMOfSKU);
router.use("/BoMOfGrandChildItem", BoMOfGrandChildItem);
router.use("/BoMOfProduct", BoMOfProduct);

module.exports = router;
