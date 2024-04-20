import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [63, 63, 63, 63, 63, 63, 63, 63];
let title = 'Supplier';
let headers: any = [
  {
    header: 'Supplier Code',
    key: 'supplierCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Type',
    key: 'supplierPurchaseType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Contact Person',
    key: 'supplierContactPersonName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Phone #',
    key: 'supplierContactPersonNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Email',
    key: 'supplierContactPersonEmail',
    ...EXCEL_STYLE,
  },
  {
    header: 'State',
    key: 'supplierState',
    ...EXCEL_STYLE,
  },
  {
    header: 'City',
    key: 'supplierCity',
    ...EXCEL_STYLE,
  },
];

export const SUPPLIER_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SUPPLIER_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
