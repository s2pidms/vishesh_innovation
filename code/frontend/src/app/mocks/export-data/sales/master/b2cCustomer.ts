import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "B2C Customer Master";
let headers: any =  [
    {
      header: 'Customer Name',
      key: 'customerName',
      ...EXCEL_STYLE,
    },
    {
      header: 'Mobile',
      key: 'mobileNo',
      ...EXCEL_STYLE,
    },
    {
      header: 'E-mail ID',
      key: 'emailId',
      ...EXCEL_STYLE,
    },
    {
      header: 'State of Supply',
      key: 'stateOfSupply',
      ...EXCEL_STYLE,
    },
    {
      header: 'Address Line 1',
      key: 'line1',
      ...EXCEL_STYLE,
    },
    {
      header: 'Address Line 2',
      key: 'line2',
      ...EXCEL_STYLE,
    },
    {
      header: 'City/District',
      key: 'district',
      ...EXCEL_STYLE,
    },
    {
      header: 'Pin Code',
      key: 'pinCode',
      ...EXCEL_STYLE,
    },
    {
      header: 'state',
      key: 'state',
      ...EXCEL_STYLE,
    },
    {
      header: 'Country',
      key: 'country',
      ...EXCEL_STYLE,
    },
  ];
export const B2C_CUSTOMER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const B2C_CUSTOMER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
