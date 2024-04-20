import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Channel Partner Master";
let headers: any = [
    {
        header: "Category",
        key: "channelPartnerCategory",
        ...EXCEL_STYLE
    },
    {
        header: "CP Code",
        key: "CPCode",
        ...EXCEL_STYLE
    },
    {
        header: "Channel Partner Name",
        key: "channelPartnerName",
        ...EXCEL_STYLE
    },
    {
        header: "Channel Partner NickName",
        key: "channelPartnerNickName",
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
        key: "isCPActive",
        ...EXCEL_STYLE
    }
];
export const CHANNEL_PARTNER_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CHANNEL_PARTNER_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
