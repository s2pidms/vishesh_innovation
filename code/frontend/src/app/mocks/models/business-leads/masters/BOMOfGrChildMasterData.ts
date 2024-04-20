export interface BOMOfGrChildMasterData {
    autoIncrementNo: string;
    childItemsDropDown: GrChildItemsDropDown[];
}

export interface GrChildItemsDropDown {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    unitOfMeasurement: string;
}
