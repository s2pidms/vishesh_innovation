export interface AmendPO {
    _id: string;
    purchaseCategory: string;
    PONumber: string;
    currency: string;
    POType: string;
    netPOValue: string;
    POValidity: string;
    POStatus: string;
    createdAt: string;
    PODateS: string;
    id: string;
    supplierName: string;
    orderReference?: string;
    deliveryLocation?: string;
    PORemarks?: string;
    totalPPV?: number;
}
