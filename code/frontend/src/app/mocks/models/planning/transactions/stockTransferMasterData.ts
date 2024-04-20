export interface IStockTransferMasterData {
    autoIncrementNo: string;
    itemCategoryList: IItemCategoryList[];
    WIPList: IWIPList[];
}

export interface IItemCategoryList {
    _id?: string;
    category: string;
}

export interface IWIPList {
    MRN: string;
    MRNNumber: string;
    item: string;
    WIPId: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    unitConversion?: string;
    UOM: string;
    PPICIRQty: number;
    itemType: string;
    GINDate: string;
    shelfLife: number;
    transferQty: number;
    status: string;
}
