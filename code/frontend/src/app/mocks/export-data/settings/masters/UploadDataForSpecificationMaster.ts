import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Specification Master";
let headers: any = [
    {
        header: "Inspection Parameter",
        key: "characteristic",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_SPECIFICATION_MASTER = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
