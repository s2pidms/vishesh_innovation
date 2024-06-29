import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39];
let title = "Finished Goods (FG) Inventory Report";
let headers: any = [
    {
        header: "FG INW Dt",
        key: "FGINDate",
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
        header: "Cust. Part No.",
        key: "partNo",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Quantity",
        key: "FGINQuantity",
        ...EXCEL_STYLE
    },
    {
        header: "Batch No.",
        key: "batchNo",
        ...EXCEL_STYLE
    },
    {
        header: "Batch Date",
        key: "manufacturingDate",
        ...EXCEL_STYLE
    },
    {
        header: "U/B Date",
        key: "expiryDate",
        ...EXCEL_STYLE
    },
    {
        header: "Aging",
        key: "aging",
        ...EXCEL_STYLE
    },
    {
        header: "Location",
        key: "location",
        ...EXCEL_STYLE
    }
];

export const FINISHED_GOODS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FINISHED_GOODS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
