import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IProductionOfSKUMasterData {
    autoIncrementNo: string;
    productionShiftOptions: IParameterICommonData[];
    mapProcessMachineListOptions: ImapProcessMachineList[];
    SKUOptions: ISKUList[];
}

export interface ImapProcessMachineList {
    _id: string;
    process: string;
    processCode: string;
    processName: string;
    machineDetails: IMachineDetail[];
}

export interface IMachineDetail {
    _id: string;
    machine: string;
    machineCode: string;
    machineName: string;
}
export interface ISKUList {
    SKU: string;
    SKUCode: string;
    SKUName: string;
    SKUDescription: string;
    orderRef: string;
    jobCard: string;
    batchNumber: string;
    UOM: string;
    batchQty: number;
    outputQty: number;
    rejectedQty: number;
}
