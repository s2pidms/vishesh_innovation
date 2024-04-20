import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Job Card Output";
let headers: any = [
    {
        header: "Job Card Output No",
        key: "jobCardOutputNo",
        ...EXCEL_STYLE
    },
    {
        header: "Job Card No",
        key: "jobCardNo",
        ...EXCEL_STYLE
    },
    {
        header: "SKU No",
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
        header: "Batch Date",
        key: "batchDate",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Input Qty",
        key: "batchInputQty",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Output Qty",
        key: "batchOutputQty",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const JOB_CARD_OUTPUT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const JOB_CARD_OUTPUT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
