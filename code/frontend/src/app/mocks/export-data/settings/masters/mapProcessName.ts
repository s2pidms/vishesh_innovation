import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Map Process Name";
let headers: any = [
    {
        header: "Process ID",
        key: "processId",
        ...EXCEL_STYLE
    },
    {
        header: "Process Name",
        key: "processName",
        ...EXCEL_STYLE
    },
    {
        header: "Process Original Name",
        key: "processOriginalName",
        ...EXCEL_STYLE
    }
];
export const MAP_PROCESS_NAME_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAP_PROCESS_NAME_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
