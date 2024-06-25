export const SUB_MODULES_TYPES = {
    MASTER: "MASTER",
    TRANSACTION: "TRANSACTION",
    REPORT: "REPORT"
};
export const FG_CORRECTION_CATEGORY = ["Rename Batch", "Batch Transfer", "Quantity Correction"];
export const SUPPLIER_GST_ClASSIFICATION = [
    "Regular B2B",
    "Composition Dealer",
    "SEZ Supplier",
    "E-Com Operator",
    "Unregistered Dealer"
];
export const SUPPLIER_MSME_ClASSIFICATION = ["Micro", "Small", "Medium", "Large"];
export const SAC_CODE = "996511";
export const CHILD_ITEM_SOURCE_OF_MFG = ["Inhouse", "Outsourced"];
export const PROCESS_MASTER_SOURCE_OF_MFG = ["Inhouse", "Outsourced"];
export const CHILD_ITEM_CATEGORY_NAME = ["L20/Child Item", "L30/Grand Child"];

export const FORM_DEFAULT_ACTIONS = {
    create: "create",
    edit: "edit",
    view: "view",
    approve: "approve",
    reject: "reject",
    cancel: "cancel"
};
export const LIST_DEFAULT_PERMISSION_ACTIONS = {
    createAction: "createAction",
    viewAction: "viewAction",
    editAction: "editAction",
    deleteAction: "deleteAction",
    approveAction: "approveAction",
    downloadAction: "downloadAction",
    generateReportAction: "generateReportAction",
    rejectAction: "rejectAction",
    cancelledAction: "cancelledAction"
};
export const SUPPORT_ISSUE_STATUS = [
    "Open",
    "In Progress",
    "Fixed",
    "Deployed on Production",
    "Verified",
    "Closed",
    "Reopened",
    "On Hold",
    "Need Additional Info"
];
export const SKU_MASTER_DIMENSIONS_UNITS = {
    mm: "mm",
    cm: "cm",
    m: "m",
    ft: "ft",
    inch: "inch",
    getAllSKUMasterDimensionsUnit: function () {
        return [
            SKU_MASTER_DIMENSIONS_UNITS.mm,
            SKU_MASTER_DIMENSIONS_UNITS.cm,
            SKU_MASTER_DIMENSIONS_UNITS.m,
            SKU_MASTER_DIMENSIONS_UNITS.ft,
            SKU_MASTER_DIMENSIONS_UNITS.inch
        ];
    }
};
export const PURCHASE_ORDER_TYPE = {
    STANDARD_PO: "Standard PO",
    PLANNED_PO: "Planned PO",
    BLANKET_PO: "Blanket PO",
    getAllPurchasePOType: function () {
        return [PURCHASE_ORDER_TYPE.STANDARD_PO, PURCHASE_ORDER_TYPE.PLANNED_PO, PURCHASE_ORDER_TYPE.BLANKET_PO];
    }
};
export const INDENT_CATEGORY = {
    STANDARD: "Standard",
    PLANNED: "Planned",
    getAllIndentCategory: function () {
        return [INDENT_CATEGORY.STANDARD, INDENT_CATEGORY.PLANNED];
    }
};

export const SKU_STAGE_OPTIONS = {
    prototype: "Prototype",
    pilot: "Pilot",
    production: "Production",
    getAllSKUStage: function () {
        return [this.prototype, this.pilot, this.production];
    }
};
export const COST_SHEET_COMPONENTS = {
    direct: "Direct",
    indirect: "Indirect",
    getAllComponentType: function () {
        return [COST_SHEET_COMPONENTS.direct, COST_SHEET_COMPONENTS.indirect];
    }
};

export const SO_ORDER_TYPE = {
    Regular: "Regular",
    Planned: "Planned",
    getAllSOType: function () {
        return [
            {label: "Regular", value: SO_ORDER_TYPE.Regular},
            {label: "Planned", value: SO_ORDER_TYPE.Planned}
        ];
    }
};
export const PDIR_ENTRY_TEMPLATE = {
    IDMS: "IDMS",
    getAllPDIRTemplate: function () {
        return [{label: "IDMS", value: PDIR_ENTRY_TEMPLATE.IDMS}];
    }
};
export const MINUTES_OF_MEETING_TYPE = [
    {label: "Internal", value: "Internal"},
    {label: "External", value: "External"}
];
export const MINUTES_OF_MEETING_STATUS = [
    {label: "Open", value: "Open"},
    {label: "In Progress", value: "In Progress"},
    {label: "On Hold", value: "On Hold"},
    {label: "Closed", value: "Closed"}
];
export const PDI_ENTRY_RELEASE_STATUS = {
    approved: "Approved",
    rejected: "Rejected",
    needReValidation: "Need Re-Validation",
    deviation: "Deviation",
    getAllPDIEntryReleaseStatus: function () {
        return [
            {label: "Approved", value: "Approved"},
            {label: "Rejected", value: "Rejected"},
            {label: "Need Re-Validation", value: "Need Re-Validation"},
            {label: "Deviation", value: "Deviation"}
        ];
    }
};

export const QC_LEVEL_STATUS = [
    {
        QCLNo: "L1",
        QCLDescription: "Visual Inspection/Verification",
        QCLevels: "L1",
        select: false
    },
    {
        QCLNo: "L2",
        QCLDescription: "Verification of COA/Test Certificate",
        QCLevels: "L2",
        select: false
    },
    {
        QCLNo: "L3",
        QCLDescription: "Inspection Of Incoming Material",
        QCLevels: "L3",
        select: false
    }
    // {
    //     QCLNo: "L4",
    //     QCLDescription: "Validation as per Quality Plan",
    //     QCLevels: "L4",
    //     select: false
    // }
];

export const PRODUCT_MASTER_SOURCE_OF_MFG = {
    inhouse: "Inhouse",
    outsourced: "Outsourced",
    getAllProductSourceOfMFG: function () {
        return [
            {label: "Inhouse", value: "Inhouse"},
            {label: "Outsourced", value: "Outsourced"}
        ];
    }
};

export const SALES_FORECAST_REPORT_NAME = {
    aodBalanceForecast: "AOD Balance Forecast",
    aodForecastByCustomer: "AOD Forecast by Customer",
    aodForecastBySKUName: "AOD Forecast by SKU Name",
    getAllReportName: function () {
        return [
            {label: "AOD Balance Forecast", value: "AOD Balance Forecast"},
            {label: "AOD Forecast by Customer", value: "AOD Forecast by Customer"},
            {label: "AOD Forecast by SKU Name", value: "AOD Forecast by SKU Name"}
        ];
    }
};
export const JOB_CARD_REPORT_NAME = {
    jobCard: "Job Card",
    jobCardByCustomer: "Job Card by Customer",
    // jobCardBySKUName: "Job Card by SKU Name",
    getAllReportName: function () {
        return [
            {label: "Job Card", value: "Job Card"},
            {label: "Job Card by Customer", value: "Job Card by Customer"}
            // {label: "Job Card by SKU Name", value: "Job Card by SKU Name"}
        ];
    }
};
export const SALES_ORDER_REPORT_NAME = {
    aodBalanceSalesOrder: "AOD Balance Sales Order",
    aodSalesOrderByCustomer: "AOD Sales Order by Customer",
    aodSalesOrderBySKUName: "AOD Sales Order by SKU Name",
    getAllReportName: function () {
        return [
            {label: "AOD Balance Sales Order", value: "AOD Balance Sales Order"},
            {
                label: "AOD Sales Order by Customer",
                value: "AOD Sales Order by Customer"
            },
            {
                label: "AOD Sales Order by SKU Name",
                value: "AOD Sales Order by SKU Name"
            }
        ];
    }
};
export const SALES_ORDER_STATUS_REPORT_NAME = {
    aodSalesOrderStatusReport: "AOD Sales Order Status Report",
    aodSOSRByCustomer: "AOD SOSR by Customer",
    getAllReportName: function () {
        return [
            {label: "AOD Sales Order Status Report", value: "AOD Sales Order Status Report"},
            {
                label: "AOD SOSR by Customer",
                value: "AOD SOSR by Customer"
            }
        ];
    }
};
export const SALES_REGISTER_REPORT_NAME = {
    taxInvoiceByDate: "Tax Invoice, by Date",
    taxInvoiceByCustomer: "Tax Invoice, by Customer",
    getAllReportName: function () {
        return [
            {label: "Tax Invoice, by Date", value: "Tax Invoice, by Date"},
            {
                label: "Tax Invoice, by Customer",
                value: "Tax Invoice, by Customer"
            }
        ];
    }
};
export const PURCHASE_REGISTER_REPORT_NAME = {
    taxInvoiceByDate: "Tax Invoice, by Date",
    taxInvoiceBySupplier: "Tax Invoice, by Supplier",
    getAllReportName: function () {
        return [
            {label: "Tax Invoice, by Date", value: "Tax Invoice, by Date"},
            {
                label: "Tax Invoice, by Supplier",
                value: "Tax Invoice, by Supplier"
            }
        ];
    }
};
export const GRN_REPORT_NAME = {
    aodGRN: "AOD GRN",
    aodGRNBySupplierWise: "AOD GRN by SupplierWise",
    aodGRNStatusWise: "AOD GRN by Status Wise",
    getAllReportName: function () {
        return [
            {label: "AOD GRN", value: "AOD GRN"},
            {
                label: "AOD GRN by SupplierWise",
                value: "AOD GRN by SupplierWise"
            },
            {
                label: "AOD GRN by Status Wise",
                value: "AOD GRN by Status Wise"
            }
        ];
    }
};
export const MRN_REPORT_NAME = {
    aodMRN: "AOD MRN",
    aodMRNBySupplierWise: "AOD MRN by SupplierWise",
    aodMRNStatusWise: "AOD MRN by Status Wise",
    getAllReportName: function () {
        return [
            {label: "AOD MRN", value: "AOD MRN"},
            {
                label: "AOD MRN by SupplierWise",
                value: "AOD MRN by SupplierWise"
            },
            {
                label: "AOD MRN by Status Wise",
                value: "AOD MRN by Status Wise"
            }
        ];
    }
};
export const PDIR_ENTRY_TEMPLATE_NAME = {
    genericPDIReport: "Generic PDI Report",
    customerPDIRMapping: "Customer PDIR Mapping",
    getAllTemplateName: function () {
        return [
            {label: "Generic PDI Report", value: "Generic PDI Report"},
            {label: "Customer PDIR Mapping", value: "Customer PDIR Mapping"}
        ];
    }
};

export const MRN_MFG_DATE_PERCENTAGE_SHELF_LIFE = 0.85;

export const INVENTORY_REPORT_NAME = {
    aodInventory: "AOD Inventory",
    aodInventoryBySupplier: "AOD Inventory by Supplier",
    aodInventoryByLocation: "AOD Inventory by Location",
    aodInventoryByItem: "AOD Inventory by Item",
    getAllInventoryReportName: function () {
        return [
            {label: "AOD Inventory", value: "AOD Inventory"},
            {
                label: "AOD Inventory by Supplier",
                value: "AOD Inventory by Supplier"
            },
            {
                label: "AOD Inventory by Location",
                value: "AOD Inventory by Location"
            },
            {
                label: "AOD Inventory by Item",
                value: "AOD Inventory by Item"
            }
        ];
    }
};

export const ASSET_CLASS_TYPE = {
    tangible: "Tangible",
    intangible: "Intangible",
    getAllClassType: function () {
        return [
            {label: "Tangible", value: "Tangible"},
            {label: "Intangible", value: "Intangible"}
        ];
    }
};

export const ASSET_CLASS_DEPRECIATION_AND_ENERGY_SPEC = [
    {label: "Yes", value: true},
    {label: "No", value: false}
];
export const TOTAL_WEEKLY_WORKING_DAYS = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3},
    {label: 4, value: 4},
    {label: 5, value: 5},
    {label: 6, value: 6},
    {label: 7, value: 7}
];

export const TRAINING_PLANNER_STATUS = [
    {label: "Planned", value: "Planned"},
    {label: "In Progress", value: "In Progress"},
    {label: "Partial", value: "Partial"},
    {label: "On Hold", value: "On Hold"},
    {label: "Completed", value: "Completed"}
];
export const TRAINING_MEDIUM = [
    {label: "G-Meet", value: "G-Meet"},
    {label: "In Person", value: "In Person"},
    {label: "On Call", value: "On Call"},
    {label: "Meeting", value: "Meeting"}
];
export const AUTO_RENEWAL = [
    {label: "Yes", value: "Yes"},
    {label: "No", value: "No"}
];

export const SKU_COST_SHEET_PARTICULARS = {
    directMaterial: "Direct Material",
    directLabour: "Direct Labour",
    directExpenses: "Direct Expenses",
    costOfGoodsSold: "Cost of Goods Sold(COGS)",
    operatingOpex: "Operating Expenses (OPEX)",
    totalCostOfOperation: "Total Cost of Operation (COGS + OPEX)",
    profit: "Profit",
    sellingPrice: "Selling Price"
};

export const COMPANY_TYPE_INJECTION_MOLDING = "Injection Molding";
export const COMPANY_TYPE_IP_MANUFACTURING = "Industrial Products Manufacturing";
export const COMPANY_TYPE_PRINTING_INDUSTRY = "Printing Industry";

export const superAdminId = "64a687b4e9143bffd820fb3d";
export const adminId = "64a687b4e9143bffd820fb3e";
export const DISCOUNT_TYPE = [
    {label: "Percentage", value: "Percentage"},
    {label: "Fixed Amount", value: "Fixed Amount"},
    {label: "Volume-Based", value: "Volume-Based"}
];

export const SESSION_SECRET = "IDMSA@9999";
