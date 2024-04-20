import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Mould Master";
let headers: any = [
    {
        header: "Mould Number",
        key: "mouldNo",
        ...EXCEL_STYLE
    },
    {
        header: "Mould Description",
        key: "mouldName",
        ...EXCEL_STYLE
    },
    {
        header: "Mould Type",
        key: "mouldType",
        ...EXCEL_STYLE
    },
    {
        header: "Cavities",
        key: "noOfCavities",
        ...EXCEL_STYLE
    },
    {
        header: "TBD - (mm x mm)",
        key: "mouldTBDDimension",
        ...EXCEL_STYLE
    },
    {
        header: "Supplier Nick Name",
        key: "mouldSupplier",
        ...EXCEL_STYLE
    },
    {
        header: "S/Part No.",
        key: "partNo",
        ...EXCEL_STYLE
    },
    {
        header: "Mould B/D",
        key: "mouldBatchDate",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const MOULD_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MOULD_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
