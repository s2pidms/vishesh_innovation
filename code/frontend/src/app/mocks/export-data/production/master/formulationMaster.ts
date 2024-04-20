import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Formulation Master";
let headers: any = [
    {
        header: "Ink Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Ink Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "Ink Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UoM",
        ...EXCEL_STYLE
    },
    {
        header: "Ink Cost/gram",
        key: "inkCostPerGm",
        ...EXCEL_STYLE
    },
    {
        header: "Total Qty",
        key: "totalQtyPerGm",
        ...EXCEL_STYLE
    },
    {
        header: "Total Cost",
        key: "totalCostPerGm",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const FORMULATION_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FORMULATION_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
