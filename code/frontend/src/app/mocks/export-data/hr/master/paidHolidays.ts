import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Paid Holidays";
let headers: any = [
    {
        header: "SN",
        key: "serialNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Holiday Name",
        key: "holidayName",
        ...EXCEL_STYLE
    },
    {
        header: "Day",
        key: "holidayDay",
        ...EXCEL_STYLE
    },
    {
        header: "Date",
        key: "holidayDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Location",
        key: "holidayLocation",
        ...EXCEL_STYLE
    }
];
export const PAID_HOLIDAYS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PAID_HOLIDAYS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
