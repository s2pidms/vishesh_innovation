import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Job Work Master";
let headers: any = [
    {
        header: "Job Worker Name",
        key: "jobWorkerName",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_JOB_WORKER_MASTER_ENTRY = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
