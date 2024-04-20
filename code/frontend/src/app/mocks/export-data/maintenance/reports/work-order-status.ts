import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Work Order Status Report';
let headers: any = [
  {
    header: 'Work Order ID',
    key: 'workOrderCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Equipment Code',
    key: 'equipmentCode',
    ...EXCEL_STYLE,
  },
  {
    header: '  Equipment Name',
    key: 'equipmentName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Priority',
    key: 'priority',
    ...EXCEL_STYLE,
  },
  {
    header: 'Status',
    key: 'status',
    ...EXCEL_STYLE,
  },
  {
    header: 'Assigned Technician',
    key: 'technicianName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Scheduled Date',
    key: 'scheduleDate',
    ...EXCEL_STYLE,
  },
  {
    header: ' Completion Date',
    key: 'completionDate',
    ...EXCEL_STYLE,
  },
];

export const WORK_ORDER_STATUS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const WORK_ORDER_STATUS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
