import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
  32,
];
let title = 'Sales Forecast';
let headers: any = [
  {
    header: 'FC No.',
    key: 'FCNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'FC Date',
    key: 'FCDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'SKU Code',
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
    header: 'Part No.',
    key: 'customerPartNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'FC Qty',
    key: 'quantity',
    ...EXCEL_STYLE,
  },
  {
    header: 'Ccy',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'Net Rate',
    key: 'netRate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Line Value',
    key: 'lineValue',
    ...EXCEL_STYLE,
  },
  {
    header: 'Cust. Nick Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'R/S',
    key: 'scheduleNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Rel. Date',
    key: 'dispatchDate',
    ...EXCEL_STYLE,
  },
];

export const SALES_FORECAST_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SALES_FORECAST_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
