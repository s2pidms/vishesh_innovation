import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IDirectTaxInvoiceMasterData {
    autoIncrementNo: string;
    salesCategoryOptions: ICommonData[];
    customersOptions: IInvoiceCustomers[];
}
export interface IInvoiceCustomers {
    _id?: string;
    customerName: string;
    customerCategory: string;
}
