import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [63, 63, 63, 63, 63, 63, 63, 63];
let title = "Purchase Order";
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
        header: "Taxable Amount",
        key: "netPOValue",
        ...EXCEL_STYLE
    },
    {
        header: "GST Amount",
        key: "GSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Total PO Value",
        key: "totalAmountWithTax",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "POStatus",
        ...EXCEL_STYLE
    }
];

export const PURCHASE_ORDER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PURCHASE_ORDER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
