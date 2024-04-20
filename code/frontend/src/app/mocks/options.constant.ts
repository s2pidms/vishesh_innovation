export const CONSTANT = {
    productCategory: ["Standard", "New Opportunity"]
};
export const COST_SHEET_REPORT_NAME = {
    costSheetBySKU: "Cost Sheet by SKU",
    costSheetByProductCategory: "Cost Sheet by Product Category",
    getAllReportName: function () {
        return [
            {label: "Cost Sheet by SKU", value: "Cost Sheet by SKU"},
            {label: "Cost Sheet by Product Category", value: "Cost Sheet by Product Category"}
        ];
    }
};
export const DSKU_COST_SHEET_REPORT_NAME = {
    costSheetByDSKU: "Cost Sheet by D-SKU",
    costSheetByProductCategory: "Cost Sheet by Product Category",
    getAllReportName: function () {
        return [
            {label: "Cost Sheet by D-SKU", value: "Cost Sheet by D-SKU"},
            {label: "Cost Sheet by Product Category", value: "Cost Sheet by Product Category"}
        ];
    }
};

export const COST_HEAD_TOOLTIP = {
    Rent: ["+ Factory Rent", "+ Machine Rent (if any)"],
    "Indirect Salaries & benefits": [
        "+ Salaries of Permanent Staff",
        "+ Director's Remuneration",
        "+ Staff Welfare + Benefits"
    ],
    Insurance: [
        "+ Insurance of Premises",
        "+ Insurance of Employees",
        "+ Insurance of Stock",
        "+ Insurance of Machines"
    ],
    "Maintenance & Repairs": ["+ Preventive Maintenance cost", "+ Breakdown maintenance", "+ AMC", "+ General repairs"],
    "Consumables & Spares": ["+ Indirect consumables", "+ Engg. spares"],
    Electricity: ["+ Electricity other than machine power cost", "+ Office electricity cost"],
    Utility: ["+ Water", "+ Gas/Fuel", "+ Waste Disposal", "+ Telephone/Mobile", "+ Internet"],
    Marketing: [
        "+ Advertising ",
        "+ Promotion",
        "+ Product Development",
        "+ Corporate Gifts",
        "+ Traveling Expenses",
        "+ Food & Entertainment"
    ],
    "Sales & Distribution": [
        "+ Outward Freight",
        "+ Salaries of Sales staff",
        "+ Commission on sales",
        "+ Premium Packaging",
        "+ Premium Freight"
    ],
    "Admin & Other": [
        "+ Licenses & permits",
        "+ Office supplies",
        "+ Housekeeping",
        "+ Training & Development",
        "+ Business Conference",
        "+ Miscellaneous"
    ]
};

export const GENERATE_EXPORT_E_iNVOICE_SUP_TYPE = [
    {label: "Export with Payment", value: "EXPWP"},
    {label: "Export without payment", value: "EXPWOP"}
];
export const ITEM_MASTER_QC_LEVELS = [
    {label: "L1", value: "L1"},
    {label: "L2", value: "L2"},
    {label: "L3", value: "L3"}
];
