import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Checklist Master";
let headers: any = [
    {
        header: "Checklist Code",
        key: "checklistCode",
        ...EXCEL_STYLE
    },
    {
        header: "Checklist Name",
        key: "checklistName",
        ...EXCEL_STYLE
    },
    {
        header: "Checklist Description",
        key: "checklistDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Checklist Category",
        key: "checklistCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Checklist Notes",
        key: "checklistNotes",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const MAINTENANCE_CHECKLIST_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAINTENANCE_CHECKLIST_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
