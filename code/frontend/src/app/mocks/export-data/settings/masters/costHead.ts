import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Cost Head";
let headers: any = [
    {
        header: "Order",
        key: "order",
        ...EXCEL_STYLE
    },
    {
        header: "Cost Head",
        key: "costHead",
        ...EXCEL_STYLE
    },
    {
        header: "Display Name",
        key: "displayName",
        ...EXCEL_STYLE
    },
    {
        header: "Category",
        key: "category",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const COST_HEAD_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const COST_HEAD_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
