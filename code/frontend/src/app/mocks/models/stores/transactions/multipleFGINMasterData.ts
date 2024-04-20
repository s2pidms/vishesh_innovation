import { ICommonData } from "@mocks/models/business-leads/transactions";

export interface IMultipleFGINMasterData {
    autoIncrementNo: string;
    productCategories: ICommonData[];
    SKUMasters: IMultipleFGINSKUMasters[];
}

export interface IMultipleFGINSKUMasters {
    _id: string;
    SKUNo: string;
    productCategory: string;
    SKUName: string;
    SKUDescription: string;
    primaryUnit: string;
    shelfLife: number;
}
