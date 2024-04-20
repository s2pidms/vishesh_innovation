import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [30, 50, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23];
let title = "Item Consumption Report";
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
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Apr",
        key: "apr",
        ...EXCEL_STYLE
    },
    {
        header: "May",
        key: "may",
        ...EXCEL_STYLE
    },
    {
        header: "Jun",
        key: "jun",
        ...EXCEL_STYLE
    },
    {
        header: "Jul",
        key: "jul",
        ...EXCEL_STYLE
    },
    {
        header: "Aug",
        key: "aug",
        ...EXCEL_STYLE
    },
    {
        header: "Sep",
        key: "sep",
        ...EXCEL_STYLE
    },
    {
        header: "Oct",
        key: "oct",
        ...EXCEL_STYLE
    },
    {
        header: "Nov",
        key: "nov",
        ...EXCEL_STYLE
    },
    {
        header: "Dec",
        key: "dec",
        ...EXCEL_STYLE
    },
    {
        header: "Jan",
        key: "jan",
        ...EXCEL_STYLE
    },
    {
        header: "Feb",
        key: "feb",
        ...EXCEL_STYLE
    },
    {
        header: "Mar",
        key: "mar",
        ...EXCEL_STYLE
    },
    {
        header: "Avg",
        key: "avg",
        ...EXCEL_STYLE
    },
    {
        header: "Total",
        key: "total",
        ...EXCEL_STYLE
    }
];
export const ITEM_CONSUMPTION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ITEM_CONSUMPTION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
