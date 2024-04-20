import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Sample JC Creation Report";
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
        header: "DSKU/SKU No.",
        key: "SKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "DSKU/SKU Name",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "DSKU/SKU Description",
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
export const SAMPLE_JC_CREATION_REPORT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SAMPLE_JC_CREATION_REPORT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
