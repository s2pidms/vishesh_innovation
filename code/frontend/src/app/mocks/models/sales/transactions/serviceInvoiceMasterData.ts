import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IServiceInvoiceMasterData {
    autoIncrementNo: string;
    billFromLocationOptions: ICommonData[];
    customerCategoryOptions: ICommonData[];
    customersOptions: IServiceInvoiceCustomers[];
    servicesList: IServices[];
}

export interface IServiceInvoiceCustomers {
    _id?: string;
    GSTIN: string;
    customerName: string;
    customerCategory: string;
    customerPaymentTerms: string;
    customerCurrency: string;
    company?: ICompany;
}
export interface ICompany {
    GSTIN: string;
}

export interface IServices {
    serviceCode: string;
    _id: string;
    serviceDescription: string;
    sacCode: string;
    gst: string;
    igst: string;
    sgst: string;
    cgst: string;
}
