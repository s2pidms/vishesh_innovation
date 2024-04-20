import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
// let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = "Asset Master";
let headers: any = [
    {
        header: "Asset Class",
        key: "assetType",
        ...EXCEL_STYLE
    },
    {
        header: "Asset No.",
        key: "assetCode",
        ...EXCEL_STYLE
    },
    {
        header: "Asset Name",
        key: "assetName",
        ...EXCEL_STYLE
    },
    {
        header: "Asset Description",
        key: "assetDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Purchase Cost",
        key: "assetPurchaseCost",
        ...EXCEL_STYLE
    },
    {
        header: "Purchase Date",
        key: "assetPurchaseDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Depreciation Start Date",
        key: "depreciationStartDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Location",
        key: "location",
        ...EXCEL_STYLE
    },
    {
        header: "Life (Yr)",
        key: "estimatedUsefulLifeInYear",
        ...EXCEL_STYLE
    },
    {
        header: "Asset Cost/Hr",
        key: "totalAssetCostPerHr",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const ASSET_MASTER_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ASSET_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, title});
};
