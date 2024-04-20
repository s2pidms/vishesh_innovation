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
    "*"
];
let title = "Supplier Master";
let headers: any = [
    {
        header: "Supplier Code",
        key: "supplierCode",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier NAME",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Nick Name",
        key: "supplierNickName",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Category",
        key: "supplierPurchaseType",
        ...EXCEL_STYLE
    },
    {
        header: "PAN Card No.",
        key: "supplierPAN",
        ...EXCEL_STYLE
    },
    {
        header: "GST Classification",
        key: "GSTClassification",
        ...EXCEL_STYLE
    },
    {
        header: "GSTIN No.",
        key: "supplierGST",
        ...EXCEL_STYLE
    },
    {
        header: "Udyam Aadhaar Registration No.",
        key: "supplierUdyogAadhar",
        ...EXCEL_STYLE
    },
    {
        header: "MSME Classification",
        key: "MSMEClassification",
        ...EXCEL_STYLE
    },
    {
        header: "Currency ",
        key: "supplierCurrency",
        ...EXCEL_STYLE
    },
    {
        header: "Payment Terms ",
        key: "supplierPaymentTerms",
        ...EXCEL_STYLE
    },
    {
        header: "Freight/Inco Terms ",
        key: "supplierINCOTerms",
        ...EXCEL_STYLE
    },
    {
        header: "Country ",
        key: "country",
        ...EXCEL_STYLE
    },
    {
        header: "State/Province ",
        key: "state",
        ...EXCEL_STYLE
    },
    {
        header: "City/District ",
        key: "city",
        ...EXCEL_STYLE
    },
    {
        header: "Pincode ",
        key: "pinCode",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 1",
        key: "line1",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 2",
        key: "line2",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 3",
        key: "line3",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 4",
        key: "line4",
        ...EXCEL_STYLE
    },
    {
        header: "Lead Time for Supply (in Days)",
        key: "supplierLeadTimeInDays",
        ...EXCEL_STYLE
    },
    {
        header: "Contract Purchase Agreement",
        key: "cpaFileUrl",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Person Name",
        key: "supplierContactPersonName",
        ...EXCEL_STYLE
    },
    {
        header: "Department",
        key: "supplierContactPersonDepartment",
        ...EXCEL_STYLE
    },
    {
        header: "Designation",
        key: "supplierContactPersonDesignation",
        ...EXCEL_STYLE
    },
    {
        header: "Mob. No.",
        key: "supplierContactPersonNumber",
        ...EXCEL_STYLE
    },
    {
        header: "E-Mail ID",
        key: "supplierContactPersonEmail",
        ...EXCEL_STYLE
    },
    {
        header: "Beneficiary Name",
        key: "befName",
        ...EXCEL_STYLE
    },
    {
        header: "Bank Name",
        key: "bankName",
        ...EXCEL_STYLE
    },
    {
        header: "Account Type",
        key: "accountType",
        ...EXCEL_STYLE
    },
    {
        header: "Account No",
        key: "accountNumber",
        ...EXCEL_STYLE
    },
    {
        header: "IFC Code",
        key: "bankIFSCCode",
        ...EXCEL_STYLE
    },
    {
        header: "Swift Code [For Imports]",
        key: "bankSwiftCode",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "isSupplierActive",
        ...EXCEL_STYLE
    }
];
export const SUPPLIER_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SUPPLIER_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
