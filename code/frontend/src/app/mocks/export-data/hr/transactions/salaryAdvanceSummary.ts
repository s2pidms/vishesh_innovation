import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Salary Advance Summary";
let headers: any = [
    {
        header: "Request Dt.",
        key: "requestDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Code",
        key: "employeeCode",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Name",
        key: "empFullName",
        ...EXCEL_STYLE
    },
    {
        header: "Adv. Amt. INR",
        key: "amount",
        ...EXCEL_STYLE
    },
    {
        header: "Repay Start",
        key: "repayStartMonthYearS",
        ...EXCEL_STYLE
    },
    {
        header: "Repay End",
        key: "repayEndMonthYearS",
        ...EXCEL_STYLE
    },
    {
        header: "Tenure Months",
        key: "tenureMonths",
        ...EXCEL_STYLE
    },
    {
        header: "Repay Amt. INR",
        key: "repayAmountPerMonth",
        ...EXCEL_STYLE
    },
    {
        header: "Reason For Advance",
        key: "reasonForAdvance",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const SALARY_ADVANCE_SUMMARY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALARY_ADVANCE_SUMMARY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
