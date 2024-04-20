import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Goods Receipt Note (GRN) Item Wise';
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
    header: 'Batch #/ Dt.',
    key: 'batchDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO Qty',
    key: 'balancedQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Inv. Qty',
    key: 'invoicedQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN Qty',
    key: 'GRNQty',
    ...EXCEL_STYLE,
  },
];

export const GOODS_RECEIPT_NOTE_ITEM_WISE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_RECEIPT_NOTE_ITEM_WISE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
