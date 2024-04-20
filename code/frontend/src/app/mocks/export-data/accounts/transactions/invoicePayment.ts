import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Invoice Payment";
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
        header: "Outstanding Amount",
        key: "balanceAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Service #",
        key: "serviceInvoiceNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Date",
        key: "serviceInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Amount (W/O GST)",
        key: "totalValue",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Amount (With GST)",
        key: "totalAmountWithTax",
        ...EXCEL_STYLE
    },
    {
        header: "Received Amount",
        key: "receivedAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Received Date",
        key: "receivedDate",
        ...EXCEL_STYLE
    }
];
export const INVOICE_PAYMENT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const INVOICE_PAYMENT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
