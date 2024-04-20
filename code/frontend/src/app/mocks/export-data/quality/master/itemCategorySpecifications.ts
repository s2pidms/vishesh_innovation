import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Item Category Specifications";
let headers: any = [
    {
        header: "Item Category",
        key: "itemCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Application",
        key: "application",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const ITEM_CATEGORY_SPECIFICATIONS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ITEM_CATEGORY_SPECIFICATIONS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
