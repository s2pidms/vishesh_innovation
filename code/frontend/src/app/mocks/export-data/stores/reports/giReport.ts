import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Goods Receipt Note Report';
let headers: any = [
  {
    header: 'GRN #',
    key: 'GRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN Date',
    key: 'GRNDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO #',
    key: 'PONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Invoice #',
    key: 'supplierInvoiceRef',
    ...EXCEL_STYLE,
  },
];

export const GOODS_RECEIPT_NOTE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_RECEIPT_NOTE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
