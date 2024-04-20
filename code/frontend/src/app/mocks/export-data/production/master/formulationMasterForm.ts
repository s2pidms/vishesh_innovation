import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Formulation Master";
let headers: any = [
    {
        header: "Seq",
        key: "seq",
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
        key: "UoM",
        ...EXCEL_STYLE
    },
    {
        header: "Quantity",
        key: "qtyPerKgFinal",
        ...EXCEL_STYLE
    },
    {
        header: "% Loading",
        key: "percentageLoading",
        ...EXCEL_STYLE
    },
    {
        header: "Rate/Unit",
        key: "ratePerUnit",
        ...EXCEL_STYLE
    },
    {
        header: "Item Cost",
        key: "itemCost",
        ...EXCEL_STYLE
    }
];
export const FORMULATION_MASTER_FORM_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FORMULATION_MASTER_FORM_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
