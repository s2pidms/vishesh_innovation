import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid PPIC Inventory Records";
let headers: any = [
    {
        header: "Supplier Code",
        key: "supplierCode",
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
export const UPLOAD_DATA_FOR_PPIC_INVENTORY = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
