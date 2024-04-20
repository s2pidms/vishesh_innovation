import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Goods Requisition";
let headers: any = [
    {
        header: "GR No.",
        key: "GRNumber",
        ...EXCEL_STYLE
    },
    {
        header: "GR Date",
        key: "GRDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Location (Store)",
        key: "deliveryLocation",
        ...EXCEL_STYLE
    },
    {
        header: "Department",
        key: "department",
        ...EXCEL_STYLE
    },
    {
        header: "Remarks/Order Reference",
        key: "salesOrderSKUReference",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "GRStatus",
        ...EXCEL_STYLE
    }
];
export const GOODS_REQUISITION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GOODS_REQUISITION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
