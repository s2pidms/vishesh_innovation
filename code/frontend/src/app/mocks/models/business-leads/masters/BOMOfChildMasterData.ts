export interface BOMOfChildMasterData {
    autoIncrementNo: string;
    childItemsDropDown: ChildItemsDropDown[];
}

export interface ChildItemsDropDown {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    unitOfMeasurement: string;
}
