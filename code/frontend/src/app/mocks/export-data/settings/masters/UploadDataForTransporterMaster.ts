import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Transporter Master";
let headers: any = [
    {
        header: "Transporter Name",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_TRANSPORTER_MASTER_ENTRY = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
