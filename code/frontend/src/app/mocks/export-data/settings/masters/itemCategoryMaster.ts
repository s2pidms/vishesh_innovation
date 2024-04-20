import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Item Category Master";
let headers: any = [
    {
        header: "Category",
        key: "category",
        ...EXCEL_STYLE
    },
    {
        header: "Category Prefix",
        key: "prefix",
        ...EXCEL_STYLE
    },
    {
        header: "Digit",
        key: "digit",
        ...EXCEL_STYLE
    },
    {
        header: "Auto Increment No",
        key: "nextAutoIncrement",
        ...EXCEL_STYLE
    },
    {
        header: "Active",
        key: "categoryStatus",
        ...EXCEL_STYLE
    }
];
export const ITEM_CATEGORY_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ITEM_CATEGORY_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
