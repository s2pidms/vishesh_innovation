import {ISpecificationList} from "./RMSpecificationsMasterData";

export interface IProductCategorySpecificationsMasterData {
    autoIncrementNo: string;
    productCategoryList: IProductCategorySpecificationList[];
    specificationList: ISpecificationList[];
}

export interface IProductCategorySpecificationList {
    _id: string;
    productNumber: string;
    productCode?: string;
    displayProductCategoryName: string;
    application: string;
    categoryStatus: string;
}
