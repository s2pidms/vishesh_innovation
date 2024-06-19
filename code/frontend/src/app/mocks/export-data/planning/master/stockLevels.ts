import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Stock Levels";
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
        header: "DU Conversion",
        key: "conversionOfUnits",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "orderInfoUOM",
        ...EXCEL_STYLE
    },
    {
        header: "RO Level",
        key: "itemROL",
        ...EXCEL_STYLE
    },
    {
        header: "RO Qty",
        key: "itemAMU",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const STOCK_LEVELS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const STOCK_LEVELS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
