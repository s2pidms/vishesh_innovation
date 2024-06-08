import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Customer Records";
let headers: any = [
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "GSTIN",
        key: "supplierGST",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_CUSTOMER_INVENTORY = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
