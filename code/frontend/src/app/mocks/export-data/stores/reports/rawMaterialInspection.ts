import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'SKU';
let headers: any = [
  {
    header: 'MRN No.',
    key: 'MRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN Date',
    key: 'MRNDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN No',
    key: 'GRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Status',
    key: 'MRNStatus',
    ...EXCEL_STYLE,
  },
];

export const RAW_MATERIAL_INSPECTION_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const RAW_MATERIAL_INSPECTION_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
