import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'Purchase Order Summary Report';
let headers: any = [
  {
    header: 'Supplier',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Date Range',
    key: 'dateRange',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Category',
    key: 'itemCategory',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Orders',
    key: 'totalOrders',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Amount (INR)',
    key: 'totalAmount',
    ...EXCEL_STYLE,
  },
  {
    header: 'Average Order Value (INR)',
    key: 'avgOrderValue',
    ...EXCEL_STYLE,
  },
];

export const PURCHASE_ORDER_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PURCHASE_ORDER_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
