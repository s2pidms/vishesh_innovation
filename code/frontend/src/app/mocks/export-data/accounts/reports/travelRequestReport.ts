import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Travel Request";
let headers: any = [
    {
        header: "Travel Code",
        key: "travelCode",
        ...EXCEL_STYLE
    },
    {
        header: "Raised By",
        key: "raisedBy",
        ...EXCEL_STYLE
    },
    {
        header: "Travel Start Date",
        key: "travelStartDate",
        ...EXCEL_STYLE
    },
    {
        header: "Travel End Date",
        key: "travelEndDate",
        ...EXCEL_STYLE
    },
    {
        header: "Total # of Days",
        key: "totalDays",
        ...EXCEL_STYLE
    },
    {
        header: "Purpose of Travel",
        key: "purposeOfTravel",
        ...EXCEL_STYLE
    },
    {
        header: "Estimated Budget",
        key: "estimatedBudget",
        ...EXCEL_STYLE
    },
    {
        header: "Cost Allocation",
        key: "costAllocation",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const TRAVEL_REQUEST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TRAVEL_REQUEST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
