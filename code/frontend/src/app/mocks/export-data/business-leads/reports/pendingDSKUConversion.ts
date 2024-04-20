import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = [73, 73, 73, 73, 73, 73, 73];
let title = 'Pending D-SKU Conversion Report';
let headers: any = [
  {
    header: 'D-SKU NO.',
    key: 'dSKUNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'D-SKU Name',
    key: 'SKUName',
    ...EXCEL_STYLE,
  },
  {
    header: 'D-SKU Description',
    key: 'SKUDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Customer/Prospect Name',
    key: 'customerName',
    ...EXCEL_STYLE,
  },
  {
    header: 'NPD Request Date',
    key: 'NPDDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'NPD Approved Date',
    key: 'NPDUpdatedAt',
    ...EXCEL_STYLE,
  },
  {
    header: 'Days Pending',
    key: 'daysPending',
    ...EXCEL_STYLE,
  },
];
export const PENDING_D_SKU_CONVERSION_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PENDING_D_SKU_CONVERSION_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
