import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = 'DispatchRequestNote Report';
let headers: any =  [
    {
        header: "DRN No.",
        key: "DRNNumber",
        ...EXCEL_STYLE
    },
    {
        header: "DRN Date",
        key: "DRNDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Category",
        key: "salesCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "DRN Status",
        key: "DRNStatus",
        ...EXCEL_STYLE
    }
];
export const DISPATCH_REQUEST_NOTE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DISPATCH_REQUEST_NOTE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
