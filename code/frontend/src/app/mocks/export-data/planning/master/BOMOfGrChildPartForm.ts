import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "BOM Of Grand Child Part";
let headers: any = [
    {
        header: "Item Code<",
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
        header: "Qty/SKU Unit",
        key: "qtyPerSKUUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Waste %",
        key: "wastePercentage",
        ...EXCEL_STYLE
    },
    {
        header: "Qty/Part Count",
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
export const BOM_OF_GRAND_CHILD_PART_FORM_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const BOM_OF_GRAND_CHILD_PART_FORM_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
