import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = 'Employee Exit Report';
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
    header: 'Joining Date',
    key: 'empJoiningDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Department',
    key: 'empDepartment',
    ...EXCEL_STYLE,
  },
  {
    header: 'Grade',
    key: 'empGrade',
    ...EXCEL_STYLE,
  },
  {
    header: 'Exit Date',
    key: 'empDateOfResignationS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Reason for Leaving',
    key: 'reasonOfLeaving',
    ...EXCEL_STYLE,
  },
];
export const EMPLOYEE_EXIT_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const EMPLOYEE_EXIT_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
