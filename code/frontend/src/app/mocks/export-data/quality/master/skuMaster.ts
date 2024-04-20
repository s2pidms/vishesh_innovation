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
    "*"
];
let title = "SKU Master";
let headers: any = [
    {
        header: "SKU Stage",
        key: "SKUStage",
        ...EXCEL_STYLE
    },
    {
        header: "Product Category",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "hsn",
        ...EXCEL_STYLE
    },
    {
        header: "SKU No.",
        key: "SKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Name",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Description",
        key: "SKUDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "primaryUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Drawing/Artwork No.",
        key: "artWorkNo",
        ...EXCEL_STYLE
    },
    {
        header: "Shelf Life [Months]",
        key: "shelfLife",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer PartNo",
        key: "customerPartNo",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "customerCurrency",
        ...EXCEL_STYLE
    },
    {
        header: "Selling Price [Exclusive of GST]",
        key: "standardSellingRate",
        ...EXCEL_STYLE
    },
    {
        header: "Avg. Monthly off-take",
        key: "monthlyOffTake",
        ...EXCEL_STYLE
    },
    {
        header: "PO No.",
        key: "PONo",
        ...EXCEL_STYLE
    },
    {
        header: "PO Date",
        key: "PODate",
        ...EXCEL_STYLE
    },
    {
        header: "PO Valid Date",
        key: "POValidDate",
        ...EXCEL_STYLE
    }
];
export const SKU_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SKU_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
