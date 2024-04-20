import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*'];
let title = 'Inward Trend Analysis Report';
let headers: any = [
  {
    header: 'Month',
    key: 'month',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Inwarded Quantity',
    key: 'totalInwardQty',
    ...EXCEL_STYLE,
  },
  {
    header: ' Total Inwarded Value',
    key: 'totalInwardValue',
    ...EXCEL_STYLE,
  },
];

export const INWARD_TREND_ANALYSIS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const INWARD_TREND_ANALYSIS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
