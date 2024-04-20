import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IGRNMasterData {
    autoIncrementNo: string;
    GRNQtyPercent: number;
    transporterOptions: ICommonData[];
    suppliersOptions: ISuppliers[];
}

export interface ISuppliers {
    label: string;
    value: string;
}

export interface IPurchaseOrders {
    _id?: string;
    PONumber: string;
    PODate: string;
    supplier: string;
    deliveryLocation: string;
    PODetails: IPODetails;
}

export interface IPODetails {
    POLineNumber: number;
    UOM: string;
    primaryUnit: string;
    POQty: number;
    standardRate: number;
    purchaseRate: number;
    invoicedQty: number;
    balancedQty: number;
    canceledQty: number;
    batchDate: string;
    // Item Details
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    conversionOfUnits: string;
}
