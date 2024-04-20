import {ICommonData} from "@mocks/models/business-leads/transactions";
import {ISpecificationList} from "./RMSpecificationsMasterData";

export interface IProductSpecificationsMasterData {
    autoIncrementNo: string;
    productCategories: ICommonData[];
    SKUOptions: ISKUList[];
    specificationList: ISpecificationList[];
}

export interface ISKUList {
    _id: string;
    SKUNo: string;
    productCategory?: string;
    SKUName: string;
    SKUDescription: string;
    primaryUnit: string;
}
