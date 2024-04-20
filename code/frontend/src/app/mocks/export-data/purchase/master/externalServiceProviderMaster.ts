import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "External (Service) Provider Master";
let headers: any = [
    {
        header: "Category",
        key: "ESPCategory",
        ...EXCEL_STYLE
    },
    {
        header: "ESP Code",
        key: "ESPCode",
        ...EXCEL_STYLE
    },
    {
        header: "External Service Provider Name",
        key: "ESPName",
        ...EXCEL_STYLE
    },
    {
        header: "External Service Provider NickName",
        key: "ESPNickName",
        ...EXCEL_STYLE
    },
    {
        header: "Pan No.",
        key: "PANNo",
        ...EXCEL_STYLE
    },
    {
        header: "GST Classification",
        key: "GSTClassification",
        ...EXCEL_STYLE
    },
    {
        header: "GSTIN",
        key: "GSTIN",
        ...EXCEL_STYLE
    },
    {
        header: "Udyam Aadhaar No.",
        key: "udyamAadhaarNo",
        ...EXCEL_STYLE
    },
    {
        header: "MSME Classification",
        key: "MSMEClassification",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    },
    {
        header: "Payment Terms",
        key: "paymentTerms",
        ...EXCEL_STYLE
    },
    {
        header: "Country",
        key: "country",
        ...EXCEL_STYLE
    },
    {
        header: "State/Province %",
        key: "state",
        ...EXCEL_STYLE
    },
    {
        header: "City/District",
        key: "city",
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
        header: "Status",
        key: "isESPActive",
        ...EXCEL_STYLE
    }
];
export const EXTERNAL_SERVICE_PROVIDER_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const EXTERNAL_SERVICE_PROVIDER_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
