import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Sales Forecast";
let headers: any = [
    {
        header: "FC No.",
        key: "FCNo",
        ...EXCEL_STYLE
    },
    {
        header: "FC Date",
        key: "FCDate",
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
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "FC Type",
        key: "FCType",
        ...EXCEL_STYLE
    },

    {
        header: "FC Value",
        key: "netFCValue",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const SALES_FORECAST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALES_FORECAST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
