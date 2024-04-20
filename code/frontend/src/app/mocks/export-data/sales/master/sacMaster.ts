import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Sales SAC List";
let headers: any = [
    {
        header: "SAC Code",
        key: "sacCode",
        ...EXCEL_STYLE
    },
    {
        header: "Description of Service",
        key: "serviceDescription",
        ...EXCEL_STYLE
    },
    {
        header: "GST Rate",
        key: "gstRate",
        ...EXCEL_STYLE
    },
    {
        header: "IGST Rate",
        key: "igstRate",
        ...EXCEL_STYLE
    },
    {
        header: "SGST Rate",
        key: "sgstRate",
        ...EXCEL_STYLE
    },
    {
        header: "CGST Rate",
        key: "cgstRate",
        ...EXCEL_STYLE
    },
    {
        header: "	UGST Rate",
        key: "ugstRate",
        ...EXCEL_STYLE
    },
    {
        header: "Revision No.",
        key: "revisionNo",
        ...EXCEL_STYLE
    },
    {
        header: "Revision Date",
        key: "revisionDate",
        ...EXCEL_STYLE
    }
];
export const SAC_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SAC_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
