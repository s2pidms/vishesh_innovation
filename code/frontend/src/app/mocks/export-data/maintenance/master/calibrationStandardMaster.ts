import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Calibration Standard Master";
let headers: any =[
    {
        header: "Standard Code",
        key: "standardCode",
        ...EXCEL_STYLE
    },
    {
        header: "Standard Name",
        key: "standardName",
        ...EXCEL_STYLE
    },
    {
        header: "Standard Type",
        key: "standardType",
        ...EXCEL_STYLE
    },
    {
        header: "Measurement Range",
        key: "measurementRange",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Method",
        key: "calibrationMethod",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Interval",
        key: "calibrationInterval",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Agency",
        key: "calibrationAgency",
        ...EXCEL_STYLE
    },
    {
        header: "Traceability",
        key: "traceability",
        ...EXCEL_STYLE
    },
    {
        header: "Standard Location",
        key: "standardLocation",
        ...EXCEL_STYLE
    },
    {
        header: "Standard Status",
        key: "status",
        ...EXCEL_STYLE
    },
    {
        header: " Calibration Cost",
        key: "calibrationCost",
        ...EXCEL_STYLE
    },
    {
        header: "Last Calibration Date",
        key: "lastCalibrationDateS",
        ...EXCEL_STYLE
    }
]
export const CALIBRATION_STANDARD_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CALIBRATION_STANDARD_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
