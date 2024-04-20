import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Job Card";
let headers: any = [
    {
        header: "JC No.",
        key: "jobCardNo",
        ...EXCEL_STYLE
    },
    {
        header: "JC Date",
        key: "jobCardDate",
        ...EXCEL_STYLE
    },
    {
        header: "SKU No.",
        key: "SKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Name",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Description",
        key: "SKUDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Qty.",
        key: "batchQty",
        ...EXCEL_STYLE
    },

    {
        header: "Customer/Prospect Nick Name",
        key: "customerNickName",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const JOB_CARD_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const JOB_CARD_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
