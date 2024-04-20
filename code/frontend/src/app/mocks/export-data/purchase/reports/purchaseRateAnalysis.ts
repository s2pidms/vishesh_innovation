import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Purchase Rate Analysis Report";
let headers: any = [
    {
        header: "Item Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Item Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "Item Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Item Std. Rate",
        key: "standardRate",
        ...EXCEL_STYLE
    },
    {
        header: "Min. Rate",
        key: "PORateMin",
        ...EXCEL_STYLE
    },
    {
        header: "Max. Rate",
        key: "PORateMax",
        ...EXCEL_STYLE
    },
    {
        header: "Avg Rate",
        key: "avgRate",
        ...EXCEL_STYLE
    },
    {
        header: "Last Purchase Rate",
        key: "lastPurchaseRate",
        ...EXCEL_STYLE
    }
];

export const PURCHASE_RATE_ANALYSIS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PURCHASE_RATE_ANALYSIS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
