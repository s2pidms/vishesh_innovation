import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Purchase Order";
let headers: any = [
    {
        header: "Purchase Category",
        key: "purchaseCategory",
        ...EXCEL_STYLE
    },
    {
        header: "PO #",
        key: "PONumber",
        ...EXCEL_STYLE
    },
    {
        header: "PO Date",
        key: "PODateS",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplierName",
        ...EXCEL_STYLE
    },
    {
        header: "Order Reference",
        key: "orderReference",
        ...EXCEL_STYLE
    },
    {
        header: "PO Type",
        key: "POType",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "PO Value",
        key: "netPOValue",
        ...EXCEL_STYLE
    },
    {
        header: "PPV",
        key: "totalPPV",
        ...EXCEL_STYLE
    },
    {
        header: "Delivery Location",
        key: "deliveryLocation",
        ...EXCEL_STYLE
    },
    {
        header: "PO Remarks",
        key: "PORemarks",
        ...EXCEL_STYLE
    },
    {
        header: "PO Validity",
        key: "POValidity",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "POStatus",
        ...EXCEL_STYLE
    }
];
export const GENERATE_P_O_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GENERATE_P_O_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
