import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Professional Tax";
let headers: any = [
    {
        header: "State",
        key: "state",
        ...EXCEL_STYLE
    },
    {
        header: "Gender",
        key: "gender",
        ...EXCEL_STYLE
    },
    {
        header: "February Amount",
        key: "isFebAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Min Salary",
        key: "minSalary",
        ...EXCEL_STYLE
    },
    {
        header: "Max Salary",
        key: "maxSalary",
        ...EXCEL_STYLE
    },
    {
        header: "Amount",
        key: "amount",
        ...EXCEL_STYLE
    }
];
export const PROFESSIONAL_TAX_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROFESSIONAL_TAX_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
