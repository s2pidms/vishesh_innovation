import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Employee Attendance Report';
let headers: any = [
  {
    header: 'Employee Code',
    key: 'employeeCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Employee Name',
    key: 'employeeName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Month Days',
    key: 'monthDays',
    ...EXCEL_STYLE,
  },
  {
    header: 'Weekly Off',
    key: 'weeklyOff',
    ...EXCEL_STYLE,
  },
  {
    header: 'Paid Holidays',
    key: 'paidHolidays',
    ...EXCEL_STYLE,
  },
  {
    header: 'Paid Leaves',
    key: 'paidLeaves',
    ...EXCEL_STYLE,
  },
  {
    header: 'Present Days',
    key: 'presentDays',
    ...EXCEL_STYLE,
  },
  {
    header: 'LOP[Diff]',
    key: 'LOPDiff',
    ...EXCEL_STYLE,
  },
  {
    header: 'Status',
    key: 'status',
    ...EXCEL_STYLE,
  },
];
export const EMPLOYEE_ATTENDANCE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const EMPLOYEE_ATTENDANCE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
