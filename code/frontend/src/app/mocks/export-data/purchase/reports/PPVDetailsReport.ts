import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Detail PPV Report';
let headers: any = [
  {
    header: 'Item Code',
    key: 'itemCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Description',
    key: 'itemDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Purchase Order',
    key: 'PONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'Qty.',
    key: 'POQty',
    ...EXCEL_STYLE,
  },

  {
    header: 'Actual Price',
    key: 'actualPrice',
    ...EXCEL_STYLE,
  },
  {
    header: 'Standard Price.',
    key: 'standardPrice',
    ...EXCEL_STYLE,
  },
  {
    header: 'Variance',
    key: 'variance',
    ...EXCEL_STYLE,
  },
  {
    header: 'Variance (%)',
    key: 'variancePercentage',
    ...EXCEL_STYLE,
  },
];

export const PPV_DETAILS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PPV_DETAILS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
