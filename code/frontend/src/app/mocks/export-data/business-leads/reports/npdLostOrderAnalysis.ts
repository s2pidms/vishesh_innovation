import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'NPD Lost Order analysis Report';
let headers: any = [
  {
    header: 'NPD No.',
    key: 'NPDNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'NPD Date',
    key: 'NPDDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Project Name',
    key: 'projectName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer/Prospect Name',
    key: 'name',
    ...EXCEL_STYLE,
  },
  {
    header: 'Product Category',
    key: 'productCategory',
    ...EXCEL_STYLE,
  },
  {
    header: 'Status',
    key: 'status',
    ...EXCEL_STYLE,
  },
];

export const NPD_LOST_ORDER_ANALYSIS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const NPD_LOST_ORDER_ANALYSIS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
