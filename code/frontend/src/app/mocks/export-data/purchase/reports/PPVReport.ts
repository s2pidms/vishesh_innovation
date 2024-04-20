import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'PPV Report';
let headers: any = [
  {
    header: 'PO #',
    key: 'PONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'PO Date',
    key: 'PODateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
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
    header: 'Qty.',
    key: 'POQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Std. Rate',
    key: 'standardRate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Purchase Rate',
    key: 'purchaseRate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Diff.',
    key: 'diff',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Spend',
    key: 'totalSpend',
    ...EXCEL_STYLE,
  },
  {
    header: 'PPV',
    key: 'PPV',
    ...EXCEL_STYLE,
  },
];

export const PPV_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PPV_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
