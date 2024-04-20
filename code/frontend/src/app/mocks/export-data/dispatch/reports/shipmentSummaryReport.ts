import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*'];
let title = 'Shipment Summary Report';
let headers: any = [
  {
    header: 'Shipment No.',
    key: 'SPNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Date',
    key: 'createdAtS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Quantity',
    key: 'dispatchQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Shipment Value',
    key: 'shipmentValue',
    ...EXCEL_STYLE,
  },
];

export const SHIPMENT_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SHIPMENT_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
