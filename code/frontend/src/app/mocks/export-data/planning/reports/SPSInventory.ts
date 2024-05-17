import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "SPS Inventory Report";
let headers: any = [
    {
        header: "R+/I-",
        key: "department",
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
    // {
    //     header: "Primary To Secondary Conversion",
    //     key: "primaryToSecondaryConversion",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Secondary To Primary Conversion",
    //     key: "secondaryToPrimaryConversion",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Primary Unit",
    //     key: "primaryUnit",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Secondary Unit",
    //     key: "secondaryUnit",
    //     ...EXCEL_STYLE
    // },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Quantity",
        key: "closedIRQty",
        ...EXCEL_STYLE
    },
    {
        header: "MRN Number",
        key: "MRNNumber",
        ...EXCEL_STYLE
    }
];
export const SPS_INVENTORY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SPS_INVENTORY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
