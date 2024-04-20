import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Product Specifications Master";
let headers: any = [
    {
        header: "SKU Code",
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
        header: "Product code",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const PRODUCT_SPECIFICATIONS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PRODUCT_SPECIFICATIONS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
