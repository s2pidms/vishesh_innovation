import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid RM Specification Records";
let headers: any = [
    {
        header: "Item Category",
        key: "itemCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Item Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_RM_SPECIFICATION = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
