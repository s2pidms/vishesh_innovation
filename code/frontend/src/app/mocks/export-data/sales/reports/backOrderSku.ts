import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Back Order Report SKU';
let headers: any = [
  {
    header: 'SKU',
    key: 'SKUNo',
   ...EXCEL_STYLE,
  },
  {
    header: 'SKU Name',
    key: 'SKUName',
   ...EXCEL_STYLE,
  },
  {
    header: 'SKU Description',
    key: 'SKUDescription',
   ...EXCEL_STYLE,
  },
  {
    header: 'Balance Qty',
    key: 'balancedQty',
   ...EXCEL_STYLE,
  },
  {
    header: 'Balance Value (₹)',
    key: 'balanceValue',
   ...EXCEL_STYLE,
  },
];

export const BACK_ORDER_REPORT_SKU_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const BACK_ORDER_REPORT_SKU_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
