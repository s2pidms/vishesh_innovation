import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Calibration And Verification";
let headers: any = [
    {
        header: "Calibration Date",
        key: "calibrationDate",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Due",
        key: "calibrationDue",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Agency",
        key: "calibrationAgency",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Result",
        key: "calibrationResult",
        ...EXCEL_STYLE
    },
    {
        header: "Remarks",
        key: "remarks",
        ...EXCEL_STYLE
    }
];
export const CALIBRATION_AND_VERIFICATION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CALIBRATION_AND_VERIFICATION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
