import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [55,55,55,55,55,55,55,55,55];
let title = 'Sales Cost Analysis';
let headers: any = [
        {
          header: 'SKU Name',
          key: 'SKUName',
          ...EXCEL_STYLE,
        },
        {
          header: 'Customer',
          key: 'customerName',
          ...EXCEL_STYLE,
        },
        {
          header: 'Currency',
          key: 'currency',
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
          header: 'Min Value',
          key: 'minCost',
          ...EXCEL_STYLE,
        },
        {
          header: 'Max Value',
          key: 'maxCost',
          ...EXCEL_STYLE,
        },
      ];

export const SALES_COST_ANALYSIS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SALES_COST_ANALYSIS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};

