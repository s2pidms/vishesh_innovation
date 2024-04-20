import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*"];
let title = "ProcessNameMaster Report";
let headers: any = [
    {
        header: "Process Code",
        key: "processCode",
        ...EXCEL_STYLE
    },
    {
        header: "Process Name",
        key: "processName",
        ...EXCEL_STYLE
    },
    {
        header: "Order",
        key: "order",
        ...EXCEL_STYLE
    },

    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const PROCESS_NAME_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROCESS_NAME_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
