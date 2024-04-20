import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "D-SKU Cost Sheet";
let headers: any = [
    {
        header: "D-SKU No",
        key: "DSKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "D-SKU Name",
        key: "DSKUName",
        ...EXCEL_STYLE
    },
    {
        header: "D-SKU Description",
        key: "DSKUDescription",
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
        header: "Profit",
        key: "profit",
        ...EXCEL_STYLE
    },
    {
        header: "Selling Price",
        key: "sellingPrice",
        ...EXCEL_STYLE
    }
];
export const COST_SHEET_FOR_DSKU_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const COST_SHEET_FOR_DSKU_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
