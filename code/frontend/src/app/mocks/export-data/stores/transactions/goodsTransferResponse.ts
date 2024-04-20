import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "GoodsTransferResponse Report";
let headers: any = [
    {
        header: "GT Req #",
        key: "GTRequestNo",
        ...EXCEL_STYLE
    },
    {
        header: "GTR Date",
        key: "GTRequestDate",
        ...EXCEL_STYLE
    },
    {
        header: "GT Date",
        key: "GTDate",
        ...EXCEL_STYLE
    },
    {
        header: "Location",
        key: "location",
        ...EXCEL_STYLE
    },
    {
        header: "From Department",
        key: "fromDepartment",
        ...EXCEL_STYLE
    },
    {
        header: "To Department",
        key: "toDepartment",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const GOODS_TRANSFER_RESPONSE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GOODS_TRANSFER_RESPONSE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
