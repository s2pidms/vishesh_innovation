import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", , "*"];
let title = "Purchase Register Entry";
let headers: any = [
    {
        header: "PE No.",
        key: "PEntryNo",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Tax Inv No.",
        key: "taxInvoiceNo",
        ...EXCEL_STYLE
    },
    {
        header: "Tax Inv Dt.",
        key: "taxInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Ccy",
        key: "supplierCurrency",
        ...EXCEL_STYLE
    },
    {
        header: "Total Amount",
        key: "totalAmt",
        ...EXCEL_STYLE
    },
    {
        header: "TCS Amount",
        key: "TCSAmt",
        ...EXCEL_STYLE
    },
    {
        header: "Round off",
        key: "roundOffAmt",
        ...EXCEL_STYLE
    },
    {
        header: "Net Amount",
        key: "roundOffTotalAmt",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const PURCHASE_REGISTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PURCHASE_REGISTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
