import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [63, 63, 63, 63, 63, 63, 63, 63];
let title = 'Customer';
let headers: any = [
  {
    header: 'Customer Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Category',
    key: 'customerCategory',
    ...EXCEL_STYLE,
  },
  {
    header: 'City',
    key: 'customerCity',
    ...EXCEL_STYLE,
  },
  {
    header: 'State',
    key: 'customerState',
    ...EXCEL_STYLE,
  },
  {
    header: 'Pin Code',
    key: 'customerPinCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Contact Person',
    key: 'customerContactPersonName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Contact Number',
    key: 'customerContactPersonNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Email',
    key: 'customerContactPersonEmail',
    ...EXCEL_STYLE,
  },
];

export const CUSTOMER_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const CUSTOMER_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
