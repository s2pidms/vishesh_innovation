import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "User Master";
let headers: any =  [
    {
        header: "User Code",
        key: "userCode",
        ...EXCEL_STYLE
    },
    {
        header: "Login Id",
        key: "email",
        ...EXCEL_STYLE
    },
    {
        header: "Name",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "User Type",
        key: "userType",
        ...EXCEL_STYLE
    },
    {
        header: "Department",
        key: "departmentName",
        ...EXCEL_STYLE
    },
    {
        header: "Role  ",
        key: "roleName",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "isActive",
        ...EXCEL_STYLE
    }
]
export const USER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const USER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
