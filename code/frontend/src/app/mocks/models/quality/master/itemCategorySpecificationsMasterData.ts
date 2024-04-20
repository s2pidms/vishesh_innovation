export interface IItemCategorySpecificationsMasterData {
    itemCategoryListOptions: IItemCategoryList[];
    specificationList: ISpecificationList[];
}

export interface IItemCategoryList {
    _id: string;
    category: string;
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
