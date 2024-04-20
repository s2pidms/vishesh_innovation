import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Advance Shipment Notice";
let headers: any = [
    {
        header: "Invoice #",
        key: "salesInvoiceNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Date",
        key: "salesInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Value",
        key: "invoiceValue",
        ...EXCEL_STYLE
    },
    {
        header: "ASN #",
        key: "ASNNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "State of supply",
        key: "stateOfSupply",
        ...EXCEL_STYLE
    },
    {
        header: "Total Boxes",
        key: "totalNoOfBoxes",
        ...EXCEL_STYLE
    },
    {
        header: "Total Weight(kgs)",
        key: "totalGrossWeight",
        ...EXCEL_STYLE
    },
    {
        header: "Transporter",
        key: "transporter",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "ASNStatus",
        ...EXCEL_STYLE
    }
];
export const ADVANCE_SHIPMENT_NOTICE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const ADVANCE_SHIPMENT_NOTICE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
