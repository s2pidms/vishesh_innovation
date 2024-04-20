export interface IFGCorrectionMasterData {
    autoIncrementNo: string;
    SKUOptions: ISKUMasters[];
}

export interface ISKUMasters {
    _id: string;
    SKUNo: string;
    SKUDescription: string;
}
