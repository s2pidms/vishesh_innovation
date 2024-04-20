import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface MRNMasterData {
    autoIncrementNo: string;
    locationOptions: ICommonData[];
    suppliersOptions: ISuppliers[];
    grnList: IGRNList[];
    QCLevelsOptions: IParameterICommonData[] | any;
}
export interface ISuppliers {
    _id: string;
    supplierName: string;
}

export interface IGRNList {
    _id: string;
    GRNNumber: string;
    supplier: string;
    supplierInvoiceRef: string;
    supplierInvoiceRefDate: string;
    remarks: string;
    deliveryLocation: string;
    GRNDetails: IGRNDetail[];
}

export interface IGRNDetail {
    GRNLineNumber: number;
    POLineNumber: number;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    conversionOfUnits?: string;
    QCLevels?: string;
    QCLevelsDetails?: any[];
    UOM: string;
    shelfLife?: number;
    GRNQty: number;
    standardRate: number;
    purchaseRate: number;
    balancedQty: number;
    rejectedQty?: number;
    releasedQty?: number;
    batchDate: string;
    _id: string;
}
