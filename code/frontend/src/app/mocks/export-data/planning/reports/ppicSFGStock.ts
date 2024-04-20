import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'PPIC - SFG Stock Report';
let headers: any = [
  {
    header: 'Inward Date',
    key: 'GINDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN No.',
    key: 'MRNNumber',
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
    header: 'Stage',
    key: 'stage',
    ...EXCEL_STYLE,
  },
  {
    header: 'W X L',
    key: 'WXL',
    ...EXCEL_STYLE,
  },
  {
    header: 'Width',
    key: 'width',
    ...EXCEL_STYLE,
  },
  {
    header: 'Length',
    key: 'length',
    ...EXCEL_STYLE,
  },
  {
    header: '(C) Roll Qty',
    key: 'noOfSlits',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'Quantity',
    key: 'sqmTotal',
    ...EXCEL_STYLE,
  },
  {
    header: 'Aging',
    key: 'status',
    ...EXCEL_STYLE,
  },
];

export const PPIC_SFG_STOCK_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PPIC_SFG_STOCK_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
