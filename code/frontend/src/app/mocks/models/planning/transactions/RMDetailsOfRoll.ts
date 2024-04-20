export interface IRMDetailsOfRoll {
    _id?: string;
    GIN: string;
    GINDate: string;
    MRN: string;
    MRNNumber: string;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    shelfLife: number;
    PPICQty: number;
    status: string;
    isSelect?: boolean;
    width: number;
    length: number;
    SQM: number;
    roll: number;
    type?: string;
    totalRoll?: number;
    totalPPICQty?: number;
    stage?: string;
    referenceModel?: string;
    closedIRQty: number;
}
