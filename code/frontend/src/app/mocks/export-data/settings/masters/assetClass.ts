import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = 'Asset Class';
let headers: any = [
  {
    header: 'Order',
    key: 'order',
    ...EXCEL_STYLE,
  },
  {
    header: 'Asset Class Name',
    key: 'assetClassName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Prefix',
    key: 'prefix',
    ...EXCEL_STYLE,
  },
  {
    header: 'Depreciation',
    key: 'depreciation',
    ...EXCEL_STYLE,
  },
  {
    header: 'Energy Specification',
    key: 'energySpecification',
    ...EXCEL_STYLE,
  },
  {
    header: 'Type',
    key: 'type',
    ...EXCEL_STYLE,
  },
];

export const ASSET_CLASS_MASTER_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const ASSET_CLASS_MASTER_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
