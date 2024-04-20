export interface PurchaseSAC {
    _id: string;
    sacCode: string;
    serviceDescription: string;
    gstRate: string;
    igstRate: string;
    sgstRate: string;
    cgstRate: string;
    ugstRate: string;
    createdAt?: string;
    revisionNo?: string;
    revisionDate?: string;
}
