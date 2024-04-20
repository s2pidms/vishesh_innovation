import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Sku Category Master";
let headers: any = [
    {
        header: "SKU Category Name",
        key: "SKUCategoryName",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Category Prefix",
        key: "SKUCategoryPrefix",
        ...EXCEL_STYLE
    },
    {
        header: "Digit",
        key: "digit",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Category Auto Increment No.",
        key: "SKUCategoryAutoIncrement",
        ...EXCEL_STYLE
    },
    {
        header: "Application",
        key: "application",
        ...EXCEL_STYLE
    },
    {
        header: "Active",
        key: "categoryStatus",
        ...EXCEL_STYLE
    }
];
export const SKU_CATEGORY_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SKU_CATEGORY_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
