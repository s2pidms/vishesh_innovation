import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'ServiceInvoice Report';
let headers: any =  [
    {
      header: 'Invoice #',
      key: 'serviceInvoiceNumber',
      ...EXCEL_STYLE,
    },
    {
      header: 'Invoice Date',
      key: 'serviceInvoiceDate',
      ...EXCEL_STYLE,
    },
    {
      header: 'Customer Category',
      key: 'customerCategory',
      ...EXCEL_STYLE,
    },
    {
      header: 'Customer Name',
      key: 'customerName',
      ...EXCEL_STYLE,
    },
    {
      header: 'PO No.',
      key: 'PONo',
      ...EXCEL_STYLE,
    },
    {
      header: 'PO Date',
      key: 'PODate',
      ...EXCEL_STYLE,
    },
    {
      header: 'Currency',
      key: 'currency',
      ...EXCEL_STYLE,
    },
    {
      header: 'Bill From Location',
      key: 'billFromLocation',
      ...EXCEL_STYLE,
    },
    {
      header: 'Total Value',
      key: 'totalValue',
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
export const SERVICE_INVOICE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SERVICE_INVOICE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
