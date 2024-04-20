import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'SKU';
let headers: any = [
  {
    header: 'SKU Code',
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
    header: 'Product Category',
    key: 'productCategory',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer Part Number',
    key: 'customerPartNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'SKU Rate',
    key: 'standardSellingRate',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'primaryUnit',
    ...EXCEL_STYLE,
  },
];

export const SKU_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SKU_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
