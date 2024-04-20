import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [55, 55, 55, 55, 55, 55, 55, 55, 55, 55];
let title = "GT Request Fulfillment Status Report";
let headers: any = [
    {
        header: "GTR No",
        key: "GTRequestNo",
        ...EXCEL_STYLE
    },
    {
        header: "GTR Date",
        key: "GTRequestDate",
        ...EXCEL_STYLE
    },
    {
        header: "Item Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Item Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "Item Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "GTR Qty",
        key: "GTRequestQty",
        ...EXCEL_STYLE
    },
    {
        header: "GT Qty",
        key: "GTQty",
        ...EXCEL_STYLE
    },
    {
        header: "GTR Status",
        key: "GTStatus",
        ...EXCEL_STYLE
    }
];
export const GT_REQUEST_FULFILLMENT_STATUS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const GT_REQUEST_FULFILLMENT_STATUS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
