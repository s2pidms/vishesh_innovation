export interface IRMSpecificationsMasterData {
    autoIncrementNo: string;
    itemCategoryListOptions: IItemCategoryList[];
    itemsListOptions: IItemsList[];
    specificationList: ISpecificationList[];
}

export interface IItemCategoryList {
    _id: string;
    category: string;
}

export interface IItemsList {
    _id: string;
    itemType: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    orderInfoUOM: string;
}

export interface ISpecificationList {
    seq: number;
    specificationCode: string;
    characteristic: string;
    UOM: string;
    testStandard: string;
    measuringInstrument: string;
    specValue: string;
    LTL: string;
    UTL: string;
    _id?: string;
}
