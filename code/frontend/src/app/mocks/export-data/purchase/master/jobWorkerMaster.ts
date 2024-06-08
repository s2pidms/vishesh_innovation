import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Job Worker Master";
let headers: any = [
    {
        header: "JW Code",
        key: "jobWorkerCode",
        ...EXCEL_STYLE
    },
    {
        header: "Job Worker Name",
        key: "jobWorkerName",
        ...EXCEL_STYLE
    },
    {
        header: "Country",
        key: "country",
        ...EXCEL_STYLE
    },
    {
        header: "State/Province",
        key: "state",
        ...EXCEL_STYLE
    },
    {
        header: "GSTIN",
        key: "GSTINNo",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const JOB_WORKER_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const JOB_WORKER_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
