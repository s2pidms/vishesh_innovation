export interface ISKUProcessFlowMasterData {
    processMasterList: IProcessMasterList[];
}

export interface IProcessMasterList {
    processId: string;
    processName: string;
    sourceOfManufacturing: string;
    primaryAssetAllocation: any;
    unitProcessOutput: any;
    seq: any;
    process: string;
}
