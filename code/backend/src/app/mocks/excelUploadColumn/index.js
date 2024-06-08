const supplierColumns = require("./supplierKeys.json");
const itemsColumns = require("./itemKeys.json");
const customerColumns = require("./customerKeys.json");
const inventoryColumns = require("./inventoryKeys.json");
const SKUColumns = require("./skuKeys.json");
const FGINColumns = require("./FGINKeys.json");
const employeeColumns = require("./employeeKeys.json");
const assetColumns = require("./assetKeys.json");
const SKUDimColumns = require("./SKUDimensionKeys.json");
const SKUMaterialColumns = require("./SKUMaterialKeys.json");
const SKUInkColumns = require("./SKUInkKeys.json");
const specificationMasterColumns = require("./specificationMasterKeys.json");
const purchaseHSNColumns = require("./purchaseHSNKeys.json");
const purchaseSACColumns = require("./purchaseSACKeys.json");
const salesHSNColumns = require("./salesHSNKeys.json");
const salesSACColumns = require("./salesSACKeys.json");
const transporterColumns = require("./transporterMasterKeys.json");
const jobWorkerColumns = require("./jobWorkerKeys.json");
const purchaseRegisterEntryColumns = require("./purchaseRegisterEntryKeys.json");
const jobWorkItemColumns = require("./jobWorkItemKeys.json");
const PPICInventoryColumns = require("./PPICInventoryKeys.json");

module.exports = {
    Supplier: supplierColumns,
    Items: itemsColumns,
    Customer: customerColumns,
    InventoryCorrection: inventoryColumns,
    SKUMaster: SKUColumns,
    FGIN: FGINColumns,
    Employee: employeeColumns,
    Asset: assetColumns,
    SKUDimensions: SKUDimColumns,
    SKUMaterial: SKUMaterialColumns,
    SKUInk: SKUInkColumns,
    SpecificationMaster: specificationMasterColumns,
    HSN: purchaseHSNColumns,
    SAC: purchaseSACColumns,
    SaleHSN: salesHSNColumns,
    SaleSAC: salesSACColumns,
    Transporter: transporterColumns,
    JobWorkerMaster: jobWorkerColumns,
    PurchaseRegisterEntry: purchaseRegisterEntryColumns,
    JobWorkItemMaster: jobWorkItemColumns,
    PPICInventoryCorrection: PPICInventoryColumns
};
