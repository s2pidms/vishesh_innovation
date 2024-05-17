import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*"
];
let title = "SKU Master";
let headers: any = [
    {
        header: "SKU Stage",
        key: "SKUStage",
        ...EXCEL_STYLE
    },
    {
        header: "Product",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "HSN Code",
        key: "hsn",
        ...EXCEL_STYLE
    },
    {
        header: "SKU No.",
        key: "SKUNo",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Name",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Description",
        key: "SKUDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "primaryUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Shelf Life [Months]",
        key: "shelfLife",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "isActive",
        ...EXCEL_STYLE
    },
    //   {
    //       header: "Drawing/Artwork/Image",
    //       key: "drawingArtWorkFileUrl",
    //       ...EXCEL_STYLE
    //   },
    //   {
    //       header: "Production Layout",
    //       key: "productionLayoutFileUrl",
    //       ...EXCEL_STYLE
    //   },
    {
        header: "AD-Unit",
        key: "ADUnit",
        ...EXCEL_STYLE
    },
    {
        header: "AD-Width",
        key: "ADWidth",
        ...EXCEL_STYLE
    },
    {
        header: "AD-Length",
        key: "ADLength",
        ...EXCEL_STYLE
    },
    {
        header: "AD-ups",
        key: "ADUps",
        ...EXCEL_STYLE
    },
    {
        header: "AD-Area",
        key: "ADArea",
        ...EXCEL_STYLE
    },
    {
        header: "AD-Area[Sqm]",
        key: "ADMtSqArea",
        ...EXCEL_STYLE
    },
    {
        header: "LD-Unit",
        key: "unit",
        ...EXCEL_STYLE
    },
    {
        header: "LD-Width",
        key: "width",
        ...EXCEL_STYLE
    },
    {
        header: "LD-Length",
        key: "length",
        ...EXCEL_STYLE
    },
    {
        header: "LD-ups",
        key: "ups",
        ...EXCEL_STYLE
    },
    {
        header: "LD-Area",
        key: "area",
        ...EXCEL_STYLE
    },
    {
        header: "LD-Area[Sqm]",
        key: "mSqArea",
        ...EXCEL_STYLE
    },
    {
        header: "Waste %",
        key: "wastePercentage",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Part Description",
        key: "customerPartDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Part No.",
        key: "customerPartNo",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "customerCurrency",
        ...EXCEL_STYLE
    },
    {
        header: "Rate/U1",
        key: "standardSellingRate",
        ...EXCEL_STYLE
    },
    {
        header: "Drawing/Artwork No.",
        key: "artWorkNo",
        ...EXCEL_STYLE
    },
    {
        header: "Storage Temperature",
        key: "storageTemp",
        ...EXCEL_STYLE
    },
    {
        header: "Storage Humidity",
        key: "storageHumidity",
        ...EXCEL_STYLE
    },
    {
        header: "Special Storage Instruction",
        key: "specialStorageInstruction",
        ...EXCEL_STYLE
    }
    // {
    //     header: "Rate/U1",
    //     key: "standardSellingRate",
    //     ...EXCEL_STYLE
    // }
    // {
    //     header: "Selling Price [Exclusive of GST]",
    //     key: "standardSellingRate",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Avg. Monthly off-take",
    //     key: "monthlyOffTake",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "PO No.",
    //     key: "PONo",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "PO Date",
    //     key: "PODate",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "PO Valid Date",
    //     key: "POValidDate",
    //     ...EXCEL_STYLE
    // }
];
export const SKU_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SKU_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
