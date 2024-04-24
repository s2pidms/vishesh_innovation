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
        header: "UoM",
        key: "orderInfoUOM",
        ...EXCEL_STYLE
    },
    {
        header: "Unit Conversion",
        key: "conversionOfUnits",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "hsn",
        ...EXCEL_STYLE
    },
    {
        header: "RO Level",
        key: "itemROL",
        ...EXCEL_STYLE
    },
    {
        header: "RO Qty",
        key: "itemAMU",
        ...EXCEL_STYLE
    },
    {
        header: "Technical Data Sheet",
        key: "tdsFileUrl",
        ...EXCEL_STYLE
    },
    {
        header: "Material Safety Data Sheet",
        key: "msdsFileUrl",
        ...EXCEL_STYLE
    },
    {
        header: "Shelf Life [Months]",
        key: "shelfLife",
        ...EXCEL_STYLE
    },
    {
        header: "Storage Temperature [°C]",
        key: "storageTemp",
        ...EXCEL_STYLE
    },
    {
        header: "Storage Humidity [RH]",
        key: "storageHumidity",
        ...EXCEL_STYLE
    },
    {
        header: "Special Storage Instruction",
        key: "specialStorageInstruction",
        ...EXCEL_STYLE
    },
    {
        header: "QC Level",
        key: "QCLevels",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Item Description",
        key: "supplierDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Item Code",
        key: "spin",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "supplierCurrency",
        ...EXCEL_STYLE
    },
    {
        header: "Purchase Cost [Exclusive of GST] ",
        key: "stdCostUom1",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "isActive",
        ...EXCEL_STYLE
    }
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
