import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*'];
let title = 'Tax Invoice Trend Analysis Report';
let headers: any = [
  {
    header: 'Month',
    key: 'month',
    ...EXCEL_STYLE,
  },
  {
    header: 'Year',
    key: 'YYYY',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Sales Amount',
    key: 'SOTotalAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Invoice Amount',
    key: 'totalInvoiceAmount',
    ...EXCEL_STYLE,
  },
];

export const TAX_INVOICE_TREND_ANALYSIS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const TAX_INVOICE_TREND_ANALYSIS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
