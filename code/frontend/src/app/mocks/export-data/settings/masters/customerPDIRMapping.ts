import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "CustomerPDIRMapping Report";
let headers: any = [
    {
        header: "Map Code",
        key: "mapCode",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Template",
        key: "template",
        ...EXCEL_STYLE
    }
];
export const CUSTOMER_PDIR_MAPPING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CUSTOMER_PDIR_MAPPING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
