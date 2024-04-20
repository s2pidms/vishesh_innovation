import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "UoM Master";
let headers: any = [
    {
        header: "UoM Code",
        key: "UOMCode",
        ...EXCEL_STYLE
    },
    {
        header: "UOM Order",
        key: "UOMOrder",
        ...EXCEL_STYLE
    },
    {
        header: "UoM Description",
        key: "UOMDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM GST Code",
        key: "GST",
        ...EXCEL_STYLE
    },
    {
        header: "Abbreviation",
        key: "abbreviation",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const UOM_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const UOM_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
