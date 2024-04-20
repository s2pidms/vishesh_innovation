import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'Service Purchase Order';
let headers: any = [
  {
    header: 'SPO #',
    key: 'SPONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'SPO Date',
    key: 'SPODateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'SPO Value',
    key: 'netSPOValue',
    ...EXCEL_STYLE,
  },
  {
    header: 'Status',
    key: 'SPOStatus',
    ...EXCEL_STYLE,
  },
];

export const SERVICE_PURCHASE_ORDER_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SERVICE_PURCHASE_ORDER_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
