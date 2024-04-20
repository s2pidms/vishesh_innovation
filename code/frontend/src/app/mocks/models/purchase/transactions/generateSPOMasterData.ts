import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IGenerateSPOMasterData {
    autoIncrementNo: string;
    purchaseCategories: ICommonData[];
    locationOptions: ICommonData[];
    serviceMasters: IServiceMasters[];
    suppliersOptions: ISPOSuppliers[];
}

export interface IServiceMasters {
    _id: string;
    serviceCode: string;
    serviceDescription: string;
    purchaseRate: string;
    gst: number;
    igst: number;
    sgst: number;
    cgst: number;
    ugst: number;
}

export interface ISPOSuppliers {
    _id: string;
    supplierName: string;
    supplierPurchaseType: string;
    supplierCurrency: string;
}
