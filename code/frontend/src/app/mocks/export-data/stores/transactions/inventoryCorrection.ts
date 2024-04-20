import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Inventory Correction";
let headers: any = [
    {
        header: "GIN Date",
        key: "GINDateS",
        ...EXCEL_STYLE
    },
    {
        header: "MRN No.",
        key: "MRNNumber",
        ...EXCEL_STYLE
    },
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
        header: "Open IR Qty",
        key: "openIRQty",
        ...EXCEL_STYLE
    },
    {
        header: "+/- Qty",
        key: "updatedQty",
        ...EXCEL_STYLE
    },
    {
        header: "Cls IR Qty",
        key: "closedIRQty",
        ...EXCEL_STYLE
    }
];
export const INVENTORY_CORRECTION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const INVENTORY_CORRECTION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
