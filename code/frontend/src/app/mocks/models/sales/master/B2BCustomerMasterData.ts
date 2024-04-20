import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface B2BCustomerMasterData {
    autoIncrementNo: string;
    salesCountry: SalesCountry[];
    gstClassifications: ICommonData[];
    paymentTermsOptions: ICommonData[];
    salesCategoryOptions: ICommonData[];
    zones: ICommonData[];
    currenciesOptions: ICommonData[];
}

export interface SalesCountry {
    _id: string;
    parameterLabel: string;
    parameterName: string;
}
