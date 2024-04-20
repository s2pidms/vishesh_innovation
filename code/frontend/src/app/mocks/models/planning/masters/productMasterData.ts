import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IHSNCodes} from "./childMasterData";

export interface IProductMasterData {
    autoIncrementNo: string;
    hsnCodes: IHSNCodes[];
    productCategories: ICommonData[];
    UOMOptions: ICommonData[];
    WXLDimensionsUnit: string[];
}
