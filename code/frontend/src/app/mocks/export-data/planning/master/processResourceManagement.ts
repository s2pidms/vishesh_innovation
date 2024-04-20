import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Process Resource Management";
let headers: any = [
    {
        header: "Process Name",
        key: "processName",
        ...EXCEL_STYLE
    },
    {
        header: "Work Centre/Machine Name",
        key: "machineName",
        ...EXCEL_STYLE
    },
    {
        header: "# of Manpower",
        key: "noOfManpower",
        ...EXCEL_STYLE
    },
    {
        header: "Output/hr",
        key: "outputPerHr",
        ...EXCEL_STYLE
    },
    {
        header: "Labour Cost/hr",
        key: "labourCostPerHr",
        ...EXCEL_STYLE
    },
    {
        header: "Power consumption cost/hr",
        key: "powerConsumptionPerHr",
        ...EXCEL_STYLE
    }
];
export const PROCESS_RESOURCE_MANAGEMENT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROCESS_RESOURCE_MANAGEMENT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
