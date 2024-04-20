import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Goods Issue | PPIC To Production";
let headers: any = [
    {
        header: "Goods Issue (GI) No.",
        key: "goodsIssueNo",
        ...EXCEL_STYLE
    },
    {
        header: "Goods Issue Date	",
        key: "goodsIssueDate",
        ...EXCEL_STYLE
    },
    {
        header: "GI Issue to Dept.",
        key: "goodsIssueTo",
        ...EXCEL_STYLE
    },
    {
        header: "Job Card Ref.",
        key: "jobCardNo",
        ...EXCEL_STYLE
    },
    {
        header: "Issued by",
        key: "updatedAt",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const GOODS_ISSUE_PPIC_TO_PRODUCTION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GOODS_ISSUE_PPIC_TO_PRODUCTION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
