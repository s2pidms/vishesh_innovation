export interface IMapProcessAndMachineMasterData {
    autoIncrementNo: string;
    processOptions: IProcessList[];
    machineOptions: IMachineList[];
}

export interface IProcessList {
    _id: string;
    processCode: string;
    processName: string;
}

export interface IMachineList {
    _id: string;
    assetType: string;
    assetCode: string;
    assetName: string;
    assetDescription: string;
}
