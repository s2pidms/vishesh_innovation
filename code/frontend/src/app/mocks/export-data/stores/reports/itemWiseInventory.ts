import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Item Wise Inventory Report";
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
        header: " Item Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Quantity",
        key: "closedIRQty",
        ...EXCEL_STYLE
    },
    {
        header: "Unit Rate",
        key: "purchaseRatINR",
        ...EXCEL_STYLE
    },
    {
        header: "Line Value",
        key: "lineValue",
        ...EXCEL_STYLE
    }
];

export const ITEM_WISE_INVENTORY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ITEM_WISE_INVENTORY_REPORT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
