import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IQuotationOfSKUMasterData {
    autoIncrementNo: string;
    salesCategoryOptions: ICommonData[];
    domesticTermsAndCond: ITermsAndCond[];
    exportsTermsAndCond: ITermsAndCond[];
}

export interface ITermsAndCond {
    order: number;
    label: number;
    value: number;
}
