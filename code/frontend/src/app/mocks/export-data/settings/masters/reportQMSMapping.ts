import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Report QMS Mapping";
let headers: any = [
    {
        header: "Report Code",
        key: "reportCode",
        ...EXCEL_STYLE
    },
    {
        header: "Report QMS Title",
        key: "reportTitle",
        ...EXCEL_STYLE
    },
    {
        header: "Report QMS Display",
        key: "displayText",
        ...EXCEL_STYLE
    }
];
export const REPORT_Q_M_S_MAPPING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const REPORT_Q_M_S_MAPPING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
