import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*"];
let title = "ApplicationParameters Report";
let headers: any = [
    {
        header: 'App Param Code',
        key: 'appParameterCode',
        ...EXCEL_STYLE,
      },
      {
        header: 'App Code',
        key: 'appParameterAppCode',
        ...EXCEL_STYLE,
      },
      {
        header: 'Param Name',
        key: 'appParameterName',
        ...EXCEL_STYLE,
      },
      {
        header: ' Param Value',
        key: 'appParameterValue',
        ...EXCEL_STYLE,
      },
];
export const APPLICATION_PARAMETERS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const APPLICATION_PARAMETERS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
