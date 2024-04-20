import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Process Master";
let headers: any = [
    {
        header: "Process ID",
        key: "processId",
        ...EXCEL_STYLE
    },
    {
        header: "Process Name",
        key: "processName",
        ...EXCEL_STYLE
    },
    {
        header: "Source",
        key: "sourceOfManufacturing",
        ...EXCEL_STYLE
    },
    {
        header: "Primary Assets/Allocation",
        key: "primaryAssetAllocation",
        ...EXCEL_STYLE
    },
    {
        header: "Std.Output/H",
        key: "unitProcessOutput",
        ...EXCEL_STYLE
    },
    {
        header: "Labour Rate/Hr",
        key: "totalRatePerHr",
        ...EXCEL_STYLE
    },
    {
        header: "Asset Rate/Hr",
        key: "totalAllocatedAssetCostPerHr",
        ...EXCEL_STYLE
    }
];
export const PROCESS_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROCESS_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};