import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Generate Work Order";
let headers: any = [
    {
        header: "Work Order Code",
        key: "workOrderCode",
        ...EXCEL_STYLE
    },
    {
        header: "Work Order Execution Date",
        key: "workOrderExecutionDate",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "description",
        ...EXCEL_STYLE
    },
    {
        header: "Schedule Code",
        key: "scheduleCode",
        ...EXCEL_STYLE
    },
    {
        header: "Equipment Name",
        key: "equipmentName",
        ...EXCEL_STYLE
    },
    {
        header: "Technician Code",
        key: "technicianCode",
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
        header: "Materials",
        key: "materials",
        ...EXCEL_STYLE
    },
    {
        header: "Maintenance Cost",
        key: "maintenanceCost",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const GENERATE_WORK_ORDER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GENERATE_WORK_ORDER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
