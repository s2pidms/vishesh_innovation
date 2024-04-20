const WIP_INVENTORY_FILTER_FIELDS = ["Raw Material", "Backing Material"];
const RAW_MATERIAL_CATEGORIES = [
    "Raw Material",
    "Backing Material",
    "W10 - Backing Material",
    "W20 - Solid Chemicals",
    "W25 - Liquid Chemicals",
    "W30 - Inks"
];
const INPUT_SOURCE = ["PPIC - RM Stock", "PPIC - SFG"];
const CHILD_ITEM_CATEGORY_NAME = {
    CHILD_ITEM: "L20/Child Item",
    GRAND_CHILD: "L30/Grand Child"
};
const BOOLEAN_VALUES = {
    TRUE: "true",
    FALSE: "false",
    YES: "Yes",
    NO: "No"
};
const INK_ITEM_CATEGORY_NAME = {
    PRODUCTION_CONSUMABLE: "Production Consumable",
    MISCELLANEOUS: "Miscellaneous",
    ENGINEERING_CONSUMABLE: "Engineering Consumable"
};
const SALES_CATEGORY = {
    DOMESTIC_OEM: "Domestic – OEM",
    DOMESTIC_DEALER: "Domestic – Dealer",
    EXPORTS_DEALER: "Exports – Dealer",
    EXPORTS_OEM: "Exports – OEM",
    DOMESTIC: "Domestic",
    getAllDomesticSalesCategory: function () {
        return [SALES_CATEGORY.DOMESTIC_OEM, SALES_CATEGORY.DOMESTIC_DEALER];
    },
    getAllExportsSalesCategory: function () {
        return [SALES_CATEGORY.EXPORTS_OEM, SALES_CATEGORY.EXPORTS_DEALER];
    }
};
const COMPANY_TYPE = {
    PRINTING_INDUSTRY: "Printing Industry",
    AUTOMOBILE_INDUSTRY: "Automobile Industry",
    INJECTION_MOULDING: "Injection Molding"
};
const EMPLOYEE_JOINING_LOCATION = {
    FACTORY: "factory",
    WORK: "work",
    OFFICE_FACTORY: "Office & Factory",
    getAllFilterLocationArray: function (array) {
        let locationArray = [];
        for (const ele of array) {
            locationArray.push(OPTIONS.defaultLocation[ele]);
        }
        return locationArray;
    }
};
const ASSET_CLASS_NAMES = {
    MACHINES: "Machines",
    EQUIPMENT: "Equipment"
};
const ITEM_CATEGORY_OPTIONS = [
    "Capital Goods",
    "Raw Material",
    "Production Consumable",
    "Engineering Consumable",
    "Packaging Material",
    "Office Stationery",
    "Miscellaneous",
    "Traded Goods"
];

const SACObj = {
    provisionType: "Service",
    isActive: "Y",
    sacCode: "996511",
    serviceDescription: "Other Charges",
    gstRate: 18,
    igstRate: 18,
    sgstRate: 9,
    cgstRate: 9,
    ugstRate: 18,
    sacMasterEntryNo: "SAC0000",
    sacEntryDate: "2023-12-13",
    revision: [
        {
            revisionNo: "1",
            revisionDate: "2023-12-13"
        }
    ]
};
const OTHER_CHARGES_SAC_CODE = "996511";
const LABOUR_RATE_MASTER_ARRAY = [
    {
        _id: "6593b1cc6dfafb4767d7b688",
        category: "Skilled Labour",
        monthlySalary: 0,
        daysPerMonth: 0,
        shiftHrs: 0,
        salaryPerHour: 0,
        revisionDate: new Date()
    },
    {
        _id: "6593b1cc6dfafb4767d7b687",
        category: "Semi-Skilled Labour",
        monthlySalary: 0,
        daysPerMonth: 0,
        shiftHrs: 0,
        salaryPerHour: 0,
        revisionDate: new Date()
    },
    {
        _id: "6593b1cc6dfafb4767d7b689",
        category: "Un-Skilled Labour",
        monthlySalary: 0,
        daysPerMonth: 0,
        shiftHrs: 0,
        salaryPerHour: 0,
        revisionDate: new Date()
    }
];
const NPD_REVIEW_FIELDS = [
    "customerInputs",
    "technicalReview",
    "economicReview",
    "legalReview",
    "operationalReview",
    "schedulingReview"
];
const NPD_REVIEW_MAIL_ACTION = {
    customerInputs: "Customer Inputs",
    technicalReview: "Technical Review",
    economicReview: "Economic Review",
    legalReview: "Legal Review",
    operationalReview: "Operational Review",
    schedulingReview: "Scheduling Review"
};
const COST_HEADS = {
    RENT: "Rent",
    INDIRECT_SALARIES: "Indirect Salaries & benefits",
    INSURANCE: "Insurance",
    MAINTENANCE_REPAIRS: "Maintenance & Repairs",
    CONSUMABLES_SPARES: "Consumables & Spares",
    ELECTRICITY: "Electricity",
    UTILITY: "Utility",
    MARKETING: "Marketing",
    SALES_DISTRIBUTION: "Sales & Distribution",
    ADMIN_OTHER: "Admin & Other"
};
const JOB_CARD_STAGE = {
    PROTOTYPE: "Prototype",
    PILOT: "Pilot",
    PRODUCTION: "Production",
    getStages: function () {
        return [this.PROTOTYPE, this.PILOT, this.PRODUCTION];
    }
};
const JOB_ORDER_TYPE = {
    ALL: "All",
    SO: "SO",
    FC: "FC",
    NPD: "NPD",
    getOrders: function () {
        return [this.ALL, this.SO, this.FC, this.NPD];
    }
};
const STOCK_PREP_UOM = {
    SQM: "sqm",
    SHEET: "SHT",
    ROLL: "RL",
    getStockUOM: function () {
        return [this.SQM, this.SHEET, this.ROLL];
    }
};
const INK_MIXING_UOM = {
    LTR: "ℓ",
    KG: "kg",
    GRAM: "g",
    getInkMixingUOM: function () {
        return [this.LTR, this.KG, this.GRAM];
    }
};
const SKU_COST_SHEET_DETAILS = [
    {
        srNo: 1,
        costHead: "Direct Material",
        costPerUnit: 0,
        percentage: 0
    },
    {
        srNo: 2,
        costHead: "Direct Labour",
        costPerUnit: 0,
        percentage: 0
    },
    {
        srNo: 3,
        costHead: "Direct Expenses",
        costPerUnit: 0,
        percentage: 0
    },
    {
        srNo: 4,
        costHead: "Cost of Goods Sold(COGS)",
        costPerUnit: 0,
        percentage: 0
    },
    {
        srNo: 5,
        costHead: "Operating Expenses (OPEX)",
        costPerUnit: 0,
        percentage: 0
    },
    {
        srNo: 6,
        costHead: "Total Cost of Operation (COGS + OPEX)",
        costPerUnit: 0,
        percentage: 0
    },
    {
        srNo: 7,
        costHead: "Profit",
        costPerUnit: 0,
        percentage: 0
    },
    {
        srNo: 8,
        costHead: "Selling Price",
        costPerUnit: 0,
        percentage: 0
    }
];
const GOODS_TRANSFER_REQUEST_DEPT = {
    STORES: "Stores",
    PLANNING: "Planning",
    PRODUCTION: "Production"
};
const PPIC_STAGES = {
    R2R: "Roll To Roll",
    R2S: "Roll To Sheet",
    getStages: function () {
        return [this.R2R, this.R2S];
    }
};
const INVENTORY_CREATE_OBJ = {
    company: null,
    createdBy: null,
    updatedBy: null,
    ICDate: null,
    GINDate: null,
    GIN: null,
    MRN: null,
    supplier: null,
    MRNNumber: null,
    ICStatus: null,
    UOM: null,
    primaryToSecondaryConversion: null,
    secondaryToPrimaryConversion: null,
    primaryUnit: null,
    secondaryUnit: null,
    conversionOfUnits: null,
    item: null,
    itemCode: null,
    itemName: null,
    itemDescription: null,
    itemType: null,
    itemSubCategory: null,
    // openIRQty: null,
    updatedQty: null,
    closedIRQty: null,
    standardRate: null,
    purchaseRate: null,
    purchaseRateUSD: null,
    purchaseRatINR: null,
    lineValueINR: null,
    batchDate: null,
    deliveryLocation: null,
    department: null,
    storageLocationMapping: {
        subLocation: null,
        rowNo: null,
        rackNo: null,
        binNo: null,
        otherId: null
    },
    type: null,
    SQM: null,
    roll: null,
    width: null,
    length: null,
    expiryDate: null,
    stage: null,
    noOfRollsToBeSlit: null,
    sqmToBeProcessed: null,
    recovery: null,
    recoveryPercentage: null,
    wastage: null,
    wastagePercentage: null,
    productionRemarks: {
        prodRemarks: null,
        checkedBy: null,
        approvedBy: null,
        approvedDate: null
    },
    QARemarks: {
        QARemark: null,
        checkedBy: null,
        approvedBy: null,
        approvedDate: null
    }
};

module.exports = {
    SALES_CATEGORY,
    CHILD_ITEM_CATEGORY_NAME,
    INK_ITEM_CATEGORY_NAME,
    RAW_MATERIAL_CATEGORIES,
    WIP_INVENTORY_FILTER_FIELDS,
    INPUT_SOURCE,
    COMPANY_TYPE,
    EMPLOYEE_JOINING_LOCATION,
    ASSET_CLASS_NAMES,
    ITEM_CATEGORY_OPTIONS,
    BOOLEAN_VALUES,
    SACObj,
    OTHER_CHARGES_SAC_CODE,
    LABOUR_RATE_MASTER_ARRAY,
    NPD_REVIEW_FIELDS,
    NPD_REVIEW_MAIL_ACTION,
    COST_HEADS,
    SKU_COST_SHEET_DETAILS,
    JOB_CARD_STAGE,
    JOB_ORDER_TYPE,
    STOCK_PREP_UOM,
    INK_MIXING_UOM,
    GOODS_TRANSFER_REQUEST_DEPT,
    INVENTORY_CREATE_OBJ,
    PPIC_STAGES
};
