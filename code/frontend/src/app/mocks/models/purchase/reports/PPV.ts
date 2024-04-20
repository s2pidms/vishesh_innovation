export interface PPV {
    _id: string;
    company?: string;
    PONumber: string;
    POStatus: string;
    createdAt?: string;
    PODateS: string;
    ppv: number;
    POQty?: number;
    supplierName: string;
    itemCode: string;
    itemDescription: string;
    standardRate?: number;
    purchaseRate?: number;
}
