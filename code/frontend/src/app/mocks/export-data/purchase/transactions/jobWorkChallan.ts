import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Job Work Challan Report";
let headers: any = [
    {
        header: "JWC No.",
        key: "JWChallanNo",
        ...EXCEL_STYLE
    },
    {
        header: "JWC Date",
        key: "JWChallanDate",
        ...EXCEL_STYLE
    },
    {
        header: "Job Worker Name",
        key: "jobWorkerName",
        ...EXCEL_STYLE
    },
    {
        header: "Place Of Supply",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Ccy",
        key: "placeOfSupply",
        ...EXCEL_STYLE
    },
    {
        header: "Taxable Amount",
        key: "totalTaxableAmt",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const JOB_WORK_CHALLAN_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const JOB_WORK_CHALLAN_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
