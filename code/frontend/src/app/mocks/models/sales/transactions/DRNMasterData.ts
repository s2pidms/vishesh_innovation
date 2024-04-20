import {ICommonData} from "@mocks/models/business-leads/transactions";
import {Customers} from "./bookSalesOrderMasterData";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface DRNMasterData {
    autoIncrementNo: string;
    freightTermsOptions: IParameterICommonData[];
    modeOfTransportOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    salesCategoryOptions: ICommonData[];
    transporterOptions: ICommonData[];
    customersOptions: Customers[];
}
