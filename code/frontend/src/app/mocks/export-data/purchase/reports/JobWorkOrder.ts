import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Job Work Order Report";
let headers: any = [
    {
        header: "WO No",
        key: "WONo",
        ...EXCEL_STYLE
    },
    {
        header: "WO Date",
        key: "WODate",
        ...EXCEL_STYLE
    },
    {
        header: "Job Worker Name",
        key: "jobWorkerName",
        ...EXCEL_STYLE
    },
    {
        header: "Order Reference",
        key: "orderReference",
        ...EXCEL_STYLE
    },
    {
        header: "Place Of Supply",
        key: "placeOfSupply",
        ...EXCEL_STYLE
    },
    {
        header: "WO Taxable Value",
        key: "WOTaxableValue",
        ...EXCEL_STYLE
    }
];
export const JOB_WORK_ORDER_REPORT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const JOB_WORK_ORDER_REPORT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
