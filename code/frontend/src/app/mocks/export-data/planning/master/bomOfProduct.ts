import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Bill of Material (BoM) of Product";
let headers: any = [
    {
        header: "BoM No.",
        key: "BOMNo",
        ...EXCEL_STYLE
    },
    {
        header: "Product No.",
        key: "productNo",
        ...EXCEL_STYLE
    },
    {
        header: "Product Category",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Product Name",
        key: "productName",
        ...EXCEL_STYLE
    },
    {
        header: "Product Description",
        key: "productDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Part Count",
        key: "partCount",
        ...EXCEL_STYLE
    },
    {
        header: "Material Cost",
        key: "totalMaterialCost",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const BOM_OF_PRODUCT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const BOM_OF_PRODUCT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
