import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Purchase Register Entry";
let headers: any = [
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_PURCHASE_REGISTER_ENTRY = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
