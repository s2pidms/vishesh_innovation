import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "ShipmentPlanning Report";
let headers: any = [
    {
        header: "Shipment ID",
        key: "SPNumber",
        ...EXCEL_STYLE
    },
    {
        header: "DRN No.",
        key: "DRNNumber",
        ...EXCEL_STYLE
    },
    {
        header: "DRN Date",
        key: "DRNDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Bill From Location",
        key: "billFromLocation",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Product Value",
        key: "SPTotalAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Shipment Value",
        key: "shipmentValue",
        ...EXCEL_STYLE
    },
    {
        header: "SPV",
        key: "SPV",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "SPStatus",
        ...EXCEL_STYLE
    }
];
export const SHIPMENT_PLANNING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SHIPMENT_PLANNING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
