exports.APP_PARAMETER = {
    COLLECTION_NAME: "AppParameter",
    ADDED_ACTION: "Setting appParameter created",
    UPDATED_ACTION: "Setting appParameter updated",
    MODULE_NAME: "App Parameter",
    MODULE: "APPPARAMETER",
    MODULE_PREFIX: "AP/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.ASSET_CLASS = {
    COLLECTION_NAME: "AssetClass",
    ADDED_ACTION: "Asset Class Master created",
    UPDATED_ACTION: "Asset Class Master updated",
    MODULE_NAME: "Asset Class"
    // MODULE: "APPPARAMETER",
    // MODULE_PREFIX: "APPPARAMETER",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.ATTRIBUTES_CONFIGURATION = {
    COLLECTION_NAME: "AttributesConfiguration"
};
exports.AUDIT = {
    COLLECTION_NAME: "Audit"
};
exports.AUTO_INCREMENT = {
    COLLECTION_NAME: "AutoIncrement",
    ADDED_ACTION: "Setting Auto Increment created",
    UPDATED_ACTION: "Setting Auto Increment updated",
    MODULE_NAME: "Auto Increment",
    MODULE: "AutoIncrement",
    MODULE_PREFIX: "AUTOINCREMENT",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.CHILD_ITEM_CATEGORY = {
    COLLECTION_NAME: "ChildItemCategory",
    ADDED_ACTION: "Child Item Category created",
    UPDATED_ACTION: "Child Item Category updated"
    // MODULE_NAME: "App Parameter",
    // MODULE: "APPPARAMETER",
    // MODULE_PREFIX: "APPPARAMETER",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.COMPANY = {
    COLLECTION_NAME: "Company",
    ADDED_ACTION: "Setting Company created",
    UPDATED_ACTION: "Setting Company updated"
    // MODULE_NAME: "App Parameter",
    // MODULE: "APPPARAMETER",
    // MODULE_PREFIX: "APPPARAMETER",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.COST_HEAD = {
    COLLECTION_NAME: "CostHead",
    ADDED_ACTION: "Cost Head created",
    UPDATED_ACTION: "Cost Head updated"
    // MODULE_NAME: "App Parameter",
    // MODULE: "APPPARAMETER",
    // MODULE_PREFIX: "APPPARAMETER",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.COST_SHEET = {
    COLLECTION_NAME: "CostSheet",
    ADDED_ACTION: "Cost Sheet created",
    UPDATED_ACTION: "Cost Sheet updated",
    MODULE_NAME: "Cost Sheet",
    MODULE: "CS",
    MODULE_PREFIX: "CS",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.CUSTOMER_PDIR_MAPPING = {
    COLLECTION_NAME: "CustomerPDIRMapping",
    ADDED_ACTION: "Report QMS Mapping created",
    UPDATED_ACTION: "Report QMS Mapping updated",
    MODULE_NAME: "Customer PDIR Mapping",
    MODULE: "CPM",
    MODULE_PREFIX: "CPM/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.DEPARTMENT = {
    COLLECTION_NAME: "Department",
    ADDED_ACTION: "Setting Department created",
    UPDATED_ACTION: "Setting Department updated",
    MODULE_NAME: "Department",
    MODULE: "DEPT",
    MODULE_PREFIX: "DEPT",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.ESP_CATEGORY = {
    COLLECTION_NAME: "ESPCategory",
    ADDED_ACTION: "ESP Category created",
    UPDATED_ACTION: "ESP Category updated"
    // MODULE_NAME: "Department",
    // MODULE: "DEPT",
    // MODULE_PREFIX: "DEPT",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.LABEL_MASTER = {
    COLLECTION_NAME: "LabelMaster"
};
exports.LOCATION = {
    COLLECTION_NAME: "Location"
};
exports.MAIL_CONFIG = {
    COLLECTION_NAME: "MailConfig",
    ADDED_ACTION: "Mail Config created",
    UPDATED_ACTION: "Mail Config updated"
    // MODULE_NAME: "Department",
    // MODULE: "DEPT",
    // MODULE_PREFIX: "DEPT",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.MENU_ITEM = {
    COLLECTION_NAME: "MenuItem",
    ADDED_ACTION: "Setting Menu Item created",
    UPDATED_ACTION: "Setting Menu Item updated"
    // MODULE_NAME: "Department",
    // MODULE: "DEPT",
    // MODULE_PREFIX: "DEPT",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.MESSAGE = {
    COLLECTION_NAME: "Message",
    // ADDED_ACTION: "Setting Menu Item created",
    // UPDATED_ACTION: "Setting Menu Item updated",
    MODULE_NAME: "Message",
    MODULE: "MESSAGE",
    MODULE_PREFIX: "MESSAGE",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.MODEL_INCREMENT = {
    COLLECTION_NAME: "ModelIncrement"
};
exports.MODULE_MASTER = {
    COLLECTION_NAME: "ModuleMaster",
    ADDED_ACTION: "Module Master created",
    UPDATED_ACTION: "Module Master updated"
    // MODULE_NAME: "Department",
    // MODULE: "DEPT",
    // MODULE_PREFIX: "DEPT",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.PROCESS_NAME = {
    COLLECTION_NAME: "ProcessNameMaster",
    ADDED_ACTION: "Process Name Master created",
    UPDATED_ACTION: "Process Name Master updated",
    MODULE_NAME: "Process Name Master",
    MODULE: "PRC",
    MODULE_PREFIX: "PRC",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.PROFESSIONAL_TAX = {
    COLLECTION_NAME: "ProfessionalTax",
    ADDED_ACTION: "Setting Professional Tax created",
    UPDATED_ACTION: "Setting Professional Tax updated",
    MODULE_NAME: "Professional Tax",
    MODULE: "PT",
    MODULE_PREFIX: "PT",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.PURCHASE_CATEGORY = {
    COLLECTION_NAME: "PurchaseCategory",
    ADDED_ACTION: "Purchase Category created",
    UPDATED_ACTION: "Purchase Category updated"
    // MODULE_NAME: "Professional Tax",
    // MODULE: "PT",
    // MODULE_PREFIX: "PT",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.REPORT_QMS_MAPPING = {
    COLLECTION_NAME: "ReportQMSMapping",
    ADDED_ACTION: "Report QMS Mapping created",
    UPDATED_ACTION: "Report QMS Mapping updated",
    MODULE_NAME: "Report QMS Mapping",
    MODULE: "RQM",
    MODULE_PREFIX: "RQM",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.ROLE_MENU = {
    COLLECTION_NAME: "RoleMenuItem"
};
exports.ROLE = {
    COLLECTION_NAME: "Role",
    ADDED_ACTION: "Setting Role created",
    UPDATED_ACTION: "Setting Role updated",
    MODULE_NAME: "Role",
    MODULE: "ROLE",
    MODULE_PREFIX: "R",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.SKU_CATEGORY = {
    COLLECTION_NAME: "SKUCategory",
    ADDED_ACTION: "SKU Master Category created",
    UPDATED_ACTION: "SKU Master Category updated"
    // MODULE_NAME: "Role",
    // MODULE: "ROLE",
    // MODULE_PREFIX: "ROLE",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};
exports.SUB_MODULE_MANAGEMENT = {
    COLLECTION_NAME: "SubModuleManagement"
};
exports.SUB_MODULE_PERMISSIONS = {
    COLLECTION_NAME: "SubModulePermissions"
};
exports.UOM = {
    COLLECTION_NAME: "UOMMaster",
    ADDED_ACTION: "UOM Master created",
    UPDATED_ACTION: "UOM Master updated",
    MODULE_NAME: "UOM Master",
    MODULE: "UOM/",
    MODULE_PREFIX: "UOM/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.USER = {
    COLLECTION_NAME: "User",
    // ADDED_ACTION: "UOM Master created",
    // UPDATED_ACTION: "UOM Master updated",
    MODULE_NAME: "User",
    MODULE: "USER",
    MODULE_PREFIX: "U",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};

exports.PRODUCT_CATEGORY = {
    COLLECTION_NAME: "ProductCategory",
    ADDED_ACTION: "Product Category created",
    UPDATED_ACTION: "Product Category updated"
    // MODULE_NAME: "Product Category Master",
    // MODULE: "ProductCategory",
    // MODULE_PREFIX: "PCM",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};

exports.MAIL_TRIGGER = {
    COLLECTION_NAME: "MailTrigger",
    ADDED_ACTION: "Mail Trigger created",
    UPDATED_ACTION: "Mail Trigger updated"
    // MODULE_NAME: "UOM Master",
    // MODULE: "MailTrigger",
    // MODULE_PREFIX: "UOM/",
    // AUTO_INCREMENT_DATA: function () {
    //     return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    // }
};

exports.UOM_UNIT_MASTER = {
    COLLECTION_NAME: "UOMUnitMaster",
    ADDED_ACTION: "UOM Unit Master created",
    UPDATED_ACTION: "UOM Unit Master updated"
    // MODULE_NAME: "UOM Unit Master",
    // MODULE: "UOMUnitMaster",
    // MODULE_PREFIX: "xyz/",
    // AUTO_INCREMENT_DATA: function () {
    //     return {
    //         moduleName: this.MODULE_NAME,
    //         module: this.MODULE,
    //         company: null,
    //         modulePrefix: this.MODULE_PREFIX
    //     };
    // }
};

exports.MOULD_MASTER = {
    COLLECTION_NAME: "MouldMaster",
    ADDED_ACTION: "Mould Master created",
    UPDATED_ACTION: "Mould Master updated",
    MODULE_NAME: "Mould Master",
    MODULE: "MouldMaster",
    MODULE_PREFIX: "M/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};

exports.SALES_UOM_UNIT_MASTER = {
    COLLECTION_NAME: "SalesUOMUnitMaster",
    ADDED_ACTION: "Sales UOM Unit Master created",
    UPDATED_ACTION: "Sales UOM Unit Master updated",
    MODULE_NAME: "Sales UOM Unit Master",
    MODULE: "SalesUOMUnitMaster",
    MODULE_PREFIX: "null",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.SERVICE_CHARGES = {
    COLLECTION_NAME: "ServiceCharges",
    ADDED_ACTION: "Service Charges created",
    UPDATED_ACTION: "Service Charges updated",
    MODULE_NAME: "Service Charges",
    MODULE: "ServiceCharges",
    MODULE_PREFIX: "null",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};

exports.CURRENCY_MASTER = {
    COLLECTION_NAME: "CurrencyMaster",
    ADDED_ACTION: "Currency Master created",
    UPDATED_ACTION: "Currency Master updated",
    MODULE_NAME: "Currency Master",
    MODULE: "CurrencyMaster",
    MODULE_PREFIX: "C/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.DEFECT_LIST_CONFIGURATION = {
    COLLECTION_NAME: "DefectListConfig",
    ADDED_ACTION: "Defect List Config created",
    UPDATED_ACTION: "Defect List Config updated"
    // MODULE_NAME: "Defect List Config",
    // MODULE: "DefectListConfig",
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

exports.INVENTORY_DEPARTMENT = {
    COLLECTION_NAME: "InventoryDepartments",
    ADDED_ACTION: "Inventory Departments created",
    UPDATED_ACTION: "Inventory Departments updated"
    // MODULE_NAME: "Inventory Departments",
    // MODULE: "InventoryDepartments",
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

exports.PROCESS_LIST_CONFIGURATION = {
    COLLECTION_NAME: "ProcessListConfig",
    ADDED_ACTION: "Process List Configuration created",
    UPDATED_ACTION: "Process List Configuration updated",
    MODULE_NAME: "Process List Configuration",
    MODULE: "ProcessListConfig",
    MODULE_PREFIX: "null",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
