import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IASNMasterData {
    autoIncrementNo: string;
    deliveryTypeOptions: ICommonData[];
    freightTermsOptions: IParameterICommonData[];
    modeOfTransportsOptions: ICommonData[];
    transporterOptions: ICommonData[];
    salesInvoices: IoSalesInvoices[];
}

export interface IoSalesInvoices {
    _id: string;
    salesInvoiceNumber: string;
}
