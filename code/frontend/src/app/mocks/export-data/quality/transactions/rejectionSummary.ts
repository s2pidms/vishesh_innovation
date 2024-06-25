import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Rejection Summary";
let headers: any = [
    {
        header: "JC No",
        key: "jobCardNo",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Date",
        key: "batchDate",
        ...EXCEL_STYLE
    },
    {
        header: "SKU No",
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
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Input Qty",
        key: "batchInputQty",
        ...EXCEL_STYLE
    },
    {
        header: "Output Qty",
        key: "batchOutputQty",
        ...EXCEL_STYLE
    },
    {
        header: "Rej. Qty",
        key: "batchRejQty",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const REJECTION_SUMMARY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const REJECTION_SUMMARY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
