import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Inventory Location wise Report';
let headers: any = [
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
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'Qty.',
    key: 'openIRQty',
    ...EXCEL_STYLE,
  },
];

export const INVENTORY_LOCATION_WISE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const INVENTORY_LOCATION_WISE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
