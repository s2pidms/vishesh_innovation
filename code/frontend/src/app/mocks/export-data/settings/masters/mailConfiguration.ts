import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Mail Configuration";
let headers: any = [
    {
        header: "Module Name",
        key: "module",
        ...EXCEL_STYLE
    },
    {
        header: "Sub Module Name",
        key: "subModule",
        ...EXCEL_STYLE
    },
    {
        header: "Action",
        key: "action",
        ...EXCEL_STYLE
    },
    {
        header: "Email To",
        key: "emailTo",
        ...EXCEL_STYLE
    },
    {
        header: "Email CC",
        key: "emailCC",
        ...EXCEL_STYLE
    },
    {
        header: "Email BCC",
        key: "emailBCC",
        ...EXCEL_STYLE
    }
];

export const MAIL_CONFIGURATION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAIL_CONFIGURATION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
