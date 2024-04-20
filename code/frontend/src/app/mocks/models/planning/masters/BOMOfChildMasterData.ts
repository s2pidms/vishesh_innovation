export interface BOMOfChildMasterData {
    autoIncrementNo: string;
    childItemsOptions: ChildItemsDropDown[];
    mergedItems: BoMOfChildItems[];
}

export interface ChildItemsDropDown {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    unitOfMeasurement: string;
}

export interface BoMOfChildItems {
    reference: string;
    referenceModel: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    supplier: string;
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
