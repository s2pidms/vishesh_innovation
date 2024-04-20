import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
// let widths = [
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
//   '*',
// ];
let title = "Sales Register With Line Details";
let headers: any = [
    {
        header: "CH. NO.",
        key: "salesInvoiceNumber",
        ...EXCEL_STYLE
    },
    {
        header: "DATE",
        key: "salesInvoiceDateS",
        ...EXCEL_STYLE
    },
    {
        header: "SKU No.",
        key: "SKUCode",
        ...EXCEL_STYLE
    },
    {
        header: "SKU NAME",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "SKU DESCRIPTION",
        key: "SKUDescription",
        ...EXCEL_STYLE
    },
    {
        header: "CUSTOMER PART NO",
        key: "customerPartNo",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "HSNCode",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "QTY",
        key: "dispatchQty",
        ...EXCEL_STYLE
    },
    {
        header: "RATE",
        key: "salesInvoiceUnitRate",
        ...EXCEL_STYLE
    },
    {
        header: "BASIC AMT",
        key: "salesInvoiceLineValue",
        ...EXCEL_STYLE
    },
    {
        header: "T.D. 1.30%",
        key: "TD",
        ...EXCEL_STYLE
    },
    {
        header: "CGST/SGST Amount",
        key: "SGST_CGSTAmountWithTD",
        ...EXCEL_STYLE
    },
    {
        header: "IGST Amount",
        key: "IGSTAmountWithTD",
        ...EXCEL_STYLE
    },
    {
        header: "CGST 9%",
        key: "CGSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "SGST 9%",
        key: "SGSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "IGST 18%",
        key: "IGSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Tax Amount",
        key: "salesInvoiceTotalTaxAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Line Value With Tax",
        key: "lineValueWithTax",
        ...EXCEL_STYLE
    },
    {
        header: "PARTY NAME",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "BILL TO GST NO.",
        key: "GSTIN",
        ...EXCEL_STYLE
    },
    {
        header: "SHIP TO",
        key: "shipToCustomer",
        ...EXCEL_STYLE
    },
    {
        header: "SHIP TO GST NO",
        key: "shipToGSTIN",
        ...EXCEL_STYLE
    }
];

export const SALES_REGISTER_WITH_LINE_DETAILS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALES_REGISTER_WITH_LINE_DETAILS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, title});
};
