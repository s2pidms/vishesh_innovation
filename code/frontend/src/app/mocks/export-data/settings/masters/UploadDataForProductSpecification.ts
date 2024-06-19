import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Product Specification Records";
let headers: any = [
    {
        header: "Product Category",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Code",
        key: "SKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_PRODUCT_SPECIFICATION = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
