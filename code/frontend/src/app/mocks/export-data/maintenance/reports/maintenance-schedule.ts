import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Maintenance Schedule Reports';
let headers: any = [
  {
    header: 'Equipment Code',
    key: 'equipmentCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Equipment Name',
    key: 'equipmentName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Equipment Category',
    key: 'equipmentType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Maintenance Type',
    key: 'taskCategory',
    ...EXCEL_STYLE,
  },
  {
    header: 'Maintenance Date',
    key: 'createdAt',
    ...EXCEL_STYLE,
  },
];

export const MAINTENANCE_SCHEDULE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const MAINTENANCE_SCHEDULE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
