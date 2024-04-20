import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Role Master";
let headers: any = [
    {
        header: "Role ID",
        key: "roleCode",
        ...EXCEL_STYLE
    },
    {
        header: "Role name",
        key: "roleName",
        ...EXCEL_STYLE
    },
    {
        header: "Created Date",
        key: "createdAtS",
        ...EXCEL_STYLE
    }
];
export const ROLE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ROLE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
