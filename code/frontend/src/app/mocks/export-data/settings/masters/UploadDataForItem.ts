import {EXCEL_STYLE} from "../../excelStyle";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Upload Data";
let headers: any = [
    {
        header: "Item Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "hsn",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_ITEM_INVENTORY = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
