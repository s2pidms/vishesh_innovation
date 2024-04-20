import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Technician Master";
let headers: any = [
    {
        header: " Technician Code",
        key: "technicianCode",
        ...EXCEL_STYLE
    },
    {
        header: "Technician Name",
        key: "technicianName",
        ...EXCEL_STYLE
    },
    {
        header: "Technician Role",
        key: "technicianRole",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Number",
        key: "contactNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Email",
        key: "email",
        ...EXCEL_STYLE
    },
    {
        header: "Address",
        key: "address",
        ...EXCEL_STYLE
    },
    {
        header: "Technician Skills",
        key: "skills",
        ...EXCEL_STYLE
    },
    {
        header: "Experience (Years)",
        key: "experience",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "technicianStatus",
        ...EXCEL_STYLE
    }
];
export const TECHNICIAN_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TECHNICIAN_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
