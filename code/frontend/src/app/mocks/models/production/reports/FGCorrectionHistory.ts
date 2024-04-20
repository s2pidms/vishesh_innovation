export interface FGCorrectionHistory {
    _id: string;
    SKUNo: string;
    SKUDescription: string;
    correctionCategory: string;
    availableSourceQty: number;
    FGDate: string;
    SKUName: string;
    sourceBatch: string;
    destinationBatch: any;
    transferQty: string | number;
}
