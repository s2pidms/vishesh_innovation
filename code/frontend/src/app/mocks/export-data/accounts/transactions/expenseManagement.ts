import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Expense Management";
let headers: any = [
    {
        header: "Expense Code",
        key: "expenseCode",
        ...EXCEL_STYLE
    },
    {
        header: "Expense Date",
        key: "expenseDate",
        ...EXCEL_STYLE
    },
    {
        header: "Expense Category",
        key: "expenseCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Project",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Expense Amount",
        key: "expenseAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Billable to Customer",
        key: "billableToCustomer",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier/Provider",
        key: "provider",
        ...EXCEL_STYLE
    },
    {
        header: "Resource",
        key: "resource",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const EXPENSE_MANAGEMENT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const EXPENSE_MANAGEMENT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
