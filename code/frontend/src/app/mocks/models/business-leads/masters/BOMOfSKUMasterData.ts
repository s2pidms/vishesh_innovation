export interface BOMOfSKUMasterData {
    autoIncrementNo: string;
    SKUList: SKUList[];
}
export interface SKUList {
    _id: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    primaryUnit: string;
    id?: string;
}
