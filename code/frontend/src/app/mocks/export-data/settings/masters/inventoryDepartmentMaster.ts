import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Inventory Department Master";
let headers: any = [
    {
        header: "Department Name",
        key: "departmentName",
        ...EXCEL_STYLE
    },
    {
        header: "Department Type",
        key: "departmentType",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const INVENTORY_DEPARTMENT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const INVENTORY_DEPARTMENT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
