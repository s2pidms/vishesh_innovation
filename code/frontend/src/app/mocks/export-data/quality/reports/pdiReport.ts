import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*'];
let title = 'PDI Report';
let headers: any = [
  {
    header: 'PDIR #',
    key: 'preDispatchCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'PDIR Date',
    key: 'preDispatchDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
];

export const PDI_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PDI_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
