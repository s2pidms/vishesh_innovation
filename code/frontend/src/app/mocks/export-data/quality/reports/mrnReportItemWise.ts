import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39];
let title = 'MRN Report - Item Wise';
let headers: any = [
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
    header: 'GRN No.',
    key: 'GRNNumber',
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
    header: 'Batch No.',
    key: 'batchNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Batch Dt.',
    key: 'batchDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN Qty.',
    key: 'GRNQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Rel Qty.',
    key: 'releasedQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Rej Qty.',
    key: 'rejectedQty',
    ...EXCEL_STYLE,
  },
];

export const MRN_REPORT_ITEM_WISE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const MRN_REPORT_ITEM_WISE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
