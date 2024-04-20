import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Short PO Closing";
let headers: any = [
    {
        header: "PO Date",
        key: "PODate",
        ...EXCEL_STYLE
    },
    {
        header: "PO #",
        key: "PONumber",
        ...EXCEL_STYLE
    },
    {
        header: "Line #",
        key: "POLineNumber",
        ...EXCEL_STYLE
    },

    {
        header: "Item #",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Item Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "Bal Qty",
        key: "balancedQty",
        ...EXCEL_STYLE
    },
    {
        header: "Bal Value (₹)",
        key: "lineValue",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    }
];
export const SHORT_PO_CLOSING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SHORT_PO_CLOSING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
