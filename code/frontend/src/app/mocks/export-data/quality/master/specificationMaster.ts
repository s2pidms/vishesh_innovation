import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Specification Master";
let headers: any = [
    {
        header: "Specs Code",
        key: "specificationCode",
        ...EXCEL_STYLE
    },
    {
        header: "Inspection Parameter",
        key: "characteristic",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Test Standard",
        key: "testStandard",
        ...EXCEL_STYLE
    },
    {
        header: "Test Method",
        key: "measuringInstrument",
        ...EXCEL_STYLE
    }
];
export const SPECIFICATION_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SPECIFICATION_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
