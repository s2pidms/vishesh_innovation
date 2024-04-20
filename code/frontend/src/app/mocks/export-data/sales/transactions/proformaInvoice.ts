import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Proforma Invoice";
let headers: any =  [
  {
    header: 'PI No.',
    key: 'PINumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'PI Date',
    key: 'PIDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Bill From Location',
    key: 'billFromLocation',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Category',
    key: 'salesCategory',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO No.',
    key: 'PONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO Date',
    key: 'PODate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },

  {
    header: 'PI Validity Date',
    key: 'PIValidityDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'PI Amount',
    key: 'PITotalAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'PI Status',
    key: 'PIStatus',
    ...EXCEL_STYLE,
  },
];
export const PROFORMA_INVOICE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROFORMA_INVOICE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
