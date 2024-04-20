import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface ISupplierMasterData {
    autoIncrementNo: string;
    currenciesOptions?: ICommonData[];
    paymentTermsOptions: ICommonData[];
    freightTermsOptions: IParameterICommonData[];
    purchaseTypesOptions: ICommonData[];
    purchaseCountryOptions: IParameterICommonData[];
}
