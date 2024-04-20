import {IGIPPICToProductionGIDetails} from "./GIPPICToProductionGIDetails";
import {IParameterICommonData} from "./jobCardMasterData";

export interface IGIPPICToProductionMasterData {
    autoIncrementNo: string;
    mergeList: IGIPPICToProductionGIDetails[];
    goodsIssueToOptions: IParameterICommonData[];
    JCOptions: IJCOptions[];
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
