import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Inventory Report';
let headers: any = [
  {
    header: 'GIN Date',
    key: 'GINDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN No',
    key: 'MRN',
    ...EXCEL_STYLE,
  },
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
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'Qty.',
    key: 'closedIRQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Net Value',
    key: 'purchaseRatINR',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Value INR',
    key: 'itemValueINR',
    ...EXCEL_STYLE,
  },
];

export const INVENTORY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const INVENTORY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
