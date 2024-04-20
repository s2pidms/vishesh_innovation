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
    "*"
];
let title = "B2B Customer Master";
let headers: any = [
    {
        header: "Customer Code",
        key: "customerCode",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Nick Name",
        key: "customerNickName",
        ...EXCEL_STYLE
    },
    {
        header: "Category",
        key: "customerCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Region/Zone",
        key: "region",
        ...EXCEL_STYLE
    },
    {
        header: "PAN No.",
        key: "customerPAN",
        ...EXCEL_STYLE
    },
    {
        header: "GST Classification",
        key: "GSTClassification",
        ...EXCEL_STYLE
    },
    {
        header: "GSTIN",
        key: "GSTIN",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "customerCurrency",
        ...EXCEL_STYLE
    },
    {
        header: "Credit Limit",
        key: "creditLimit",
        ...EXCEL_STYLE
    },
    {
        header: "Payment Terms",
        key: "customerPaymentTerms",
        ...EXCEL_STYLE
    },
    {
        header: "Country",
        key: "country",
        ...EXCEL_STYLE
    },
    {
        header: "State",
        key: "state",
        ...EXCEL_STYLE
    },
    {
        header: "City",
        key: "city",
        ...EXCEL_STYLE
    },
    {
        header: "Pin Code",
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
        header: "Contact Person Name",
        key: "contactPersonName",
        ...EXCEL_STYLE
    },
    {
        header: "Designation",
        key: "contactPersonDesignation",
        ...EXCEL_STYLE
    },
    {
        header: "Department",
        key: "contactPersonDepartment",
        ...EXCEL_STYLE
    },
    {
        header: "Mobile No.",
        key: "contactPersonNumber",
        ...EXCEL_STYLE
    },
    {
        header: "E-mail ID",
        key: "contactPersonEmail",
        ...EXCEL_STYLE
    },
    {
        header: "Print QR Code on Invoice",
        key: "printQRCodeOnInvoice",
        ...EXCEL_STYLE
    },
    {
        header: "Print DS on Invoice",
        key: "printDSOnInvoice",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "isCustomerActive",
        ...EXCEL_STYLE
    }
];
export const B2B_CUSTOMER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const B2B_CUSTOMER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
