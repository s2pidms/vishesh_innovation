import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IJobWorkerMasterData {
    autoIncrementNo: string;
    currenciesOptions?: ICommonData[];
    paymentTermsOptions: ICommonData[];
    purchaseCountryOptions: IParameterICommonData[];
}
