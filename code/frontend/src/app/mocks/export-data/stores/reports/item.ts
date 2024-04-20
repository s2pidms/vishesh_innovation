import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Item';
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
    header: 'Category',
    key: 'itemType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'orderInfoUOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'AMU Qty',
    key: 'itemAMU',
    ...EXCEL_STYLE,
  },
  {
    header: 'ROL Qty',
    key: 'itemROL',
    ...EXCEL_STYLE,
  },
  {
    header: 'Unit Price',
    key: 'unitPrice',
    ...EXCEL_STYLE,
  },
];

export const ITEM_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const ITEM_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
