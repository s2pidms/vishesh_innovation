import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39];
let title = 'Inventory Report';
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
    header: ' Item Description',
    key: 'itemDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'Quantity',
    key: 'closedIRQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Unit Rate',
    key: 'purchaseRatINR',
    ...EXCEL_STYLE,
  },
  {
    header: 'Line Value',
    key: 'lineValue',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN No.',
    key: 'MRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Batch Date',
    key: 'batchDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'B/B Date',
    key: 'expiryDate',
    ...EXCEL_STYLE,
  },
  {
    header: "Supplier N'/Name",
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Location',
    key: 'deliveryLocation',
    ...EXCEL_STYLE,
  },
];

export const INVENTORY_NAME_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const INVENTORY_REPORT_NAME_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
