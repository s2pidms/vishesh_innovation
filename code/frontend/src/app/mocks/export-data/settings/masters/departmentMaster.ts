import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Department Master";
let headers: any = [
    {
        header: "Department Code",
        key: "departmentCode",
        ...EXCEL_STYLE
    },
    {
        header: "Department Name",
        key: "departmentName",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "description",
        ...EXCEL_STYLE
    },
    {
        header: " Department Head",
        key: "departmentHead",
        ...EXCEL_STYLE
    },
    {
        header: "Total Employees",
        key: "totalEmployee",
        ...EXCEL_STYLE
    },
    {
        header: "Contact No",
        key: "contactNo",
        ...EXCEL_STYLE
    },
    {
        header: "Email Address",
        key: "email",
        ...EXCEL_STYLE
    },
    {
        header: "Office Location",
        key: "officeLocation",
        ...EXCEL_STYLE
    }
]
export const DEPARTMENT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DEPARTMENT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
