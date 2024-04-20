exports.MATERIAL_RECEIPT_NOTE = {
    COLLECTION_NAME: "MRN",
    ADDED_ACTION: "MRN created",
    UPDATED_ACTION: "MRN updated",
    MODULE_NAME: "MRN",
    MODULE: "MRN",
    MODULE_PREFIX: "MRN",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.PRE_DISPATCH_INSPECTION = {
    COLLECTION_NAME: "PreDispatchInspection",
    ADDED_ACTION: "Pre-Dispatch Inspection Entry created",
    UPDATED_ACTION: "Pre-Dispatch Inspection Entry updated",
    MODULE_NAME: "PreDispatch Inspection",
    MODULE: "PreDispatchInspection"
    // MODULE_PREFIX: "MRN",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.PRODUCT_SPECIFICATION = {
    COLLECTION_NAME: "ProductSpecification",
    ADDED_ACTION: "Product Specification created",
    UPDATED_ACTION: "Product Specification updated",
    MODULE_NAME: "Product Specification",
    MODULE: "PSP/",
    MODULE_PREFIX: "PSP/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};

exports.REJ_QTY_MANAGEMENT = {
    COLLECTION_NAME: "RejectedQtyMgnt",
    ADDED_ACTION: "Rejected Quantity created",
    UPDATED_ACTION: "Rejected Quantity updated",
    MODULE_NAME: "Product Specification",
    MODULE: "RejectedQtyMgnt"
    // MODULE_PREFIX: "PSP/",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};

exports.RM_SPECIFICATION = {
    COLLECTION_NAME: "RMSpecification",
    ADDED_ACTION: "RM Specification created",
    UPDATED_ACTION: "RM Specification updated",
    MODULE_NAME: "RM Specification",
    MODULE: "RM/",
    MODULE_PREFIX: "RM/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.SPECIFICATION = {
    COLLECTION_NAME: "SpecificationMaster",
    ADDED_ACTION: "Specification Master created",
    UPDATED_ACTION: "Specification Master updated",
    MODULE_NAME: "Specification Master",
    MODULE: "SPC",
    MODULE_PREFIX: "SPC",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};

exports.PRODUCT_CATEGORY_SPECIFICATIONS = {
    COLLECTION_NAME: "ProductCategorySpecifications",
    ADDED_ACTION: "Product Category Specifications created",
    UPDATED_ACTION: "Product Category Specifications updated",
    MODULE_NAME: "Product Category Specifications",
    MODULE: "ProductCategorySpecifications",
    // MODULE_PREFIX: "PCS/",
    // AUTO_INCREMENT_DATA: function () {
    //     return {
    //         moduleName: this.MODULE_NAME,
    //         module: this.MODULE,
    //         company: null,
    //         modulePrefix: this.MODULE_PREFIX
    //     };
    // }
}
exports.ITEM_CATEGORY_SPECIFICATIONS = {
    COLLECTION_NAME: "ItemCategorySpecifications",
    ADDED_ACTION: "Item Category Specifications created",
    UPDATED_ACTION: "Item Category Specifications updated",
    MODULE_NAME: "Item Category Specifications",
    MODULE: "ItemCategorySpecifications",
    // MODULE_PREFIX: "ICC/",
    // AUTO_INCREMENT_DATA: function () {
    //     return {
    //         moduleName: this.MODULE_NAME,
    //         module: this.MODULE,
    //         company: null,
    //         modulePrefix: this.MODULE_PREFIX
    //     };
    // }
}