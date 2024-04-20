import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Prospect Master";
let headers: any = [
    {
        header: "Prospect No.",
        key: "prospectRegistrationCode",
        ...EXCEL_STYLE
    },
    {
        header: "Reg. Date",
        key: "prospectRegistrationDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "prospectName",
        ...EXCEL_STYLE
    },
    {
        header: "Prospect Category",
        key: "customerCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Person",
        key: "contactPersonName",
        ...EXCEL_STYLE
    },
    {
        header: "Designation",
        key: "contactPersonDesignation",
        ...EXCEL_STYLE
    },
    {
        header: "Contact No.",
        key: "contactPersonNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Email",
        key: "contactPersonEmail",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 1",
        key: "line1",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 2",
        key: "line2",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 3",
        key: "line3",
        ...EXCEL_STYLE
    },
    {
        header: "Address Line 4",
        key: "line4",
        ...EXCEL_STYLE
    },
    {
        header: "State",
        key: "state",
        ...EXCEL_STYLE
    },
    {
        header: "City",
        key: "city",
        ...EXCEL_STYLE
    },
    {
        header: "Pin Code",
        key: "pinCode",
        ...EXCEL_STYLE
    },
    {
        header: "Country",
        key: "country",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const PROSPECT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROSPECT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
