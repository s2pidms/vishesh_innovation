export interface PurchaseHSN {
    _id: string;
    hsnCode: string;
    goodsDescription: string;
    gstRate: string;
    igstRate: string;
    sgstRate: string;
    cgstRate: string;
    ugstRate: string;
    createdAt?: string;
    revisionNo?: string;
    revisionDate?: string;
}
