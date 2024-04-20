import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Product Master";
let headers: any = [
    {
        header: "Product Code",
        key: "productMasterNo",
        ...EXCEL_STYLE
    },
    {
        header: "Product Category",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Shoulder",
        key: "shoulderType",
        ...EXCEL_STYLE
    },
    {
        header: "Dia. mm",
        key: "capDia",
        ...EXCEL_STYLE
    },
    {
        header: "Height mm",
        key: "capHeight",
        ...EXCEL_STYLE
    },
    {
        header: "Finish",
        key: "capFinish",
        ...EXCEL_STYLE
    },
    {
        header: "Thread",
        key: "threadType",
        ...EXCEL_STYLE
    },
    {
        header: "Orifice mm",
        key: "orifice",
        ...EXCEL_STYLE
    },
    {
        header: "Weight g",
        key: "weight",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const SALES_PRODUCT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALES_PRODUCT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
