import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Stock Aging Report';
let headers: any = [
  {
    header: 'Item Code',
    key: 'itemCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Name',
    key: 'itemName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Description',
    key: 'itemDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'GIN Date',
    key: 'GINDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'GIN Qty',
    key: 'GINQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Perishable',
    key: 'perishableGoods',
    ...EXCEL_STYLE,
  },
  {
    header: 'Shelf Life (Months)',
    key: 'shelfLife',
    ...EXCEL_STYLE,
  },
  {
    header: 'Expiry Date',
    key: 'expiryDate',
    ...EXCEL_STYLE,
  },
];

export const STOCK_AGING_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const STOCK_AGING_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
