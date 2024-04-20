import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'NPD Status Report';
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
    header: 'EDD',
    key: 'expectedDeliveryDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Status',
    key: 'status',
    ...EXCEL_STYLE,
  },
];

export const NPD_STATUS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const NPD_STATUS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
