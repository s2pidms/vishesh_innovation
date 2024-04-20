import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "NPD Request";
let headers: any = [
    {
        header: "NPD. NO",
        key: "NPDNo",
        ...EXCEL_STYLE
    },
    {
        header: "NPD. Date",
        key: "NPDDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer/Prospect Name",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Product Code",
        key: "productCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Product Brief",
        key: "productBrief",
        ...EXCEL_STYLE
    },
    {
        header: "Build Stage",
        key: "buildStage",
        ...EXCEL_STYLE
    },
    {
        header: "Order Type",
        key: "orderType",
        ...EXCEL_STYLE
    },
    {
        header: "Monthly off-take Quantity",
        key: "monthlyOffTakeQty",
        ...EXCEL_STYLE
    },
    {
        header: "Development Charges",
        key: "developmentCharges",
        ...EXCEL_STYLE
    },
    {
        header: "Quantity [Requested]",
        key: "requestedQty",
        ...EXCEL_STYLE
    },
    {
        header: "EDD",
        key: "expectedDeliveryDate",
        ...EXCEL_STYLE
    },
    {
        header: "Validation Required",
        key: "validationRequired",
        ...EXCEL_STYLE
    },
    {
        header: "NPD Requested by/Coordinator",
        key: "NPDRequestedBy",
        ...EXCEL_STYLE
    },
    {
        header: "Remark",
        key: "remarks",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const NPD_REQUEST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const NPD_REQUEST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
