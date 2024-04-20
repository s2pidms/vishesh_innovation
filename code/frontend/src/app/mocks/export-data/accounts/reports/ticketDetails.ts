import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [86, 86, 86, 86, 86, 86];
let title = "Ticket Details";
let headers: any = [
    {
        header: "Ticket #",
        key: "issueNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Title",
        key: "issueTitle",
        ...EXCEL_STYLE
    },
    {
        header: "Ticket Date",
        key: "issueDate",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "issueDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Ticket Resolution",
        key: "issueResolution",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "issueStatus",
        ...EXCEL_STYLE
    }
];

export const TICKET_DETAILS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TICKET_DETAILS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
