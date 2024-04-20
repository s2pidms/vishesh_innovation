import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Task Master";
let headers: any = [
    {
        header: "Task Code",
        key: "taskCode",
        ...EXCEL_STYLE
    },
    {
        header: "Task Name",
        key: "taskName",
        ...EXCEL_STYLE
    },
    {
        header: "Task Description",
        key: "taskDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Equipment",
        key: "equipment",
        ...EXCEL_STYLE
    },
    {
        header: "Priority",
        key: "priority",
        ...EXCEL_STYLE
    },
    {
        header: "Frequency",
        key: "frequency",
        ...EXCEL_STYLE
    },
    {
        header: "Estimated Time (Hr)",
        key: "estimatedTime",
        ...EXCEL_STYLE
    },
    {
        header: "Task Category",
        key: "taskCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Maintenance Checklist",
        key: "maintenanceChecklist",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "taskStatus",
        ...EXCEL_STYLE
    }
];
export const MAINTENANCE_TASK_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAINTENANCE_TASK_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
