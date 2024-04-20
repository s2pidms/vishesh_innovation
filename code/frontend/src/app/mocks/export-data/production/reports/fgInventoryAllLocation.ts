import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'FG Inventory for All Location';
let headers: any = [
  {
    header: 'SKU No.',
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
    key: 'partNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'FG Qty',
    key: 'FGINQuantity',
    ...EXCEL_STYLE,
  },
  {
    header: 'Batch No.',
    key: 'batchNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Batch Date',
    key: 'manufacturingDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'B/B Date',
    key: 'expiryDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Aging',
    key: 'GIStatus',
    ...EXCEL_STYLE,
  },
  {
    header: 'Location',
    key: 'location',
    ...EXCEL_STYLE,
  },
];

export const FG_INVENTORY_FOR_ALL_LOCATION_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const FG_INVENTORY_FOR_ALL_LOCATION_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
