export interface BOMOfProductMasterData {
    autoIncrementNo: string;
    productMasterOptions: ProductMasterList[];
}

export interface ProductMasterList {
    _id: string;
    productNo: string;
    productCategory: string;
    productName: string;
    productDescription: string;
    primaryUnit: string;
}
