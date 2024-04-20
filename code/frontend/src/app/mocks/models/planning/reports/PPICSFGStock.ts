export interface PPICSFGStock {
    _id: string;
    stage: string;
    MRNNumber: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    PPICQty: number;
    createdAt: string;
    expiryDate: string;
    GINDate: string;
    WXL: string;
    width: number;
    length: number;
    noOfSlits: number;
    sqmPerRoll: number;
    noOfRolls: number;
    sqmTotal: number;
    status: string;
}
