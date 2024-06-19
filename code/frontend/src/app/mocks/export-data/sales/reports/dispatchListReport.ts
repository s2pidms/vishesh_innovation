import * as moment from "moment";
import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";

// const getCurrentFormattedDateTime = () => {
//     const todayDate = new Date();
//     const formattedDate = moment(todayDate).format("DD.MM.YYYY");
//     const formattedTime = moment(todayDate).format("hh:mm A");
//     return `${formattedDate}-${formattedTime}`;
// };

let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = `Dispatch List Report`;
let headers: any = [
    {
        header: "DRN No.",
        key: "DRNNumber",
        ...EXCEL_STYLE
    },
    {
        header: "SO No.",
        key: "SONumber",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "SKU Name",
        key: "SKUName",
        ...EXCEL_STYLE
    },
    {
        header: "UOM",
        key: "UOM",
        ...EXCEL_STYLE
    },
    {
        header: "Qty.(in Cartons)",
        key: "dispatchQty",
        ...EXCEL_STYLE
    },
    {
        header: "Weight(in Kgs)",
        key: "",
        ...EXCEL_STYLE
    },
    {
        header: "Transporter",
        key: "transporter",
        ...EXCEL_STYLE
    },
    {
        header: "Destination",
        key: "destination",
        ...EXCEL_STYLE
    },
    {
        header: "Bill-to-Address",
        key: "billingFullAddress",
        ...EXCEL_STYLE
    },
    {
        header: "Ship-to-Address",
        key: "shippingFullAddress",
        ...EXCEL_STYLE
    },
   
];

export const DISPATCH_LIST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DISPATCH_LIST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
