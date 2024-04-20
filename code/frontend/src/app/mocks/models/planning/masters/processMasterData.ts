export interface IProcessMasterData {
    labourList: IProcessMasterList[];
    assetMasterList: IAssetMasterList[];
    autoIncrementNo: string;
}
export interface IProcessMasterList {
    category: string;
    salaryPerHour: string;
}

export interface IAssetMasterList {
    asset: string;
    assetCode: string;
    assetName: string;
    assetDescription: string;
    location: string;
    totalAssetCostPerHr: number;
    isSelect: boolean;
    _id: string;
}
