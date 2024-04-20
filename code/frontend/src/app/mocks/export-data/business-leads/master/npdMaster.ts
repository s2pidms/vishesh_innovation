import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "NPD Master";
let headers: any = [
    {
      header: 'SKU stage',
      key: 'SKUStage',
      ...EXCEL_STYLE,
    },
    {
      header: 'D-SKU No.',
      key: 'dSKUNo',
      ...EXCEL_STYLE,
    },
    {
      header: 'D-SKU Name',
      key: 'SKUName',
      ...EXCEL_STYLE,
    },
    {
      header: 'D-SKU Description',
      key: 'SKUDescription',
      ...EXCEL_STYLE,
    },
    {
      header: 'Product',
      key: 'productCategory',
      ...EXCEL_STYLE,
    },
    {
      header: 'HSN Code',
      key: 'hsn',
      ...EXCEL_STYLE,
    },
    {
      header: 'UoM',
      key: 'primaryUnit',
      ...EXCEL_STYLE,
    },
  ];
export const NPD_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const NPD_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
