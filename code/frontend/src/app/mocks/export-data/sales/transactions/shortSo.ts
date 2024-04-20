import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Short SO Closing";
let headers: any = [
    {
        header: "SO Date",
        key: "SODate",
        ...EXCEL_STYLE
    },
    {
        header: "SO #",
        key: "SONumber",
        ...EXCEL_STYLE
    },
    {
        header: "Line #",
        key: "SOLineNumber",
        ...EXCEL_STYLE
    },
    {
        header: "SKU #",
        key: "SKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Name",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Description",
        key: "SKUDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Bal Qty",
        key: "balancedQty",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customer",
        ...EXCEL_STYLE
    }
];
export const SHORT_SO_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SHORT_SO_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
