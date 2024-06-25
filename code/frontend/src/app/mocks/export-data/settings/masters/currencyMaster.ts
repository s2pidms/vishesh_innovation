import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Currency Master";
let headers: any = [
    {
        header: "Currency Code",
        key: "currencyCode",
        ...EXCEL_STYLE
    },
    {
        header: "Currency Name",
        key: "currencyName",
        ...EXCEL_STYLE
    },
    {
        header: "Symbol",
        key: "symbol",
        ...EXCEL_STYLE
    },
    {
        header: "Exchanges Rate To USD",
        key: "exchangeRateToUSD",
        ...EXCEL_STYLE
    },
    {
        header: "Sequence",
        key: "sequence",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const CURRENCY_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CURRENCY_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
