import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*'];
let title = 'Purchase Vs Invoice Report';
let headers: any = [
  {
    header: 'Month',
    key: 'months',
    ...EXCEL_STYLE,
  },
  {
    header: 'Purchases (In lakh)',
    key: 'purchase',
    ...EXCEL_STYLE,
  },
  {
    header: 'Orders Booked (In lakh)',
    key: 'ordersBooked',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoices (In lakh)',
    key: 'invoices',
    ...EXCEL_STYLE,
  },
];

export const PURCHASE_VS_INVOICE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PURCHASE_VS_INVOICE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
