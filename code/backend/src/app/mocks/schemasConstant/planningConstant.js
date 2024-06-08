exports.JOB_CARD_CREATION = {
    COLLECTION_NAME: "JobCardCreation",
    ADDED_ACTION: "Job Card Creation created",
    UPDATED_ACTION: "Job Card Creation updated",
    MODULE_NAME: "Job Card Creation",
    MODULE: "JobCardCreation",
    MODULE_PREFIX: "JC/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.BILL_OF_MATERIAL = {
    COLLECTION_NAME: "BillingOfMaterial",
    ADDED_ACTION: "Bill of Material Master created",
    UPDATED_ACTION: "Bill of Material Master updated",
    MODULE_NAME: "Billing Of Material",
    MODULE: "BOM",
    MODULE_PREFIX: "BOM",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.CHILD_ITEM_MASTER = {
    COLLECTION_NAME: "ChildItem",
    ADDED_ACTION: "Child Item Master created",
    UPDATED_ACTION: "Child Item Master updated",
    // MODULE_NAME: "",
    MODULE: "ChildItem",
    MODULE_PREFIX: ""
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.DIRECT_COST = {
    COLLECTION_NAME: "DirectCost",
    ADDED_ACTION: "Direct Cost created",
    UPDATED_ACTION: "Direct Cost updated",
    MODULE_NAME: "Direct Cost",
    MODULE: "DC/",
    MODULE_PREFIX: "DC/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.PROCESS_MASTER = {
    COLLECTION_NAME: "ProcessMaster",
    ADDED_ACTION: "Process Master created",
    UPDATED_ACTION: "Process Master updated",
    MODULE_NAME: "Process Master",
    MODULE: "P/",
    MODULE_PREFIX: "P/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.PROCESS_RESOURCE_MANAGEMENT = {
    COLLECTION_NAME: "ProcessResourceManagement",
    ADDED_ACTION: "Process Resource management created",
    UPDATED_ACTION: "Process Resource management updated",
    MODULE_NAME: "Process Resource Management",
    MODULE: "PRM",
    MODULE_PREFIX: "PRM",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.PRODUCT_MASTER = {
    COLLECTION_NAME: "ProductMaster",
    ADDED_ACTION: "Product Master created",
    UPDATED_ACTION: "Product Master updated",
    MODULE_NAME: "Product Master",
    MODULE: "ST/",
    MODULE_PREFIX: "ST/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.ROUTING_MASTER = {
    COLLECTION_NAME: "RoutingMaster",
    ADDED_ACTION: "Routing  Master created",
    UPDATED_ACTION: "Routing Master updated",
    MODULE_NAME: "Routing Master",
    MODULE: "RM",
    MODULE_PREFIX: "RM",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.SFG_STOCK = {
    COLLECTION_NAME: "SFGStock",
    ADDED_ACTION: "Planning SFG Stock created",
    UPDATED_ACTION: "Planning SFG Stock updated",
    MODULE_NAME: "SFG Stock",
    MODULE: "SFG",
    MODULE_PREFIX: "SFG",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.SKU_COSTING = {
    COLLECTION_NAME: "SKUCosting",
    ADDED_ACTION: "SKU Costing Master created",
    UPDATED_ACTION: "SKU Costing Master updated",
    MODULE_NAME: "SKU Costing",
    MODULE: "SCO",
    MODULE_PREFIX: "SCO",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.SKU_COST_SHEET = {
    COLLECTION_NAME: "SKUCostSheet",
    ADDED_ACTION: "SKU Cost Sheet created",
    UPDATED_ACTION: "SKU Cost Sheet updated",
    MODULE_NAME: "SKU Cost Sheet",
    MODULE: "SKU-CS",
    MODULE_PREFIX: "SKU-CS",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.STOCK_ISSUE_TO_PRODUCTION = {
    COLLECTION_NAME: "StockIssueToProduction",
    ADDED_ACTION: "Planning Stock Issue created",
    UPDATED_ACTION: "Planning Stock Issue updated",
    MODULE_NAME: "Stock Issue",
    MODULE: "SIP",
    MODULE_PREFIX: "SIP",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.STOCK_TRANSFER_TO_STORE = {
    COLLECTION_NAME: "StockTransferToStores",
    ADDED_ACTION: "Planning Stock Transfer to Store created",
    UPDATED_ACTION: "Planning Stock Transfer to Store updated",
    MODULE_NAME: "Stock Transfer To Stores",
    MODULE: "STS",
    MODULE_PREFIX: "STS/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.WIP_INVENTORY = {
    COLLECTION_NAME: "WIPInventory",
    ADDED_ACTION: "Planning Stock Transfer to Store created",
    UPDATED_ACTION: "Planning Stock Transfer to Store updated",
    // MODULE_NAME: "",
    MODULE: "WIPInventory"
    // MODULE_PREFIX: "",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.BOM_OF_CHILD_PART = {
    COLLECTION_NAME: "BOMOfChildPart",
    ADDED_ACTION: "BOM Of Child Part created",
    UPDATED_ACTION: "BOM Of Child Part updated",
    MODULE_NAME: "BoM Of child Part",
    MODULE: "BOMC",
    MODULE_PREFIX: "BOMC",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.BOM_OF_GRAND_CHILD_PART = {
    COLLECTION_NAME: "BOMOfGrandChildItem",
    ADDED_ACTION: "BOM Of Grand Child Item created",
    UPDATED_ACTION: "BOM Of Grand Child Item updated",
    MODULE_NAME: "BoM Of Grand Child Item",
    MODULE: "BOMGC",
    MODULE_PREFIX: "BOMGC",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.BOM_OF_PRODUCT = {
    COLLECTION_NAME: "BoMOfProduct",
    ADDED_ACTION: "BoM Of Product created",
    UPDATED_ACTION: "BoM Of Product updated",
    MODULE_NAME: "BoM Of Product",
    MODULE: "B10/",
    MODULE_PREFIX: "B10/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.BOM_OF_SKU = {
    COLLECTION_NAME: "BoMOfSKU",
    ADDED_ACTION: "BoM Of SKU created",
    UPDATED_ACTION: "BoM Of SKU updated",
    MODULE_NAME: "BoM Of SKU",
    MODULE: "BOMS",
    MODULE_PREFIX: "BOMS",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};

exports.GOODS_ISSUE_PPIC_TO_PRODUCTION = {
    COLLECTION_NAME: "GoodsIssuePPICToProduction",
    ADDED_ACTION: "Goods Issue PPIC To Production created",
    UPDATED_ACTION: "Goods Issue PPIC To Production updated",
    MODULE_NAME: "Goods Issue PPIC To Production",
    MODULE: "GoodsIssuePPICToProduction",
    MODULE_PREFIX: "GI/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.GOODS_TRANSFER_REQUEST = {
    COLLECTION_NAME: "GoodsTransferRequest",
    ADDED_ACTION: "Goods Transfer Request created",
    UPDATED_ACTION: "Goods Transfer Request updated",
    MODULE_NAME: "Goods Transfer Request",
    MODULE: "GoodsTransferRequest",
    MODULE_PREFIX: "GTR/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.STOCK_PREPARATION = {
    COLLECTION_NAME: "StockPreparation",
    ADDED_ACTION: "Stock Preparation created",
    UPDATED_ACTION: "Stock Preparation updated"
    // MODULE_NAME: "Stock Preparation",
    // MODULE: "StockPreparation",
    // MODULE_PREFIX: "null",
    // AUTO_INCREMENT_DATA: function () {
    //     return {
    //         moduleName: this.MODULE_NAME,
    //         module: this.MODULE,
    //         company: null,
    //         modulePrefix: this.MODULE_PREFIX
    //     };
    // }
};
exports.BOM_OF_JOB_WORK_ITEM = {
    COLLECTION_NAME: "BOMOfJobWorkItem",
    ADDED_ACTION: "BoM Of Job Work Item created",
    UPDATED_ACTION: "BoM Of Job Work Item updated",
    MODULE_NAME: "BoM Of Job Work Item",
    MODULE: "BOMOfJobWorkItem",
    MODULE_PREFIX: "BOM/JWI/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
