import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Map Process And Machine";
let headers: any = [
    {
        header: "Map Code",
        key: "mapCode",
        ...EXCEL_STYLE
    },
    {
        header: "Process Name",
        key: "processName",
        ...EXCEL_STYLE
    },
    {
        header: "Total # of Machines",
        key: "noOfMachines",
        ...EXCEL_STYLE
    }
];
export const MAP_PROCESS_AND_MACHINE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAP_PROCESS_AND_MACHINE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
