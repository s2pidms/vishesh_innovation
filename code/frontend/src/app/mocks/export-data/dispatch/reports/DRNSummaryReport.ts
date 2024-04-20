import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "DRN Summary Report";
let headers: any = [
    {
        header: "DRN No.",
        key: "DRNNumber",
        ...EXCEL_STYLE
    },
    {
        header: "DRN Date",
        key: "DRNDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "SO No.",
        key: "SONumber",
        ...EXCEL_STYLE
    },
    {
        header: "SO Date",
        key: "SODate",
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
        header: "UOM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Dispatch Quantity",
        key: "dispatchQty",
        ...EXCEL_STYLE
    }
];

export const DRN_SUMMARY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DRN_SUMMARY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
