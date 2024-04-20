import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Capital Goods Master";
let headers: any = [
    {
        header: "CG Code",
        key: "capitalGoodsNo",
        ...EXCEL_STYLE
    },
    {
        header: "Capital Goods Name",
        key: "capitalGoodsName",
        ...EXCEL_STYLE
    },
    {
        header: "Capital Goods Description",
        key: "capitalGoodsDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Capital Goods Specification",
        key: "capitalGoodsSpecification",
        ...EXCEL_STYLE
    },
    {
        header: "UOM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "hsnCode",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Part No.",
        key: "supplierPartNo",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Purchase Cost",
        key: "purchaseCost",
        ...EXCEL_STYLE
    }
];
export const CAPITAL_GOODS_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CAPITAL_GOODS_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
