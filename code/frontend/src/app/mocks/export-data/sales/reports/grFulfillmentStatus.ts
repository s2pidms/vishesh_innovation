import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = 'D-SKU to SKU Conversion';
let headers: any = [
  {
    header: 'SKU NO.',
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
    header: 'Customer Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'NPD Approved Date',
    key: 'NPDApprovedDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'NPD Conversion Date',
    key: 'SKUConversionDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Days For Conversion',
    key: 'daysForConversion',
    ...EXCEL_STYLE,
  },
];

export const D_SKU_TO_SKU_CONVERSION_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const D_SKU_TO_SKU_CONVERSION_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};

