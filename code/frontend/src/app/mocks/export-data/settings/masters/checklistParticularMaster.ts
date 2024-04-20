import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Checklist Particulars Master";
let headers: any = [
    {
        header: "Order",
        key: "order",
        ...EXCEL_STYLE
    },
    {
        header: "Name",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const CHECKLIST_PARTICULAR_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CHECKLIST_PARTICULAR_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
