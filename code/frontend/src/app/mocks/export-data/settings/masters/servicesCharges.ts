import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "Services Charges";
let headers: any = [
    {
        header: "Order",
        key: "order",
        ...EXCEL_STYLE
    },
    {
        header: "Description of Services",
        key: "description",
        ...EXCEL_STYLE
    },
    {
        header: "SAC Code",
        key: "SACCode",
        ...EXCEL_STYLE
    },
    {
        header: "GST Rate %",
        key: "GSTRate",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const SERVICE_CHARGES_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SERVICE_CHARGES_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
