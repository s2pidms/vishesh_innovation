import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Direct Tax Invoice";
let headers: any = [
    {
        header: "Invoice #",
        key: "DTINumber",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Date",
        key: "salesInvoiceDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Value",
        key: "DTIValue",
        ...EXCEL_STYLE
    },
    // {
    //     header: "Customer Category",
    //     key: "salesCategory",
    //     ...EXCEL_STYLE
    // },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    // {
    //     header: "Product Value",
    //     key: "DTITotalAmount",
    //     ...EXCEL_STYLE
    // },

    {
        header: "Status",
        key: "DTIStatus",
        ...EXCEL_STYLE
    }
];
export const DIRECT_TAX_INVOICE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DIRECT_TAX_INVOICE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
