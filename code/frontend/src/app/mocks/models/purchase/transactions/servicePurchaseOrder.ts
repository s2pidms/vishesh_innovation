export interface ServicePurchaseOrder {
    _id: string;
    purchaseCategory: string;
    SPONumber: string;
    currency: string;
    SPOStatus: string;
    createdAt?: string;
    netSPOValue: string;
    SPODateS: string;
    supplier: string;
    supplier_id: string;
    orderReference?: string;
    deliveryLocation?: string;
    SPORemarks?: string;
    deliveryDate?: string;
}
