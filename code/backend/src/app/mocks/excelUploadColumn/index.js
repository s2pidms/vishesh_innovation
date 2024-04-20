const supplierColumns = require("./supplierKeys.json");
const itemsColumns = require("./itemKeys.json");
const customerColumns = require("./customerKeys.json");
const inventoryColumns = require("./inventoryKeys.json");
const SKUColumns = require("./skuKeys.json");

module.exports = {
    Supplier: supplierColumns,
    Items: itemsColumns,
    Customer: customerColumns,
    InventoryCorrection: inventoryColumns,
    SKUMaster: SKUColumns
};
