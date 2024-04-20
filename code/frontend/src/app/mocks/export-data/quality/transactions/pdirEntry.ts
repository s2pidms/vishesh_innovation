import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "PDIR Entry";
let headers: any = [
    {
        header: "PDI No.",
        key: "preDispatchCode",
        ...EXCEL_STYLE
    },
    {
        header: "PDI Date",
        key: "preDispatchDate",
        ...EXCEL_STYLE
    },
    {
        header: "Tax Inv No.",
        key: "salesInvoiceNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Tax Inv Dt.",
        key: "salesInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "PDI Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const PDIR_ENTRY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PDIR_ENTRY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
