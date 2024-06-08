import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Employee Master";
let headers: any = [
    {
        header: "Emp First Name",
        key: "empFirstName",
        ...EXCEL_STYLE
    },
    {
        header: "Emp Last Name",
        key: "empLastName",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_EMPLOYEE_MASTER = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
