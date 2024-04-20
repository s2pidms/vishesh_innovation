import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Asset Reports';
let headers: any = [
  {
    header: 'Asset Code',
    key: 'assetCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Asset Name',
    key: 'assetName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Asset Type',
    key: 'assetType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Asset Description',
    key: 'assetDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Manufacturer',
    key: 'manufacturer',
    ...EXCEL_STYLE,
  },
];

export const ASSET_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const ASSET_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
