import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid SKU Records";
let headers: any = [
    {
        header: "SKU Name",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_VALIDATE_SKU = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
