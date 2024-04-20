import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "NPD Review for Feasibility";
let headers: any = [
    {
        header: "NPD No",
        key: "NPDNo",
        ...EXCEL_STYLE
    },
    {
        header: "NPD Date",
        key: "NPDDate",
        ...EXCEL_STYLE
    },
    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Product Code",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "EDD",
        key: "expectedDeliveryDate",
        ...EXCEL_STYLE
    },
    {
        header: "Inputs",
        key: "customerInputs",
        ...EXCEL_STYLE
    },
    {
        header: "T",
        key: "technicalReview",
        ...EXCEL_STYLE
    },
    {
        header: "E",
        key: "economicReview",
        ...EXCEL_STYLE
    },
    {
        header: "L",
        key: "legalReview",
        ...EXCEL_STYLE
    },
    {
        header: "O",
        key: "operationalReview",
        ...EXCEL_STYLE
    },
    {
        header: "S",
        key: "schedulingReview",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const NPD_REVIEW_FOR_FEASIBILITY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const NPD_REVIEW_FOR_FEASIBILITY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
