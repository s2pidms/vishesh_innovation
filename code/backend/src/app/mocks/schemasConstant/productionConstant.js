exports.CHILD_PART_PRODUCTION = {
    COLLECTION_NAME: "ChildPartProduction",
    ADDED_ACTION: "Child Part Production created",
    UPDATED_ACTION: "Child Part Production updated",
    MODULE_NAME: "Child Part Production",
    MODULE: "CPP",
    MODULE_PREFIX: "CPP",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.FG_CORRECTION = {
    COLLECTION_NAME: "FGCorrection",
    ADDED_ACTION: "Production FG Correction created",
    UPDATED_ACTION: "Production FG Correction updated",
    MODULE_NAME: "FG Correction",
    MODULE: "FG",
    MODULE_PREFIX: "FG",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.GOODS_REQUISITION = {
    COLLECTION_NAME: "GoodsRequisition",
    ADDED_ACTION: "Production Good Requisition created",
    UPDATED_ACTION: "Production Good Requisition updated",
    MODULE_NAME: "Goods Requisition",
    MODULE: "GR",
    MODULE_PREFIX: "GR",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.GROUP_PART_PRODUCTION = {
    COLLECTION_NAME: "GrandPartProduction",
    ADDED_ACTION: "Group Part Production created",
    UPDATED_ACTION: "Group Part Production updated",
    MODULE_NAME: "Group Part Production",
    MODULE: "GPP",
    MODULE_PREFIX: "GPP",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.INK_MASTER = {
    COLLECTION_NAME: "InkMaster",
    ADDED_ACTION: "Ink Master created",
    UPDATED_ACTION: "Ink Master updated",
    MODULE_NAME: "Ink Master",
    MODULE: "INKM",
    MODULE_PREFIX: "INKM",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.MAP_PROCESS_AND_MACHINE = {
    COLLECTION_NAME: "MapProcessAndMachine",
    ADDED_ACTION: "Map Process And Machine created",
    UPDATED_ACTION: "Map Process And Machine updated",
    MODULE_NAME: "Map Process And Machine",
    MODULE: "MP/",
    MODULE_PREFIX: "MP/",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};
exports.SKU_PART_PRODUCTION = {
    COLLECTION_NAME: "SKUPartProduction",
    ADDED_ACTION: "SKU Part Production created",
    UPDATED_ACTION: "SKU Part Production updated",
    MODULE_NAME: "SKU Part Production",
    MODULE: "SKUPP",
    MODULE_PREFIX: "SKUPP",
    AUTO_INCREMENT_DATA: function () {
        return {moduleName: this.MODULE_NAME, module: this.MODULE, company: null, modulePrefix: this.MODULE_PREFIX};
    }
};

exports.JOB_CARD_OUTPUT = {
    COLLECTION_NAME: "JobCardOutput",
    ADDED_ACTION: "Job Card Output created",
    UPDATED_ACTION: "Job Card Output updated",
    MODULE_NAME: "Job Card Output",
    MODULE: "JobCardOutput",
    MODULE_PREFIX: "JCO/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.INK_MIXING = {
    COLLECTION_NAME: "InkMixing",
    ADDED_ACTION: "Ink Mixing created",
    UPDATED_ACTION: "Ink Mixing updated",
    MODULE_NAME: "Ink Mixing",
    MODULE: "InkMixing",
    MODULE_PREFIX: "IM/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.JOB_CARD_ENTRY = {
    COLLECTION_NAME: "JobCardEntry",
    ADDED_ACTION: "Job Card Entry created",
    UPDATED_ACTION: "Job Card Entry updated",
    MODULE_NAME: "Job Card Entry",
    MODULE: "JobCardEntry",
    MODULE_PREFIX: "JCE/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.JC_ENTRY = {
    COLLECTION_NAME: "JCEntry",
    ADDED_ACTION: "JC Entry created",
    UPDATED_ACTION: "JC Entry updated",
    MODULE_NAME: "JC Entry",
    MODULE: "JCEntry",
    MODULE_PREFIX: "JCE/",
    AUTO_INCREMENT_DATA: function () {
        return {
            moduleName: this.MODULE_NAME,
            module: this.MODULE,
            company: null,
            modulePrefix: this.MODULE_PREFIX
        };
    }
};
exports.SCREEN_MAKING_LOG = {
    COLLECTION_NAME: "ScreenMakingLog",
    ADDED_ACTION: "Screen Making Log created",
    UPDATED_ACTION: "Screen Making Log updated"
    // MODULE_NAME: "Screen Making Log",
    // MODULE: "ScreenMakingLog",
    // MODULE_PREFIX: "SM/",
    // AUTO_INCREMENT_DATA: function () {
    //     return {
    //         moduleName: this.MODULE_NAME,
    //         module: this.MODULE,
    //         company: null,
    //         modulePrefix: this.MODULE_PREFIX
    //     };
    // }
};
exports.INK_MIXING_LOG = {
    COLLECTION_NAME: "InkMixingLog",
    ADDED_ACTION: "Ink Mixing Log created",
    UPDATED_ACTION: "Ink Mixing Log updated",
    MODULE_NAME: "Ink Mixing Log",
    MODULE: "InkMixingLog",
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
exports.STOCK_CUTTING = {
    COLLECTION_NAME: "StockCutting",
    ADDED_ACTION: "Stock Cutting created",
    UPDATED_ACTION: "Stock Cutting updated"
    // MODULE_NAME: "Stock Cutting",
    // MODULE: "StockCutting",
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
