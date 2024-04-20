import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'FG Correction History';
let headers: any = [
  {
    header: 'FG Date',
    key: 'FGDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'SKU No ',
    key: 'SKUNo',
    ...EXCEL_STYLE,
  },
  {
    header: ' SKU Name',
    key: 'SKUName',
    ...EXCEL_STYLE,
  },

  {
    header: 'SKU Description',
    key: 'SKUDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Correction Type',
    key: 'correctionCategory',
    ...EXCEL_STYLE,
  },
  {
    header: 'Source Batch',
    key: 'sourceBatch',
    ...EXCEL_STYLE,
  },
  {
    header: 'Destination Batch',
    key: 'destinationBatch',
    ...EXCEL_STYLE,
  },
  {
    header: 'Transfer Qty',
    key: 'transferQty',
    ...EXCEL_STYLE,
  },
  {
    header: ' Available Source Qty',
    key: 'availableSourceQty',
    ...EXCEL_STYLE,
  },
];

export const FG_CORRECTION_HISTORY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const FG_CORRECTION_HISTORY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
