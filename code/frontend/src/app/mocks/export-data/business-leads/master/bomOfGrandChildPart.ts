import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "BoM Of Grand Child Part";
let headers: any = [
    {
        header: "BOM No",
        key: "BOMNo",
        ...EXCEL_STYLE
    },
    {
        header: "Grand Child Item Code",
        key: "grandChildItemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Grand Child Item Name",
        key: "grandChildItemName",
        ...EXCEL_STYLE
    },
    {
        header: "Grand Child Item Description",
        key: "grandChildItemDescription",
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
export const BOM_OF_GRAND_CHILD_PART_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const BOM_OF_GRAND_CHILD_PART_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
