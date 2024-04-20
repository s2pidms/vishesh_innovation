import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface IGeneratePOMasterData {
    purchaseCategoryOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    freightTermsOptions: IParameterICommonData[];
    transporterOptions: ICommonData[];
    locationOptions: ICommonData[];
}
