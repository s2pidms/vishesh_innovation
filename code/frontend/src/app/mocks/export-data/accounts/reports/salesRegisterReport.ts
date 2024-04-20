import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37];
let title = "Sales Register Report ";
let headers: any = [
    {
        header: "Tax Invoice No.",
        key: "salesInvoiceNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Date",
        key: "salesInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer GSTIN",
        key: "GSTIN",
        ...EXCEL_STYLE
    },
    {
        header: "RCM",
        key: "RCM",
        ...EXCEL_STYLE
    },
    {
        header: "Taxable Amt.",
        key: "totalTaxableAmt",
        ...EXCEL_STYLE
    },
    {
        header: "SGST Amt.",
        key: "salesInvoiceTotalSGSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "CGST Amt.",
        key: "salesInvoiceTotalCGSTAmount",
        ...EXCEL_STYLE
    },

    {
        header: "IGST Amt.",
        key: "salesInvoiceTotalIGSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Total Amt.",
        key: "salesInvoiceTotalAmountWithTax",
        ...EXCEL_STYLE
    },
    {
        header: "Round Off",
        key: "roundedOff",
        ...EXCEL_STYLE
    },
    {
        header: "Net. Amt.",
        key: "netAmount",
        ...EXCEL_STYLE
    }
];
export const SALES_REGISTER_REPORT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALES_REGISTER_REPORT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
