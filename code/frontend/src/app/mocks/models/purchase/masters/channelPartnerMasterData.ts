import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IChannelPartnerMasterData {
    autoIncrementNo: string;
    currenciesOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    purchaseTypesOptions: ICommonData[];
}
