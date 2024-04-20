import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*","*"];
let title = "Product Category Master";
let headers: any = [
    {
        header: "Sequence",
        key: "seq",
        ...EXCEL_STYLE
    },
    {
        header: "Product No.",
        key: "productNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Product Code",
        key: "productCode",
        ...EXCEL_STYLE
    },
    {
        header: "DD/Display Value</th>",
        key: "displayProductCategoryName",
        ...EXCEL_STYLE
    },
    {
        header: "Application",
        key: "application",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "categoryStatus",
        ...EXCEL_STYLE
    }
];
export const PRODUCT_CATEGORY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PRODUCT_CATEGORY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
