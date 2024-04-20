import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'Shipment Report';
let headers: any = [
  {
    header: 'Shipment ID',
    key: 'SPNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Shipment Date',
    key: 'createdAtS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Destination',
    key: 'city',
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
    header: 'Shipment Value',
    key: 'shipmentValue',
    ...EXCEL_STYLE,
  },
];

export const SHIPMENT_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SHIPMENT_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
