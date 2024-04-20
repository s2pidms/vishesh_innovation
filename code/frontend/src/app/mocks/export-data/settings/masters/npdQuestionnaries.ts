import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "NPD Questionnaires Master";
let headers: any = [
    {
        header: "Order",
        key: "orderNo",
        ...EXCEL_STYLE
    },
    {
        header: "Type",
        key: "type",
        ...EXCEL_STYLE
    },
    {
        header: "Questions",
        key: "questionnaire",
        ...EXCEL_STYLE
    }
];
export const NPD_QUESTIONNARIES_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const NPD_QUESTIONNARIES_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
