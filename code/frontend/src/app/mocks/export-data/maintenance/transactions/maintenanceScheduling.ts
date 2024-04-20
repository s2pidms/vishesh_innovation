import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Maintenance Scheduling";
let headers: any = [
    {
        header: "Schedule Code",
        key: "scheduleCode",
        ...EXCEL_STYLE
    },
    {
        header: "Schedule Name",
        key: "scheduleName",
        ...EXCEL_STYLE
    },
    {
        header: "Equipment Name",
        key: "equipment",
        ...EXCEL_STYLE
    },
    {
        header: "Maintenance Task Name",
        key: "maintenanceTask",
        ...EXCEL_STYLE
    },
    {
        header: "Frequency",
        key: "frequency",
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
        header: "Description",
        key: "description",
        ...EXCEL_STYLE
    }
];
export const MAINTENANCE_SCHEDULING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAINTENANCE_SCHEDULING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
