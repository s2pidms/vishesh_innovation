import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Job Work Item Records";
let headers: any = [
    {
        header: "Job Work Item Name",
        key: "jobWorkItemName",
        ...EXCEL_STYLE
    },
    {
        header: "Job Work Item Description",
        key: "jobWorkItemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_JOB_WORK_ITEM_MASTER = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
