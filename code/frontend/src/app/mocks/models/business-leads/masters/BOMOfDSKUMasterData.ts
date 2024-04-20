export interface BOMOfDSKUMasterData {
    autoIncrementNo: string;
    DSKUListOptions: DSKUList[];
    mergedItems: BoMOfDSKUDetails[];
}
export interface DSKUList {
    _id: string;
    dSKUNo: string;
    SKUName: string;
    SKUDescription: string;
    primaryUnit: string;
    SKUNo: string;
    id: string;
}

export interface BoMOfDSKUDetails {
    reference: string;
    referenceModel: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    supplierCode: string;
    UOM: string;
    qtyPerSKUUnit: number;
    wastePercentage: number;
    partCount: number;
    unitCost: number;
    itemCost: number;
    BOM: string;
    _id: string;
}
