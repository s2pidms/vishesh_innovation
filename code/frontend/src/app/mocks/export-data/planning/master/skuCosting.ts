import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'SKUCosting Report';
let headers: any = [
    {
        header: 'Costing Code',
        key: 'costingCode',
        ...EXCEL_STYLE
    },
    {
        header: 'Costing Date',
        key: 'costingDateS',
        ...EXCEL_STYLE
    },
    {
        header: 'Costing Description',
        key: 'costingDescription',
        ...EXCEL_STYLE
    },
    {
        header: 'Revision',
        key: 'revision',
        ...EXCEL_STYLE
    },
    {
        header: 'SKU Code',
        key: 'SKUCode',
        ...EXCEL_STYLE
    },
    {
        header: 'SKU Name',
        key: 'SKUName',
        ...EXCEL_STYLE
    },
    {
        header: 'SKU Description',
        key: 'SKUDescription',
        ...EXCEL_STYLE
    },
    {
        header: 'UoM',
        key: 'UoM',
        ...EXCEL_STYLE
    },
    {
        header: 'BOM Cost',
        key: 'totalBomCost',
        ...EXCEL_STYLE
    },
    {
        header: 'Routing Cost',
        key: 'totalRoutingCost',
        ...EXCEL_STYLE
    },
    {
        header: 'Total Cost',
        key: 'SKUCost',
        ...EXCEL_STYLE
    },
    {
        header: 'Status',
        key: 'status',
        ...EXCEL_STYLE
    }
];
export const SKU_COSTING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SKU_COSTING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
