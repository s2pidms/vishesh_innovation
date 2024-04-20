import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Paid Leaves";
let headers: any = [
    {
        header: "Calendar Year",
        key: "calendarYear",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Code",
        key: "empCode",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Name",
        key: "empFullName",
        ...EXCEL_STYLE
    },
    {
        header: "Paid Leaves",
        key: "casualLeaveCL",
        ...EXCEL_STYLE
    },
    {
        header: "Compensatory Off [C/Off]",
        key: "sickLeaveSL",
        ...EXCEL_STYLE
    },
    {
        header: "Advance Leaves",
        key: "privilegeLeavePL",
        ...EXCEL_STYLE
    }
];
export const PAID_LEAVES_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PAID_LEAVES_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
