import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Leave Application Report';
let headers: any = [
  {
    header: 'Employee Code',
    key: 'empCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Employee Name',
    key: 'empFullName',
    ...EXCEL_STYLE,
  },
  {
    header: 'From Date',
    key: 'fromDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'To Date',
    key: 'toDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Leave Type',
    key: 'leaveType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Half Day',
    key: 'halfDay',
    ...EXCEL_STYLE,
  },
  {
    header: 'Leave Days',
    key: 'leaveDays',
    ...EXCEL_STYLE,
  },
  {
    header: 'Approved By',
    key: 'approvedBy',
    ...EXCEL_STYLE,
  },
  {
    header: 'Approved Date',
    key: 'updatedAt',
    ...EXCEL_STYLE,
  },
];

export const LEAVE_APPLICATION_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const LEAVE_APPLICATION_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
