import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Product Master";
let headers: any = [
    {
        header: "Product No.",
        key: "productNo",
        ...EXCEL_STYLE
    },
    {
        header: "Product Category/Code",
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
        header: "HSN Code",
        key: "hsn",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "primaryUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Unit Cost",
        key: "unitCost",
        ...EXCEL_STYLE
    },
    {
        header: "Source Of MFG.",
        key: "sourceOfMFG",
        ...EXCEL_STYLE
    },
    {
        header: "Shelf Life [Months]",
        key: "shelfLife",
        ...EXCEL_STYLE
    },
    {
        header: "Storage Temperature",
        key: "storageTemp",
        ...EXCEL_STYLE
    },
    {
        header: "Storage Humidity",
        key: "storageHumidity",
        ...EXCEL_STYLE
    }
];
export const PRODUCT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PRODUCT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
