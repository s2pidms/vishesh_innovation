import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "SKU Material Master";
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
        key: "SKUAttributesStatus",
        ...EXCEL_STYLE
    }
];
export const SKU_MATERIAL_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SKU_MATERIAL_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
