const router = require("express").Router();
const user = require("./user/routes");
const role = require("./role/routes");
const appParameter = require("./appParameter/routes");
const autoIncrement = require("./autoIncrement/routes");
const company = require("./company/routes");
const menuItem = require("./menuItem/routes");
const professionalTax = require("./professionalTax/routes");
const audit = require("./audit/routes");
const department = require("./department/routes");
const subModuleManagement = require("./subModuleManagement/routes");
const ESPCategoryMaster = require("./ESPCategoryMaster/routes");
const childItemCategory = require("./childItemCategory/routes");
const SKUCategoryMaster = require("./SKUCategoryMaster/routes");
const subModulePermissions = require("./subModulePermissions/routes");
const purchaseCategoryMaster = require("./purchaseCategoryMaster/routes");
const attributesConfiguration = require("./attributesConfiguration/routes");
const processNameMaster = require("./processNameMaster/routes");
const reportQMSMapping = require("./report-qms-mapping/routes");
const customerPDIRMapping = require("./customer-pdir-mapping/routes");
const moduleMaster = require("./module-master/routes");
const labelMaster = require("./label-master/routes");
const assetClassMaster = require("./assetClass/routes");
const mailConfig = require("./mail-config/routes");
const costHead = require("./costHead/routes");
const productCategory = require("./productCategoryMaster/routes");
const mailTrigger = require("./mailTrigger/routes");
const UOMUnitMaster = require("./UOMUnitMaster/routes");
const mouldMaster = require("./mouldMaster/routes");
const SalesUOMUnitMaster = require("./SalesUOMUnitMaster/routes");
const serviceCharges = require("./serviceCharges/routes");
const currencyMaster = require("./currencyMaster/routes");
const defectListConfig = require("./defectListConfig/routes");

router.use("/user", user);
router.use("/role", role);
router.use("/appParameter", appParameter);
router.use("/autoIncrement", autoIncrement);
router.use("/company", company);
router.use("/menuItem", menuItem);
router.use("/professionalTax", professionalTax);
router.use("/audit", audit);
router.use("/department", department);
router.use("/subModuleManagement", subModuleManagement);
router.use("/ESPCategoryMaster", ESPCategoryMaster);
router.use("/childItemCategory", childItemCategory);
router.use("/SKUCategoryMaster", SKUCategoryMaster);
router.use("/subModulePermissions", subModulePermissions);
router.use("/purchaseCategoryMaster", purchaseCategoryMaster);
router.use("/attributesConfiguration", attributesConfiguration);
router.use("/processNameMaster", processNameMaster);
router.use("/reportQMSMapping", reportQMSMapping);
router.use("/customerPDIRMapping", customerPDIRMapping);
router.use("/moduleMaster", moduleMaster);
router.use("/labelMaster", labelMaster);
router.use("/assetClassMaster", assetClassMaster);
router.use("/mailConfig", mailConfig);
router.use("/costHead", costHead);
router.use("/productCategory", productCategory);
router.use("/mailTrigger", mailTrigger);
router.use("/UOMUnitMaster", UOMUnitMaster);
router.use("/mouldMaster", mouldMaster);
router.use("/SalesUOMUnitMaster", SalesUOMUnitMaster);
router.use("/serviceCharges", serviceCharges);
router.use("/currencyMaster", currencyMaster);
router.use("/defectListConfig", defectListConfig);

module.exports = router;
