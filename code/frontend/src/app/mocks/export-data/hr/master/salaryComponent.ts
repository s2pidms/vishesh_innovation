import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Salary Component Setup";
let headers: any = [
    {
        header: "Earning Head",
        key: "earningHead",
        ...EXCEL_STYLE
    },
    {
        header: "Abbreviation",
        key: "abbreviation",
        ...EXCEL_STYLE
    },
    {
        header: "Earning Type",
        key: "earningType",
        ...EXCEL_STYLE
    },
    {
        header: "Rate %",
        key: "calculationFactor",
        ...EXCEL_STYLE
    },
    {
        header: "Eearning Cycle",
        key: "earningCycle",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const SALARY_COMPONENT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALARY_COMPONENT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
