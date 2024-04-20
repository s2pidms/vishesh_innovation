import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IFormulationMasterData {
    autoIncrementNo: string;
    addLabValues?: string;
    companyType?: string;
    UOMOptions: ICommonData[];
    HSNCodesList: IHSNCodes[];
    mergedItemInkList: IMergedItemInkList[];
    WXLDimensionsUnit: string[];
}
export interface IHSNCodes {
    _id: string;
    label?: string;
    value?: string;
    hsnCode: string;
    goodsDescription: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
}

export interface IMergedItemInkList {
    seq: number;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    qtyPerKgInitial: number;
    percentageLoading: number;
    UoM: string;
    qtyPerKgFinal: number;
    ratePerUnit: number;
    referenceModel: string;
    itemCost: number;
}
