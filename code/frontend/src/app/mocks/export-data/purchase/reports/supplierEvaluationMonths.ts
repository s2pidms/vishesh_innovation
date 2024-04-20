import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Supplier Evaluation Detailed Report";
let headers: any = [
    {
        header: "Month",
        key: "_id",
        ...EXCEL_STYLE
    },
    {
        header: "Total Supplies",
        key: "totalSupplies",
        ...EXCEL_STYLE
    },
    {
        header: "Quality Supplies",
        key: "qualitySupplies",
        ...EXCEL_STYLE
    },
    {
        header: "On Time Supplies",
        key: "onTimeSupplies",
        ...EXCEL_STYLE
    },
    {
        header: "QS Rating",
        key: "qualitySuppliesRating",
        ...EXCEL_STYLE
    },
    {
        header: "Actual QS Rating",
        key: "qualitySuppliesActualRating",
        ...EXCEL_STYLE
    },

    {
        header: "OS Rating",
        key: "onTimeSuppliesRating",
        ...EXCEL_STYLE
    },
    {
        header: "Actual OS Rating",
        key: "onTimeSuppliesActualRating",
        ...EXCEL_STYLE
    },
    {
        header: "Total Rating",
        key: "totalRating",
        ...EXCEL_STYLE
    }
];

export const SUPPLIER_EVALUATION_MONTHS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SUPPLIER_EVALUATION_MONTHS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
