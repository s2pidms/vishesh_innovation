export interface IFGIEMasterData {
    autoIncrementNo: string;
    SKUMastersOptions: ISKUMasters[];
}

export interface ISKUMasters {
    label: string;
    skuNum: string;
    value: string;
    skuDescription: string;
    uom: string;
    shelfLife: string;
}
