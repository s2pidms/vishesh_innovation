import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Task Scheduling";
let headers: any = [
    {
        header: "Schedule Code",
        key: "scheduleCode",
        ...EXCEL_STYLE
    },
    {
        header: "Maintenance Task Code",
        key: "maintenanceTaskCode",
        ...EXCEL_STYLE
    },
    {
        header: "Schedule Date",
        key: "scheduleDate",
        ...EXCEL_STYLE
    },
    {
        header: "Equipment Name",
        key: "equipmentName",
        ...EXCEL_STYLE
    },
    {
        header: "Frequency",
        key: "frequency",
        ...EXCEL_STYLE
    },
    {
        header: "Priority",
        key: "priority",
        ...EXCEL_STYLE
    },
    {
        header: "Start Date",
        key: "startDateS",
        ...EXCEL_STYLE
    },
    {
        header: "End Date",
        key: "endDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const TASK_SCHEDULING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TASK_SCHEDULING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
