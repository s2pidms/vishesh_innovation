export interface SalesHSN {
    _id: string;
    hsnCode: string;
    goodsDescription: string ;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    ugstRate: number;
    revisionNo?: string;
    revisionDate?: string;
}
