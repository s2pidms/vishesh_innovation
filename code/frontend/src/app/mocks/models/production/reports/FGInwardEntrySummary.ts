export interface FGInwardEntrySummary {
    _id: string;
    FGINNo: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    batchNo: string;
    FGINDate: string;
    manufacturingDate: string;
    FGINQuantity: string;
    partNo?: string | number;
    expiryDate : string;
}
