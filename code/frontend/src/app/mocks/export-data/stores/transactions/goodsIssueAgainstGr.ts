import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Goods Issue Against GR";
let headers: any = [
    {
        header: "Goods Requisition No.",
        key: "GRNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Goods Requisition Date	",
        key: "GRDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Goods Issue No.",
        key: "GINumber",
        ...EXCEL_STYLE
    },
    {
        header: "Location (Store)",
        key: "deliveryLocation",
        ...EXCEL_STYLE
    },
    {
        header: "Department.",
        key: "department",
        ...EXCEL_STYLE
    },
    {
        header: "Goods Issue Date",
        key: "GIDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Remarks",
        key: "remarks",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "GIStatus",
        ...EXCEL_STYLE
    }
];
export const GOODS_ISSUE_AGAINST_GR_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GOODS_ISSUE_AGAINST_GR_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
