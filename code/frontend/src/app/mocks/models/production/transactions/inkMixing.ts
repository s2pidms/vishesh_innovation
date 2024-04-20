import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IInkMixingMasterData {
    autoIncrementNo: string;
    JCOptions: IJCOptions[];
    shiftOptions: IParameterICommonData[];
}

export interface IJCOptions {
    _id: string;
    jobCardNo: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    batchQty: number;
}

export interface IInkOptions {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    totalQty: number;
    UOM: string;
    unitCost: number;
}

export interface IInkMixingDetails {
    _id?: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    MRPQty: number;
    ink: string;
    openQty: number;
    batchQty: number;
    remarks?: IRemarks;
    labValues?: ILabValues;
    inkDetails: IInkDetail[];
}

export interface IRemarks {
    shift?: string;
    logBookRef?: string;
    preparedBy?: string;
    checkedBy?: string;
}
export interface ILabValues {
    L?: number;
    a?: number;
    b?: number;
}
export interface IInkDetail {
    item?: string;
    seq?: number;
    itemCode?: string;
    itemName?: string;
    itemDescription?: string;
    UOM?: string;
    qty?: number;
    gramUOM?: string;
    gramQty?: number;
    referenceModel?: string;
}
