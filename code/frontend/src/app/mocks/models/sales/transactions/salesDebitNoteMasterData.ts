import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface SalesDebitNoteMasterData {
    autoIncrementNo: string;
    salesCategoryOptions: ICommonData[];
    customersOptions: SalesDebitNoteCustomers[];
}
export interface SalesDebitNoteCustomers {
    _id: string;
    customerName: string;
    customerCategory: string;
    customerCurrency?: string;
}
