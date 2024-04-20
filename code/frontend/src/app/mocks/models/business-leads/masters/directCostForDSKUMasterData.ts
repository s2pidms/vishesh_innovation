export interface DirectCostForDSKUMasterData {
    autoIncrementNo: string;
    processList: ProcessList[];
    productCategories: ProductCategories[];
}
export interface ProcessList {
    _id: string;
    dSKUNo: string;
    SKUName: string;
    SKUDescription: string;
    primaryUnit: string;
    SKUNo: string;
    id: string;
}
export interface ProductCategories {
    _id: string;
    productCategory: string;
}
