import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Quality Equipment Master";
let headers: any = [
    {
        header: "Equipment Code",
        key: "equipmentCode",
        ...EXCEL_STYLE
    },
    {
        header: "Equipment Name",
        key: "equipmentName",
        ...EXCEL_STYLE
    },
    {
        header: "Equipment Type",
        key: "equipmentType",
        ...EXCEL_STYLE
    },
    {
        header: "Manufacturer",
        key: "manufacturer",
        ...EXCEL_STYLE
    },
    {
        header: "Model Number ",
        key: "modelNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Serial Number ",
        key: "serialNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Date",
        key: "calibrationDateS",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Due",
        key: "calibrationDueS",
        ...EXCEL_STYLE
    },
    {
        header: "Calibration Agency",
        key: "calibrationAgency",
        ...EXCEL_STYLE
    },
    {
        header: "Location",
        key: "location",
        ...EXCEL_STYLE
    },
    {
        header: "Owner",
        key: "empDepartments",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const QUALITY_EQUIPMENT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const QUALITY_EQUIPMENT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
