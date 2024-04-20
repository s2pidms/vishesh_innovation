export interface IPurchaseEntryMasterData {
    purchaseCategoryOptions: IpurchaseCategoryOptions[];
    suppliersOptions: IsuppliersOptions[];
    autoIncrementNo: string;
}
export interface IpurchaseCategoryOptions {
    _id: string;
    parameterName: string;
    parameterLabel: string;
    order: number;
    label: string;
    value: string;
}

export interface IsuppliersOptions {
    supplierName: string;
    supplierGST: string;
    supplier: string;
    _id: string;
}

