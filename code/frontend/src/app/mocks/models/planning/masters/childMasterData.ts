import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IChildAndGrandMasterData {
    // autoIncValues: AutoIncValues;
    HSNCodesList: IHSNCodes[];
    suppliersOptions: ISupplier[];
    WXLDimensionsUnit: string[];
}

export interface IHSNCodes {
    _id?: string;
    value?: string;
    hsnCode?: string;
    goodsDescription: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    ugstRate: number;
}

export interface ISupplier {
    supplierCurrency: String;
    supplierName: String;
    _id?: String;
}
// export interface AutoIncValues {
//     "L20/Child Item": string;
//     "L30/Grand Child": string;
// }
