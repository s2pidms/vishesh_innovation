import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Map Category HSN";
let headers: any = [
    {
        header: "Product Category",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "HSNCode",
        ...EXCEL_STYLE
    },
    {
        header: "Colour Name/Code",
        key: "colourName",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "description",
        ...EXCEL_STYLE
    },
    {
        header: "IGST %",
        key: "igstRate",
        ...EXCEL_STYLE
    },
    {
        header: "CGST %",
        key: "cgstRate",
        ...EXCEL_STYLE
    },
    {
        header: "SGST %",
        key: "sgstRate",
        ...EXCEL_STYLE
    },
    {
        header: "UGST %",
        key: "ugstRate",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const MAP_CATEGORY_HSN_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAP_CATEGORY_HSN_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
