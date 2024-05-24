import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IItemMasterData {
    autoIncrementNo: string;
    companyType: string;
    stockLevelButtonCondition: string;
    HSNCodesList: IHSNCodes[];
    QCLevelsOptions: IParameterICommonData[] | any;
    itemCategories: string[];
    suppliersOptions: ISuppliers[];
    channelPartnerOptions: IChannel[] | any;
    WXLDimensionsUnit: string[];
}

export interface IHSNCodes {
    _id?: string;
    label?: string;
    value?: string;
    hsnCode?: string;
    goodsDescription: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    ugstRate: number;
}

export type IItemCategories = string[];

export interface ISuppliers {
    label: string;
    value: string;
    currency: string;
}
export interface IChannel {
    label: string;
    value: string;
    currency: string;
}
