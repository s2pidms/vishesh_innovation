import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IDebitNoteMasterData {
    autoIncrementNo: string;
    suppliersOptions: ICommonData[];
    purchaseTypesOptions: IDebitNoteSuppliers[];
}

export interface IDebitNoteSuppliers {
    value: string;
    label: string;
    supplierPurchaseType: string;
    supplierCurrency: string;
}
