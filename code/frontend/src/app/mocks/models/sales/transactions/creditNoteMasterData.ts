import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface ICreditNoteMasterData {
    autoIncrementNo: string;
    salesCategoryOptions: ICommonData[];
    customersOptions: ICreditNoteCustomers[];
}
export interface ICreditNoteCustomers {
    label: string;
    value: string;
    customerCategory: string;
    customerCurrency?: string;
}
