import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*'];
let title = 'PPV Summery';
let headers: any = [
  {
    header: 'Item Category',
    key: 'itemType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total PPV',
    key: 'totalPPV',
    ...EXCEL_STYLE,
  },
  {
    header: 'Percentage Variance',
    key: 'PPVRatio',
    ...EXCEL_STYLE,
  },
];

export const PPV_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PPV_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
