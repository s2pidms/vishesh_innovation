import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Book Sales Order";
let headers: any = [
    {
        header: "SO No.",
        key: "SONumber",
        ...EXCEL_STYLE
    },
    {
        header: "SO Date",
        key: "SODateS",
        ...EXCEL_STYLE
    },
    {
        header: "Bill From Location",
        key: "billFromLocation",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Category",
        key: "salesCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "PO Date.",
        key: "PODate",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "SO Type",
        key: "SOType",
        ...EXCEL_STYLE
    },

    {
        header: "SO Value",
        key: "SOTotalAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "SOStatus",
        ...EXCEL_STYLE
    }
];
export const BOOK_SALES_ORDER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const BOOK_SALES_ORDER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
