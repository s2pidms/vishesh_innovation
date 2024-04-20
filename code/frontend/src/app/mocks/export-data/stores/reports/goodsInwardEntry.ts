import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Goods Inward Entry';
let headers: any = [
  {
    header: 'GIN Dt.',
    key: 'GINDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN No.',
    key: 'MRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN Dt.',
    key: 'MRNDate',
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
    header: 'Batch #/Dt.',
    key: 'batchDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoice Dt.',
    key: 'supplierInvoiceDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'GIN Qty',
    key: 'GINQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Location',
    key: 'deliveryLocation',
    ...EXCEL_STYLE,
  },
];
export const GOODS_INWARD_ENTRY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_INWARD_ENTRY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
