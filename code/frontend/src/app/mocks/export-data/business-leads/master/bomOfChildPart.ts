import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "BoM Of Child Part";
let headers: any = [
    {
        header: "BOM No",
        key: "BOMNo",
        ...EXCEL_STYLE
    },
    {
        header: "Child Item Code",
        key: "childItemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Child Item Name",
        key: "childItemName",
        ...EXCEL_STYLE
    },
    {
        header: "Child Item Description",
        key: "childItemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UOM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Part Count",
        key: "partCount",
        ...EXCEL_STYLE
    },
    {
        header: "Total Material Cost",
        key: "totalMaterialCost",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const BOM_OF_CHILD_PART_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const BOM_OF_CHILD_PART_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
