import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'Reorder Level Report';
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
    header: 'Reorder Level',
    key: 'reorderLevel',
    ...EXCEL_STYLE,
  },
  {
    header: 'Current Stock',
    key: 'totalGINQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Reorder Level Status',
    key: 'reorderLevelStatus',
    ...EXCEL_STYLE,
  },
];

export const REORDER_LEVEL_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const REORDER_LEVEL_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
