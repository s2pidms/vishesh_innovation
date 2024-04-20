import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IExternalProviderMasterData {
    currenciesOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    ESPCategoryOptions: IESPCategoryList[];
}

export interface IESPCategoryList {
    _id: string;
    category: string;
}
