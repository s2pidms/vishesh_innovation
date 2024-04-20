import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Outstanding PO report';
let headers: any = [
  {
    header: 'PO #',
    key: 'PONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO Date',
    key: 'PODateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
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
    header: 'PO Qty',
    key: 'POQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN Qty',
    key: 'GRNQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Balanced Qty',
    key: 'balancedQty',
    ...EXCEL_STYLE,
  },
];

export const OUTSTANDING_PO_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const OUTSTANDING_PO_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
