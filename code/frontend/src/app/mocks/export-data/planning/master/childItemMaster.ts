import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*","*"];
let title = "Child Item Master";
let headers: any = [
    {
        header: "Child Item Category ",
        key: "childItemCategory",
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
        key: "unitOfMeasurement",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "HSNCode",
        ...EXCEL_STYLE
    },
    // {
    //     header: "Avg. Consumption",
    //     key: "avgConsumptionPerMonth",
    //     ...EXCEL_STYLE
    // },
    {
        header: "Item Cost",
        key: "itemCost",
        ...EXCEL_STYLE
    },
    {
        header: "Source of mfg.",
        key: "sourceOfManufacturing",
        ...EXCEL_STYLE
    },
    // {
    //     header: "Ext. Service Provider Name",
    //     key: "extServiceProviderName",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Mfg. Cost ",
    //     key: "manufacturingCost",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Payment Terms",
    //     key: "paymentTerms",
    //     ...EXCEL_STYLE
    // },
    {
        header: "Shelf Life (Months)",
        key: "shelfLife",
        ...EXCEL_STYLE
    },
    // {
    //     header: "Storage Temp. (°C)",
    //     key: "storageTemp",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Storage Humidity (RH)",
    //     key: "storageHumidity",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Special Storage Instruction",
    //     key: "specialStorageInstruction",
    //     ...EXCEL_STYLE
    // },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const CHILD_ITEM_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CHILD_ITEM_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
