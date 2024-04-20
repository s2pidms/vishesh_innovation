import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";
import {IHSNCodes} from "@mocks/models/purchase/masters";

export interface IMapCategoryHSNMasterData {
    autoIncrementNo: string;
    productCategoriesOptions: ICommonData[];
    salesHSNList: IHSNCodes[];
    colourCodeJCOptions: IParameterICommonData[];
}
