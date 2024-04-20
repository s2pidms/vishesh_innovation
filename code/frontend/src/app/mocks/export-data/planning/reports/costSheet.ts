import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
let title = "Cost Sheet";
let headers: any = [
    {
        header: "SKU No.",
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
        header: "D/Mtrl",
        key: "directMaterial",
        ...EXCEL_STYLE
    },
    {
        header: "D/Lbr",
        key: "directLabour",
        ...EXCEL_STYLE
    },
    {
        header: "D/Exp",
        key: "directExpenses",
        ...EXCEL_STYLE
    },
    {
        header: "COGS",
        key: "costOfGoodsSold",
        ...EXCEL_STYLE
    },
    {
        header: "OPEX",
        key: "operatingExpenses",
        ...EXCEL_STYLE
    },
    {
        header: "Total COO",
        key: "totalCostOfOperation",
        ...EXCEL_STYLE
    },
    {
        header: "Selling Price",
        key: "sellingPrice",
        ...EXCEL_STYLE
    },
    {
        header: "Profit",
        key: "profit",
        ...EXCEL_STYLE
    },
    {
        header: "Profit %",
        key: "profitPercent",
        ...EXCEL_STYLE
    }
];
export const COST_SHEET_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const COST_SHEET_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
