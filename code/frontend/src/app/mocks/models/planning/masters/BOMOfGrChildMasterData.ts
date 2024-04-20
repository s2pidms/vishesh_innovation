export interface BOMOfGrChildMasterData {
    autoIncrementNo: string;
    childItemsOptions: GrChildItemsDropDown[];
    itemsList: ItemsList[];
}

export interface GrChildItemsDropDown {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    unitOfMeasurement: string;
}

export interface ItemsList {
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
