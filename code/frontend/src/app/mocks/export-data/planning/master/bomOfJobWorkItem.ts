import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Bill of Material (BoM) of Job Work Item";
let headers: any = [
    {
        header: "BoM No.",
        key: "BOMOfJWICode",
        ...EXCEL_STYLE
    },
    {
        header: "JW Item Code",
        key: "jobWorkItemCode",
        ...EXCEL_STYLE
    },
    {
        header: "JW Item Name",
        key: "jobWorkItemName",
        ...EXCEL_STYLE
    },
    {
        header: "JW Item Description",
        key: "jobWorkItemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Part Count",
        key: "partCount",
        ...EXCEL_STYLE
    },
    {
        header: "Material Cost",
        key: "totalMaterialCost",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const BOM_OF_JOB_WORK_ITEM_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const BOM_OF_JOB_WORK_ITEM_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
