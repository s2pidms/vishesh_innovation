import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*"
];
let title = "Item Master";
let headers: any = [
    {
        header: "Item Category",
        key: "itemType",
        ...EXCEL_STYLE
    },
    {
        header: "Item Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Item Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "Item Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Unit of Measurement",
        key: "orderInfoUOM",
        ...EXCEL_STYLE
    },
    {
        header: "U1",
        key: "primaryUnit",
        ...EXCEL_STYLE
    },
    {
        header: "U2",
        key: "secondaryUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Dim/Width",
        key: "dimWidth",
        ...EXCEL_STYLE
    },
    {
        header: "Width UoM",
        key: "widthUnitUOM",
        ...EXCEL_STYLE
    },
    {
        header: "Dim/Length",
        key: "dimLength",
        ...EXCEL_STYLE
    },
    {
        header: "Length UoM",
        key: "lengthUnitUOM",
        ...EXCEL_STYLE
    },
    {
        header: "DU Conversion",
        key: "conversionOfUnits",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "hsn",
        ...EXCEL_STYLE
    },
    {
        header: "S/Life (M)",
        key: "shelfLife",
        ...EXCEL_STYLE
    },
    {
        header: "QC Level ",
        key: "QCLevels",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Item Code",
        key: "spin",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Item Description",
        key: "supplierDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Ccy",
        key: "supplierCurrency",
        ...EXCEL_STYLE
    },
    {
        header: "U1",
        key: "uom1",
        ...EXCEL_STYLE
    },
    {
        header: "U1 P/Cost",
        key: "stdCostUom1",
        ...EXCEL_STYLE
    },
    {
        header: "U2",
        key: "uom2",
        ...EXCEL_STYLE
    },
    {
        header: "U2 P/Cost",
        key: "stdCostUom2",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "isActive",
        ...EXCEL_STYLE
    }

    // {
    //     header: "UoM",
    //     key: "orderInfoUOM",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "RO Level",
    //     key: "itemROL",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "RO Qty",
    //     key: "itemAMU",
    //     ...EXCEL_STYLE
    // },

    // {
    //     header: "Technical Data Sheet",
    //     key: "tdsFileUrl",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Material Safety Data Sheet",
    //     key: "msdsFileUrl",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Storage Temperature [°C]",
    //     key: "storageTemp",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Storage Humidity [RH]",
    //     key: "storageHumidity",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Special Storage Instruction",
    //     key: "specialStorageInstruction",
    //     ...EXCEL_STYLE
    // },

    // {
    //     header: "Unit1",
    //     key: "uom1",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "PurchaseCost",
    //     key: "stdCostUom1",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Unit2",
    //     key: "uom2",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "PurchaseCost",
    //     key: "stdCostUom2",
    //     ...EXCEL_STYLE
    // }
    // {
    //     header: "Currency",
    //     key: "supplierCurrency",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Purchase Cost [Exclusive of GST] ",
    //     key: "stdCostUom1",
    //     ...EXCEL_STYLE
    // },
];
export const ITEM_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ITEM_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
