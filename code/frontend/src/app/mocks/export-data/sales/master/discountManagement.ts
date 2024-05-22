import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*"];
let title = "Discount Management";
let headers: any = [
    {
        header: "Discount No.",
        key: "discountNo",
        ...EXCEL_STYLE
    },
    {
        header: "Discount Description",
        key: "discountDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Category",
        key: "customerCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Global Discount %",
        key: "globalDiscount",
        ...EXCEL_STYLE
    }
];
export const DISCOUNT_MANAGEMENT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DISCOUNT_MANAGEMENT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
