import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "SampleRequest Report";
let headers: any = [
    {
        header: "SR No.",
        key: "sampleReqNo",
        ...EXCEL_STYLE
    },
    {
        header: "SR Date",
        key: "SRDate",
        ...EXCEL_STYLE
    },
    {
        header: "Sales Category",
        key: "salesCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "SR Total Amount",
        key: "SRTotalAmount",
        ...EXCEL_STYLE
    },
    {
        header: "SR Status",
        key: "SRStatus",
        ...EXCEL_STYLE
    }
];
export const SAMPLE_REQUEST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SAMPLE_REQUEST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
