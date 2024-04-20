import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Goods Receipt Note (GRN)";
let headers: any = [
    {
        header: "GRN No.",
        key: "GRNNumber",
       ...EXCEL_STYLE
    },
    {
        header: "GRN Dt.",
        key: "GRNDateS",
       ...EXCEL_STYLE
    },
    {
        header: "PO No.",
        key: "PONumber",
       ...EXCEL_STYLE
    },
    {
        header: "PO Date",
        key: "PODate",
       ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplier",
       ...EXCEL_STYLE
    },
    {
        header: "Supplier Inv. #",
        key: "supplierInvoiceRef",
       ...EXCEL_STYLE
    },
    {
        header: "Invoice Dt.",
        key: "supplierInvoiceRefDate",
       ...EXCEL_STYLE
    },
    {
        header: "Location",
        key: "deliveryLocation",
       ...EXCEL_STYLE
    },
    {
        header: "GRN Remark",
        key: "remarks",
       ...EXCEL_STYLE
    },
    {
        header: "GRN Status",
        key: "GRNStatus",
       ...EXCEL_STYLE
    }
];
export const GOODS_RECEIPT_NOTE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GOODS_RECEIPT_NOTE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
