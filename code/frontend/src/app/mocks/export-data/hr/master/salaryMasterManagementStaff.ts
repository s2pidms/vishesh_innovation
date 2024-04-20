import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Salary Master";
let headers: any = [
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
        header: "Basic ₹",
        key: "Basic",
        ...EXCEL_STYLE
    },
    {
        header: "HRA ₹",
        key: "HRA",
        ...EXCEL_STYLE
    },
    {
        header: "CCA ₹",
        key: "CCA",
        ...EXCEL_STYLE
    },
    {
        header: "Employees PF Contribution ₹",
        key: "employerPFContributionPerMonth",
        ...EXCEL_STYLE
    },
    {
        header: "Gratuity ₹",
        key: "gratuityPerMonth",
        ...EXCEL_STYLE
    },
    {
        header: "Cost To Company (CTC) ₹",
        key: "costTOCompanyCTCPerMonth",
        ...EXCEL_STYLE
    },
    {
        header: "PF Wages For Contribution",
        key: "PFWagesForContribution",
        ...EXCEL_STYLE
    },
    {
        header: "Department",
        key: "empDepartment",
        ...EXCEL_STYLE
    },
    {
        header: "Gross Salary ₹",
        key: "grossSalaryPerMonth",
        ...EXCEL_STYLE
    },
    {
        header: "WEF Date",
        key: "effectFromDateS",
        ...EXCEL_STYLE
    }
];
export const SALARY_MASTER_MANAGEMENT_STAFF_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALARY_MASTER_MANAGEMENT_STAFF_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
