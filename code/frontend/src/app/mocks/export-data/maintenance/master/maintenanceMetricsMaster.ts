import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Maintenance Metrics Master";
let headers: any = [
    {
        header: "Metric Code",
        key: "metricCode",
        ...EXCEL_STYLE
    },
    {
        header: "Metric Name",
        key: "metricName",
        ...EXCEL_STYLE
    },
    {
        header: "Metric Type",
        key: "metricCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Calculation Method",
        key: "calculationMethod",
        ...EXCEL_STYLE
    },
    {
        header: "Unit of Measurement",
        key: "unitOfMeasure",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "metricDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Target Value",
        key: "targetValue",
        ...EXCEL_STYLE
    },
    {
        header: "Thresholds",
        key: "thresholds",
        ...EXCEL_STYLE
    },
    {
        header: "Frequency",
        key: "frequency",
        ...EXCEL_STYLE
    },
    {
        header: "Reference Range (From)",
        key: "refRangeFrom",
        ...EXCEL_STYLE
    },
    {
        header: "Reference Range (To)",
        key: "refRangeTo",
        ...EXCEL_STYLE
    },
    {
        header: "Formula",
        key: "formula",
        ...EXCEL_STYLE
    },
    {
        header: "Target Description",
        key: "targetDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Last Updated",
        key: "lastUpdated",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "metricStatus",
        ...EXCEL_STYLE
    }
];
export const MAINTENANCE_METRICS_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MAINTENANCE_METRICS_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
