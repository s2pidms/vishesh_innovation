import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Debit Note";
let headers: any = [
    {
        header: "DN No.",
        key: "DNNumber",
        ...EXCEL_STYLE
    },
    {
        header: "DN Date",
        key: "DNDateS",
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
        header: "Invoice No.",
        key: "invoiceNo",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Date",
        key: "invoiceDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "DN Net Value",
        key: "netDNValue",
        ...EXCEL_STYLE
    },
    {
        header: "Reason For Debit Note",
        key: "reasonForDN",
        ...EXCEL_STYLE
    },
    {
        header: "DN Status",
        key: "DNStatus",
        ...EXCEL_STYLE
    }
];
export const DEBIT_NOTE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DEBIT_NOTE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
