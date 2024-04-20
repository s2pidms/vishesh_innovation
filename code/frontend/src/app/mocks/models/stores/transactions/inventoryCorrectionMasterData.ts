import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IInventoryCorrectionMasterData {
    autoIncrementNo: string;
    itemCategoriesOptions: string[];
    itemSubCategoriesOptions: ICommonData[];
}
