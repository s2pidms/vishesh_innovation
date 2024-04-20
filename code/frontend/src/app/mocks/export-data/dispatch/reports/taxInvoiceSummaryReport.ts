import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Tax Invoice Summary Report';
let headers: any = [
  {
    header: 'Invoice No.',
    key: 'salesInvoiceNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoice Date',
    key: 'salesInvoiceDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Taxable Amount',
    key: 'salesInvoiceTotalAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Tax',
    key: 'salesInvoiceTotalTaxAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Invoice Amount',
    key: 'salesInvoiceTotalAmountWithTax',
    ...EXCEL_STYLE,
  },
];

export const TAX_INVOICE_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const TAX_INVOICE_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
