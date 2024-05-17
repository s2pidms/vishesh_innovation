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
    SKUInk: SKUInkColumns
};
