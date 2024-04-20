import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'PPV by Supplier';
let headers: any = [
  {
    header: 'Supplier',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Category',
    key: 'itemType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total PPV',
    key: 'totalPPV',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Quantity Purchased',
    key: 'totalQuantityPurchased',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Purchase Amount',
    key: 'totalPurchaseAmount',
    ...EXCEL_STYLE,
  },
];

export const PPV_BY_SUPPLIER_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PPV_BY_SUPPLIER_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
