import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Service Master List";
let headers: any = [
  {
    header: 'Service Code',
    key: 'serviceCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Service Description',
    key: 'serviceDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'SAC',
    key: 'sacCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'GST',
    key: 'gst',
    ...EXCEL_STYLE,
  },
  {
    header: 'IGST',
    key: 'igst',
    ...EXCEL_STYLE,
  },
  {
    header: 'CGST',
    key: 'cgst',
    ...EXCEL_STYLE,
  },
  {
    header: 'SGST',
    key: 'sgst',
    ...EXCEL_STYLE,
  },
];
export const SERVICE_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SERVICE_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
