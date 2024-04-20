import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Goods Receipt Note Discrepancy';
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
    header: 'Supplier',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO #',
    key: 'PONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Code',
    key: 'itemCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Description',
    key: 'itemDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO Qty',
    key: 'POQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Received Qty',
    key: 'GRNQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Discrepancy',
    key: 'discrepancy',
    ...EXCEL_STYLE,
  },
];

export const GOODS_RECEIPT_NOTE_DISCREPANCY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_RECEIPT_NOTE_DISCREPANCY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
