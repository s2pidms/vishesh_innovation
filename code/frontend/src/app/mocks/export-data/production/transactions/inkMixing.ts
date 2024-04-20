import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Ink Mixing";
let headers: any = [
    {
        header: "JC No.",
        key: "jobCardNo",
        ...EXCEL_STYLE
    },
    {
        header: "F20 Ink Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "F20 Ink Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "F20 Ink Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Qty.",
        key: "batchQty",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Date",
        key: "batchDate",
        ...EXCEL_STYLE
    },
    {
        header: "Log Book Ref",
        key: "logBookRef",
        ...EXCEL_STYLE
    }
];
export const INK_MIXING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const INK_MIXING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
