import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [63, 63, 63, 63, 63, 63, 63, 63];
let title = "Purchase Indent Report";
let headers: any = [
    {
        header: "IO No.",
        key: "indentOrderNo",
        ...EXCEL_STYLE
    },
    {
        header: "IO Date",
        key: "indentOrderDates",
        ...EXCEL_STYLE
    },
    {
        header: "Purchase Category",
        key: "purchaseCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Channel Partner Name",
        key: "channelPartnerName",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "IO Value",
        key: "netPIValue",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const PURCHASE_INDENT_REP_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PURCHASE_INDENT_REP_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
