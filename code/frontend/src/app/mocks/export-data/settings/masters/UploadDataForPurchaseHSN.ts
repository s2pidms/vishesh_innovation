import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid HSN Master";
let headers: any = [
    {
        header: "Description of Goods",
        key: "goodsDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_PURCHASE_HSN_MASTER = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
