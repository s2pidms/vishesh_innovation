import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [45, 45, 60, 60, 45, 45, 45, 45, 45, 45];
let title = 'Sales Register';
let headers: any = [
  {
    header: 'Invoice #',
    key: 'salesInvoiceNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoice Date',
    key: 'salesInvoiceDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer GST',
    key: 'GSTIN',
    ...EXCEL_STYLE,
  },
  {
    header: 'Taxable Amt.',
    key: 'salesInvoiceTotalAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total CGST Amount',
    key: 'salesInvoiceTotalCGSTAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total SGST Amount',
    key: 'salesInvoiceTotalSGSTAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total IGST Amount',
    key: 'salesInvoiceTotalIGSTAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Tax',
    key: 'salesInvoiceTotalTaxAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoice Amount With Tax',
    key: 'salesInvoiceTotalAmountWithTax',
    ...EXCEL_STYLE,
  },
];

export const SALES_REGISTER_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SALES_REGISTER_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
