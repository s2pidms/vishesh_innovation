import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Direct Cost";
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
        header: "Labour Cost/Unit",
        key: "totalLabourCostPerUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Asset Cost/Unit",
        key: "totalAssetCostPerUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Tooling Cost/Unit",
        key: "totalToolingCostPerUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Total Direct Process Cost/Unit",
        key: "totalCostPerUnit",
        ...EXCEL_STYLE
    }
];
export const DIRECT_COST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DIRECT_COST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
