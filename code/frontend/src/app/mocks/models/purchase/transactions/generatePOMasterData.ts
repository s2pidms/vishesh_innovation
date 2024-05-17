import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IGeneratePOMasterData {
    purchaseCategoryOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    freightTermsOptions: IParameterICommonData[];
    transporterOptions: ICommonData[];
    locationOptions: ICommonData[];
    serviceChargesList: IServiceChargesList[];
}

export interface IServiceChargesList {
    _id: string;
    order: number;
    description: string;
    SACCode: string;
    GSTRate: number;
    currency: any;
    serviceCharges: any;
}
