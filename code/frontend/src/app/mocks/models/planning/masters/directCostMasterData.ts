import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IDirectCostMasterData {
    autoIncrementNo: string;
    productCategories: ICommonData[];
    processList: IProcessList[];
}

export interface IProcessList {
    _id: string;
    processId: string;
    processName: string;
    process: string;
    unitProcessOutput: string;
    outputPerHr: number;
    labourRatePerHr: number;
    assetRatePerHr: number;
    PFSeq: any;
    specQuantity: number;
    processHrs: number;
    labourCost: number;
    CAUnitsOfLabour: number;
    labourCostPerUnit: number;
    assetCost: number;
    CAUnitsOfAssets: number;
    assetCostPerUnit: number;
}
