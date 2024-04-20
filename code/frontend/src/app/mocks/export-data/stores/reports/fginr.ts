import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Finished Goods Inward Report';
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
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
  {
    header: 'FGIN Qty',
    key: 'FGINQuantity',
    ...EXCEL_STYLE,
  },
  {
    header: 'Batch No',
    key: 'batchNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Mfg Date',
    key: 'manufacturingDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Exp Date',
    key: 'expiryDateS',
    ...EXCEL_STYLE,
  },
];
export const FINISHED_GOODS_INWARD_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const FINISHED_GOODS_INWARD_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
