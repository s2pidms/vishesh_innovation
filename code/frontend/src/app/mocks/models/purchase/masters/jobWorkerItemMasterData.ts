import {IParameterICommonData} from "@mocks/models/planning/transactions";

// export interface IJobWorkerItemMasterData {
//     autoIncrementNo: string;
//     companyType: string;
//     stockLevelButtonCondition: string;
//     HSNCodesList: IHSNCodes[];
//     QCLevelsOptions: IParameterICommonData[] | any;
//     itemCategories: string[];
//     suppliersOptions: ISuppliers[];
//     channelPartnerOptions: IChannel[] | any;
//     WXLDimensionsUnit: string[];
// }

// export interface IHSNCodes {
//     _id?: string;
//     label?: string;
//     value?: string;
//     hsnCode?: string;
//     goodsDescription: string;
//     gstRate: number;
//     igstRate: number;
//     sgstRate: number;
//     cgstRate: number;
//     ugstRate: number;
// }

// export type IItemCategories = string[];

// export interface ISuppliers {
//     label: string;
//     value: string;
//     currency: string;
// }
// export interface IChannel {
//     label: string;
//     value: string;
//     currency: string;
// }

export interface IJobWorkerItemMasterData {
    QCLevelsOptions: QClevelsOption[];
    HSNCodesList: HSNCodesList[];
    itemCategories: string[];
    WXLDimensionsUnit: string;
    jobWorkerOptions: JobWorkerOption[];
}

export interface AutoIncValues {
    "M90 - Miscellaneous": string;
}

export interface QClevelsOption {
    _id: string;
    parameterName: string;
    parameterLabel: string;
    order: number;
    label: string;
    value: string;
}

export interface HSNCodesList {
    _id: string;
    hsnCode: string;
    goodsDescription: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    ugstRate: number;
    label: string;
    value: string;
}

export interface JobWorkerOption {
    _id: string;
    jobWorkerCode: string;
    label: string;
    value: string;
    currency: string;
    state: string;
    cityOrDistrict: string;
    pinCode: string;
}
