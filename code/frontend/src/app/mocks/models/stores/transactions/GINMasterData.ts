import {ISuppliers} from "./GRNMasterData";

export interface IGINMasterData {
    autoIncrementNo: string;
    suppliers: ISuppliers[];
    mrnList: IMRNList[];
}

export interface IMRNList {
    _id: string;
    MRNNumber: string;
    MRNDate: string;
    GRNNumber: string;
    supplierInvoice: string;
    supplierDate: string;
    MRNDetails: IMRNDetail[];
    deliveryLocation: string;

    // Supplier Details
    supplier: "Supplier _id";
    supplierName: string;
    supplierPurchaseType: string;
    supplierCurrency: string;

    // StorageLocationMapping Data
    subLocation: string;
    rowNo: string;
    rackNo: string;
    binNo: string;
    otherId: string;
}

export interface IMRNDetail {
    MRNLineNumber: number;
    UOM: string;
    standardRate: number;
    purchaseRate: number;
    releasedQty: number;
    rejectedQty: number;
    batchNo: string;
    batchDate: string;
    _id: string;

    // Item Details
    item: "item _id";
    itemCode: string;
    itemType: string;
    itemSubCategory: string;
    itemName: string;
}

// export interface Grnnumber {
//   storageLocationMapping: StorageLocationMapping
//   _id: string
// }

// export interface StorageLocationMapping {
//   subLocation: string
//   rowNo: string
//   rackNo: string
//   binNo: string
//   otherId: string
// }

// export interface Supplier {
//   _id: string
//   supplierName: string
//   supplierPurchaseType: string
//   supplierCurrency: string
// }

// export interface Item {
//   _id: string
//   itemCode: string
//   itemType: string
//   itemSubCategory: string
//   itemName: string
// }
