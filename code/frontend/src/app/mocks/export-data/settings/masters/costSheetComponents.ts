import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Cost Sheet Components";
let headers: any = [
    {
        header: "Component Code",
        key: "componentCode",
        ...EXCEL_STYLE
    },
    {
        header: "Component Type",
        key: "componentType",
        ...EXCEL_STYLE
    },
    {
        header: "Order",
        key: "order",
        ...EXCEL_STYLE
    },
    {
        header: "Cost Elements/Particulars",
        key: "costElement",
        ...EXCEL_STYLE
    },
    {
        header: "Tooltip",
        key: "tooltip",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const COST_SHEET_COMPONENTS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const COST_SHEET_COMPONENTS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
