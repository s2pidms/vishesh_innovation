export interface BOMOfSKUMasterData {
    autoIncrementNo: string;
    SKUOptions: SKUList[];
    // mergedItems: BoMOfSKUDetails[];
}

export interface SKUList {
    _id: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    primaryUnit: string;
    id?: string;
}

// export interface BoMOfSKUDetails {
//     reference: string;
//     referenceModel: string;
//     itemCode: string;
//     itemName: string;
//     itemDescription: string;
//     supplierCode: string;
//     UOM: string;
//     qtyPerSKUUnit: number;
//     wastePercentage: number;
//     partCount: number;
//     unitCost: number;
//     itemCost: number;
//     BOM?: string;
//     _id: string;
// }
