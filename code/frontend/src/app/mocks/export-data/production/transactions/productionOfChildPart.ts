import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Child Part Production";
let headers: any = [
    {
      header: 'Process Name',
      key: 'processName',
      ...EXCEL_STYLE,
    },
    {
      header: 'Machine Name',
      key: 'machineName',
      ...EXCEL_STYLE,
    },
    {
      header: 'Prod. Date',
      key: 'productionDate',
      ...EXCEL_STYLE,
    },
    {
      header: 'Shift',
      key: 'productionShift',
      ...EXCEL_STYLE,
    },
    {
      header: 'Operating Staff',
      key: 'operatingStaff',
      ...EXCEL_STYLE,
    },
    {
      header: 'Remarks',
      key: 'remarks',
      ...EXCEL_STYLE,
    },
    {
      header: 'Status',
      key: 'status',
      ...EXCEL_STYLE,
    },
  ];
export const PRODUCTION_OF_CHILD_PART_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PRODUCTION_OF_CHILD_PART_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
