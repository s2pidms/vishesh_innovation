import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Calibration and Verification Reports';
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
    header: 'Calibration Date',
    key: 'calibrationDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'Calibration Agency',
    key: 'calibrationAgency',
    ...EXCEL_STYLE,
  },
];

export const CALIBRATION_AND_VERIFICATION_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const CALIBRATION_AND_VERIFICATION_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
