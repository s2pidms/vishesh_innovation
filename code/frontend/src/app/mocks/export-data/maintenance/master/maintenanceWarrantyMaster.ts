import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Maintenance Warranty Master";
let headers: any = [
    {
        header: "Warranty Code",
        key: "warrantyCode",
        ...EXCEL_STYLE
    },
    {
        header: "Warranty Name",
        key: "warrantyName",
        ...EXCEL_STYLE
    },
    {
        header: "Equipment",
        key: "equipmentName",
        ...EXCEL_STYLE
    },
    {
        header: "Vendor",
        key: "supplier",
        ...EXCEL_STYLE
    },
    {
        header: "Warranty Type",
        key: "warrantyType",
        ...EXCEL_STYLE
    },
    {
        header: "Warranty Start Date",
        key: "warrantyStartDate",
        ...EXCEL_STYLE
    },
    {
        header: "Warranty End Date",
        key: "warrantyEndDate",
        ...EXCEL_STYLE
    },

    {
        header: "Warranty Description",
        key: "warrantyDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Person",
        key: "contactPerson",
        ...EXCEL_STYLE
    },
    {
        header: "AMC Start Date",
        key: "AMCStartDate",
        ...EXCEL_STYLE
    },
    {
        header: "AMC End Date",
        key: "AMCEndDate",
        ...EXCEL_STYLE
    },
    {
        header: "Warranty Status",
        key: "warrantyStatus",
        ...EXCEL_STYLE
    }
];
export const MAINTENANCE_WARRANTY_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAINTENANCE_WARRANTY_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
