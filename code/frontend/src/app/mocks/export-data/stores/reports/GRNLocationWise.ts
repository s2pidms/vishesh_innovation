import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'GRN Location wise Report';
let headers: any = [
  {
    header: 'GRN No.',
    key: 'GRNNumber',
    ...EXCEL_STYLE,
  },

  {
    header: 'GRN Dt.',
    key: 'GRNDate',
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
    header: 'Item Description',
    key: 'itemDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Location',
    key: 'deliveryLocation',
    ...EXCEL_STYLE,
  },
  {
    header: 'Sub-Location',
    key: 'subLocation',
    ...EXCEL_STYLE,
  },
  {
    header: 'Row No.',
    key: 'rowNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Rack No.',
    key: 'rackNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Bin No.',
    key: 'binNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Other ID',
    key: 'otherId',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN Qty',
    key: 'GRNQty',
    ...EXCEL_STYLE,
  },
];

export const GRN_LOCATION_WISE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GRN_LOCATION_WISE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
