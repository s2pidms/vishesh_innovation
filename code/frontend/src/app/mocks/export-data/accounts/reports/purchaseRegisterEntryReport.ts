import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
let title = "Purchase Register Entry";
let headers: any = [
    {
        header: "P/Entry No.",
        key: "PEntryNo",
        ...EXCEL_STYLE
    },
    {
        header: "P/Entry Date",
        key: "PEntryDate",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Invoice No.",
        key: "taxInvoiceNo",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Date",
        key: "taxInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Taxable Amt.",
        key: "taxableAmt",
        ...EXCEL_STYLE
    },
    {
        header: "SGST Amt.",
        key: "SGSTAmt",
        ...EXCEL_STYLE
    },
    {
        header: "CGST Amt.",
        key: "CGSTAmt",
        ...EXCEL_STYLE
    },
    {
        header: "IGST Amt.",
        key: "IGSTAmt",
        ...EXCEL_STYLE
    },
    {
        header: "Total Amt.",
        key: "totalAmt",
        ...EXCEL_STYLE
    },
    {
        header: "TCS Amt.",
        key: "TCSAmt",
        ...EXCEL_STYLE
    },
    {
        header: "Round off Amt.",
        key: "roundOffAmt",
        ...EXCEL_STYLE
    },
    {
        header: "Net Amt.",
        key: "roundOffTotalAmt",
        ...EXCEL_STYLE
    }
];

export const PURCHASE_REGISTER_ENTRY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PURCHASE_REGISTER_ENTRY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
