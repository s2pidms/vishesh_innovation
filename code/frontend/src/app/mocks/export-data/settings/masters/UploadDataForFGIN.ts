import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid FGIN";
let headers: any = [
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "GSTIN",
        key: "GSTIN",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_FGIN = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
