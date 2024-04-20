export interface IGIPPICToProductionGIDetails {
    MRNNumber: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    expiryDate?: string;
    WIP: string;
    MRN: string;
    item: string;
    conversionOfUnits: string;
    primaryUnit: string;
    secondaryUnit: string;
    primaryToSecondaryConversion?: string;
    secondaryToPrimaryConversion?: string;
    PPICQty: number;
    aging: string;
    issueQty: number;
}
