import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*'];
let title = 'Debit Note Summary';
let headers: any = [
  {
    header: ' Supplier',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: ' Total Debit Notes',
    key: 'totalDebitNotes',
    ...EXCEL_STYLE,
  },
  {
    header: ' Total Amount Debited (INR)',
    key: 'totalAmountDebited',
    ...EXCEL_STYLE,
  },
];

export const DEBIT_NOTE_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const DEBIT_NOTE_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
