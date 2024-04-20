import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "FG Inward Entry Summary Report";
let headers: any = [
    {
        header: "Entry #",
        key: "FGINNo",
        ...EXCEL_STYLE
    },
    {
        header: "Entry Dt.",
        key: "FGINDate",
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
        header: "Part No.",
        key: "partNo",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Inward Qty.",
        key: "FGINQuantity",
        ...EXCEL_STYLE
    },
    {
        header: "Batch No.",
        key: "batchNo",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Date",
        key: "manufacturingDate",
        ...EXCEL_STYLE
    }
];

export const FG_INWARD_ENTRY_SUMMARY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FG_INWARD_ENTRY_SUMMARY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
