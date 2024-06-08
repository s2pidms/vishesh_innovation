import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Asset Master";
let headers: any = [
    {
        header: "Asset Name",
        key: "assetName",
        ...EXCEL_STYLE
    },
    {
        header: "Asset Description",
        key: "assetDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_ASSET_MASTER = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
