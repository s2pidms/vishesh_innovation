import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Service Purchase Order";
let headers: any = [
    {
        header: "Purchase Category",
        key: "purchaseCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Name",
        key: "supplier",
        ...EXCEL_STYLE
    },
    {
        header: "SPO #",
        key: "SPONumber",
        ...EXCEL_STYLE
    },
    {
        header: "SPO Date",
        key: "SPODateS",
        ...EXCEL_STYLE
    },
    {
        header: "OrderReference",
        key: "orderReference",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Delivery Location",
        key: "deliveryLocation",
        ...EXCEL_STYLE
    },
    {
        header: "Delivery Date",
        key: "deliveryDate",
        ...EXCEL_STYLE
    },
    {
        header: "SPO Value",
        key: "netSPOValue",
        ...EXCEL_STYLE
    },
    {
        header: "SPO Remarks",
        key: "SPORemarks",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "SPOStatus",
        ...EXCEL_STYLE
    }
];
export const GENERATE_SPO_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GENERATE_SPO_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
