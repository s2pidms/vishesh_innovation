import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Job Card Entry";
let headers: any = [
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
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Batch I/P Qty.",
        key: "totalBatchQuantity",
        ...EXCEL_STYLE
    },
    {
        header: "Batch O/P Qty.",
        key: "batchOutputQty",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Number",
        key: "batchNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const JOB_CARD_ENTRY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const JOB_CARD_ENTRY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
