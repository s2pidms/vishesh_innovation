import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*"];
let title = "Payment Terms";
let headers: any = [
    {
        header: "Payment Terms Code",
        key: "paymentTermCode",
        ...EXCEL_STYLE
    },
    {
        header: "Order Code",
        key: "order",
        ...EXCEL_STYLE
    },
    {
        header: "Payment Description",
        key: "paymentDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const PAYMENT_TERMS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PAYMENT_TERMS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
