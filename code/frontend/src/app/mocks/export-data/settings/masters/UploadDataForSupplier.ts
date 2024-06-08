import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Supplier Records  ";
let headers: any = [
    {
        header: "Supplier Name",
        key: "supplierName",
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
export const UPLOAD_DATA_FOR_SUPPLIER_INVENTORY = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
