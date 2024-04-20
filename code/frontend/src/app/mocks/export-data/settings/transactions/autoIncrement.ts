import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "AutoIncrement Report";
let headers: any = [
    {
        header: "Module Name",
        key: "moduleName",
        ...EXCEL_STYLE
    },
    {
        header: "Module",
        key: "module",
        ...EXCEL_STYLE
    },
    {
        header: "Module Prefix",
        key: "modulePrefix",
        ...EXCEL_STYLE
    },
    {
        header: "Auto Increment Value",
        key: "autoIncrementValue",
        ...EXCEL_STYLE
    },
    {
        header: "Digit",
        key: "digit",
        ...EXCEL_STYLE
    }
];
export const AUTO_INCREMENT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const AUTO_INCREMENT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
