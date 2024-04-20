import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Cancel PO";
let headers: any = [
    {
        header: "PO #",
        key: "PONumber",
        ...EXCEL_STYLE
    },
    {
        header: "PO Date",
        key: "PODateS",
        ...EXCEL_STYLE
    },
    {
        header: "Purchase Category",
        key: "purchaseCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "PO Value",
        key: "netPOValue",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "POStatus",
        ...EXCEL_STYLE
    }
];
export const CANCEL_PO_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CANCEL_PO_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
