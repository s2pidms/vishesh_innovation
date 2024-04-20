import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Supplier Evaluation Master";
let headers: any = [
    {
        header: "Name",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "description",
        ...EXCEL_STYLE
    },
    {
        header: "Enabled",
        key: "enabled",
        ...EXCEL_STYLE
    },
    {
        header: "Weight",
        key: "weight",
        ...EXCEL_STYLE
    },
    {
        header: "Passing %",
        key: "passingPercentage",
        ...EXCEL_STYLE
    },
    {
        header: "Failing %",
        key: "failingPercentage",
        ...EXCEL_STYLE
    }
];
export const SUPPLIER_EVALUATION_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SUPPLIER_EVALUATION_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
