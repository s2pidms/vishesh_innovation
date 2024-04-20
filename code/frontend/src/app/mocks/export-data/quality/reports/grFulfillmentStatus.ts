import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Goods Requisition Fulfillment Status';
let headers: any = [
  {
    header: 'GR No.',
    key: 'GRNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'GR Date',
    key: 'GRDate',
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
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'GR Qty',
    key: 'GRQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Issue Qty',
    key: 'GIQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Issue Date',
    key: 'GIDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'GR Status',
    key: 'GIStatus',
    ...EXCEL_STYLE,
  },
];

export const GOODS_REQUISITION_FULFILLMENT_STATUS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_REQUISITION_FULFILLMENT_STATUS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
