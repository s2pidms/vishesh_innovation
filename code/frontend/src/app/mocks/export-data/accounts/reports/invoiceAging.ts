import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Invoice Aging Report";
let headers: any = [
    {
        header: "Customer",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Project",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Date",
        key: "serviceInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Amount",
        key: "totalValue",
        ...EXCEL_STYLE
    },
    {
        header: "GST Amount",
        key: "GSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Total Invoice Amount",
        key: "totalAmountWithTax",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Age",
        key: "invoiceAge",
        ...EXCEL_STYLE
    }
];

export const INVOICE_AGING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const INVOICE_AGING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
