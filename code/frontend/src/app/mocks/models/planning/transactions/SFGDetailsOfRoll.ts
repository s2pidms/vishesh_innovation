export interface ISFGDetailsOfRoll {
    _id: string;
    SFGStockCode: string;
    processDate: string;
    processName: string;
    stage: string;
    machineName: string;
    inputSource: string;
    GIN: string;
    GINDate: string;
    WIPInventory: string;
    MRN: string;
    MRNNumber: string;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    unitConversion: string;
    UOM: string;
    shelfLife: number;
    PPICQty: number;
    isSelect: boolean;
    noOfRollsToBeSlit: number;
    outputDetails?: OutputDetails;
    expiryDate: string;
    status: string;
}

export interface OutputDetails {
    width: number;
    length: number;
    sqmPerRoll: number;
    noOfSlits: number;
    sqmTotal: number;
    usage: number;
}
