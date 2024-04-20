import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'Credit Note';
let headers: any = [
  {
    header: ' CN No.',
    key: 'CNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: ' CN Date',
    key: 'CNDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Category',
    key: 'salesCategory',
    ...EXCEL_STYLE,
  },
  {
    header: ' Customer Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'CN Value',
    key: 'netCNValue',
    ...EXCEL_STYLE,
  },
];

export const CREDIT_NOTE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const CREDIT_NOTE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
