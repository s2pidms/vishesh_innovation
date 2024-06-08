import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid SAC Master";
let headers: any = [
    {
        header: "Description of Service",
        key: "serviceDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_SALES_SAC_MASTER = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
