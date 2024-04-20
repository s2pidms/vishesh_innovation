import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Sales Order Status";
let headers: any = [
    {
        header: "SO No.",
        key: "SONumber",
        ...EXCEL_STYLE
    },
    {
        header: "SO Date",
        key: "SODate",
        ...EXCEL_STYLE
    },
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
        header: "Part No.",
        key: "customerPartNo",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "SO Qty",
        key: "SOQty",
        ...EXCEL_STYLE
    },
    {
        header: "Disp. Qty",
        key: "dispatchQty",
        ...EXCEL_STYLE
    },
    {
        header: "SO Bal. Qty.",
        key: "SObalQty",
        ...EXCEL_STYLE
    },
    {
        header: "Cust. Nick Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer PO No.",
        key: "PONumber",
        ...EXCEL_STYLE
    }
];

export const SALES_ORDER_STATUS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALES_ORDER_STATUS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, title});
};
