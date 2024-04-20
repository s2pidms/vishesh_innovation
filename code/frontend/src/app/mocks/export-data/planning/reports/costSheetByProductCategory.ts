import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Cost Sheet";
let headers: any = [
    {
        header: "Product Category",
        key: "productCategory",
        ...EXCEL_STYLE
    },
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
        key: "profit",
        ...EXCEL_STYLE
    }
];
export const COST_SHEET_BY_PRODUCT_CATEGORY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const COST_SHEET_BY_PRODUCT_CATEGORY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
