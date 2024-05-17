import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "SKU Dimension Master";
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
        key: "primaryUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Product Category",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Stage",
        key: "SKUStage",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "SKUDimStatus",
        ...EXCEL_STYLE
    },
    {
        header: "Actual Dimension  Unit",
        key: "actualUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Actual Dimension  Width",
        key: "actualWidth",
        ...EXCEL_STYLE
    },
    {
        header: "Actual Dimension  Length",
        key: "actualLength",
        ...EXCEL_STYLE
    },
    {
        header: "Actual Dimension  Ups",
        key: "actualUps",
        ...EXCEL_STYLE
    },
    {
        header: "Actual Dimension Area (sqm)",
        key: "actualMSqArea",
        ...EXCEL_STYLE
    },
    {
        header: "Layout Dimension Unit",
        key: "layoutUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Layout Dimension Width",
        key: "layoutWidth",
        ...EXCEL_STYLE
    },
    {
        header: "Layout Dimension Length",
        key: "layoutLength",
        ...EXCEL_STYLE
    },
    {
        header: "Layout Dimension Ups",
        key: "layoutUps",
        ...EXCEL_STYLE
    },
    {
        header: "Layout Dimension Area (sqm)",
        key: "layoutMSqArea",
        ...EXCEL_STYLE
    }
];
export const SKU_DIMENSIONS_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SKU_DIMENSIONS_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
