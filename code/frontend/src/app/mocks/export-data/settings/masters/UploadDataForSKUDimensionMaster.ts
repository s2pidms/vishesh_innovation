import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid SKUDimension Master";
let headers: any = [
    {
        header: "SKU No.",
        key: "SKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_SKU_DIMENSION_MASTER = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
