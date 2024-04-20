import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*"
];
let title = "Employee Master";
let headers: any =[
    {
        header: "First Name",
        key: "empFirstName",
        ...EXCEL_STYLE
    },
    {
        header: "Middle Name",
        key: "empMiddleName",
        ...EXCEL_STYLE
    },
    {
        header: "Last Name",
        key: "empLastName",
        ...EXCEL_STYLE
    },
    {
        header: "Full Name",
        key: "empFullName",
        ...EXCEL_STYLE
    },
    {
        header: "Gender",
        key: "empGender",
        ...EXCEL_STYLE
    },
    {
        header: "DOB",
        key: "empDOB",
        ...EXCEL_STYLE
    },
    {
        header: "Contact No",
        key: "empContactNo",
        ...EXCEL_STYLE
    },
    {
        header: "Aadhar No",
        key: "empAadharNo",
        ...EXCEL_STYLE
    },
    {
        header: "Pan No",
        key: "empPANNo",
        ...EXCEL_STYLE
    },
    {
        header: "Martial Status",
        key: "empMartialStatus",
        ...EXCEL_STYLE
    },
    {
        header: "Qualification",
        key: "qualification",
        ...EXCEL_STYLE
    },
    {
        header: "PF No",
        key: "empPFNo",
        ...EXCEL_STYLE
    },
    {
        header: "ESIC No",
        key: "empESICNo",
        ...EXCEL_STYLE
    },
    {
        header: "Company Email",
        key: "empEmailCompany",
        ...EXCEL_STYLE
    },
    {
        header: "Personal email 1",
        key: "empEmailPersonal1",
        ...EXCEL_STYLE
    },
    {
        header: "Personal email 2",
        key: "empEmailPersonal2",
        ...EXCEL_STYLE
    },
    {
        header: "Father Full name",
        key: "empFatherFullName",
        ...EXCEL_STYLE
    },
    {
        header: "Father DOB",
        key: "empFatherDOB",
        ...EXCEL_STYLE
    },
    {
        header: "FatherOccupation",
        key: "empFatherOccupation",
        ...EXCEL_STYLE
    },
    {
        header: "Mother Full Name",
        key: "empMotherFullName",
        ...EXCEL_STYLE
    },
    {
        header: "Mother DOB",
        key: "empMotherDOB",
        ...EXCEL_STYLE
    },
    {
        header: "Mother Occupation",
        key: "empMotherOccupation",
        ...EXCEL_STYLE
    },
    {
        header: "Spouse Full Name",
        key: "empSpouseFullName",
        ...EXCEL_STYLE
    },
    {
        header: "Spouse DOB",
        key: "empSpouseDOB",
        ...EXCEL_STYLE
    },
    {
        header: "Spouse Occupation",
        key: "empSpouseOccupation",
        ...EXCEL_STYLE
    },
    {
        header: "No. of Dependent Children",
        key: "noOfDependentChildren",
        ...EXCEL_STYLE
    },
    {
        header: "Full Name of Dependent Child 1",
        key: "fullNameOfDependentChild1",
        ...EXCEL_STYLE
    },
    {
        header: "Full Name of Dependent Child 2",
        key: "fullNameOfDependentChild2",
        ...EXCEL_STYLE
    },
    {
        header: "Joining Date",
        key: "empJoiningDate",
        ...EXCEL_STYLE
    },
    {
        header: "Joining Location",
        key: "empJoiningLocation",
        ...EXCEL_STYLE
    },
    {
        header: "Grade",
        key: "empGrade",
        ...EXCEL_STYLE
    },
    {
        header: "Designation",
        key: "empDesignation",
        ...EXCEL_STYLE
    },
    {
        header: "Department",
        key: "empDepartment",
        ...EXCEL_STYLE
    },
    {
        header: "Report To",
        key: "empReportTo",
        ...EXCEL_STYLE
    },
    {
        header: "OT Applicability",
        key: "empOTApplicability",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Type",
        key: "empType",
        ...EXCEL_STYLE
    },
    {
        header: "Cadre",
        key: "empCadre",
        ...EXCEL_STYLE
    },
    {
        header: "Beneficiary Name",
        key: "empBefName",
        ...EXCEL_STYLE
    },
    {
        header: "Bank Name",
        key: "empBankName",
        ...EXCEL_STYLE
    },
    {
        header: "Branch Name",
        key: "empBankBranch",
        ...EXCEL_STYLE
    },
    {
        header: "Account Type",
        key: "empAccType",
        ...EXCEL_STYLE
    },
    {
        header: "Account Number",
        key: "empAccountNumber",
        ...EXCEL_STYLE
    },
    {
        header: "IFSC Code",
        key: "empBankIFSCCode",
        ...EXCEL_STYLE
    }
]
export const EMPLOYEE_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const EMPLOYEE_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
