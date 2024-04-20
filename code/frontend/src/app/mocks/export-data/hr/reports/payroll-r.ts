import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Payroll Report';
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
    header: 'Department',
    key: 'department',
    ...EXCEL_STYLE,
  },
  {
    header: 'Paid Days',
    key: 'paidDays',
    ...EXCEL_STYLE,
  },
  {
    header: 'Gross',
    key: 'gross',
    ...EXCEL_STYLE,
  },
  {
    header: 'PF',
    key: 'PF',
    ...EXCEL_STYLE,
  },
  {
    header: 'ESIC',
    key: 'ESIC',
    ...EXCEL_STYLE,
  },
  {
    header: 'TDS',
    key: 'TDS',
    ...EXCEL_STYLE,
  },
  {
    header: 'PT',
    key: 'PT',
    ...EXCEL_STYLE,
  },
  {
    header: 'Adv. Salary',
    key: 'advSalary',
    ...EXCEL_STYLE,
  },
  {
    header: 'Net Payable',
    key: 'netPayable',
    ...EXCEL_STYLE,
  },
];

export const PAYROLL_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PAYROLL_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
