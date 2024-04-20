import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*','*','*','*','*'];
let title = 'Proforma Invoice';
let headers: any = [
  {
    header: 'Invoice #',
    key: 'PINumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoice Date',
    key: 'PIDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoice Value',
    key: 'PITotalAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Category',
    key: 'salesCategory',
    ...EXCEL_STYLE,
  },
];

export const PROFORMA_INVOICE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PROFORMA_INVOICE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
