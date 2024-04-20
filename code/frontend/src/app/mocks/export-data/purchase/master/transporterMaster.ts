import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Transporter Master";
let headers: any = [
    {
        header: "Code",
        key: "transporterCode",
        ...EXCEL_STYLE
    },
    {
        header: "Transporter Name [Legal Entity]",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "Type",
        key: "transporterType",
        ...EXCEL_STYLE
    },
    {
        header: "Address",
        key: "address",
        ...EXCEL_STYLE
    },
    {
        header: "City",
        key: "city",
        ...EXCEL_STYLE
    },
    {
        header: "State",
        key: "state",
        ...EXCEL_STYLE
    },
    {
        header: "Country",
        key: "country",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Person",
        key: "contactPerson",
        ...EXCEL_STYLE
    },
    {
        header: "Phone",
        key: "phone",
        ...EXCEL_STYLE
    },
    {
        header: "Email",
        key: "email",
        ...EXCEL_STYLE
    },
    {
        header: "GST No.",
        key: "licenseNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const TRANSPORTER_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TRANSPORTER_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
