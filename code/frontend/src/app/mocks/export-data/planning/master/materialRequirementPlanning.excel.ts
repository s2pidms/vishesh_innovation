import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Material Requirement Planning (MRP)";
let headers: any = [
    {
        header: "Item Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Item Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "Item Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Qty/Batch",
        key: "qtyPerSKUUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Waste %",
        key: "wastePercentage",
        ...EXCEL_STYLE
    },
    {
        header: "Total Qty/Batch",
        key: "partCount",
        ...EXCEL_STYLE
    },
    {
        header: "Unit Cost",
        key: "unitCost",
        ...EXCEL_STYLE
    },
    {
        header: "Item Cost",
        key: "itemCost",
        ...EXCEL_STYLE
    }
];
export const MATERIAL_REQ_PLANNING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MATERIAL_REQ_PLANNING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
