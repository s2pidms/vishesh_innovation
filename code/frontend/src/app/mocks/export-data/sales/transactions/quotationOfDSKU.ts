import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Quotation Of D-SKU";
let headers: any = [
    {
        header: "Qtn. No.",
        key: "quotationNo",
        ...EXCEL_STYLE
    },
    {
        header: "Rev No.",
        key: "revNo",
        ...EXCEL_STYLE
    },
    {
        header: "Qtn. Date",
        key: "quotationDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer/Prospect Category",
        key: "customerCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Customer/Prospect Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Ccy",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const QUOTATION_DSKU_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const QUOTATION_DSKU_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
