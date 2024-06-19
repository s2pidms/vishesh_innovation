import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IDirectTaxInvoiceMasterData {
    autoIncrementedValues: any;
    companyData: any;
    customerCategoryOptions: ICommonData[];
    transporterOptions: ICommonData[];
    freightTermsOptions: ICommonData[];
    modeOfTransportOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    billFromLocationOptions: ICommonData[];
    customersOptions: IInvoiceCustomers[];
}
export interface IInvoiceCustomers {
    _id?: string;
    customerName: string;
    customerCategory: string;
}
