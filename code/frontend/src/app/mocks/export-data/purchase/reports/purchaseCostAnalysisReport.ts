import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Purchase Cost Analysis';
let headers: any = [
  {
    header: 'Item Name',
    key: 'itemName',
    ...EXCEL_STYLE,
  },
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
    header: 'Total Orders',
    key: 'totalOrders',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Cost',
    key: 'totalTotalCost',
    ...EXCEL_STYLE,
  },
  {
    header: 'Average Cost',
    key: 'averageCost',
    ...EXCEL_STYLE,
  },
  {
    header: 'Average Cost',
    key: 'minCost',
    ...EXCEL_STYLE,
  },
  {
    header: 'Average Cost',
    key: 'maxCost',
    ...EXCEL_STYLE,
  },
];

export const PURCHASE_COST_ANALYSIS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PURCHASE_COST_ANALYSIS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
