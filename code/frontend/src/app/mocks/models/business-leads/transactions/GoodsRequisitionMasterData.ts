export interface GoodsRequisitionMasterData {
    autoIncrementNo: string;
    itemCategories: ItemCategories[];
    location: Location[];
}

export type ItemCategories = string[];

export interface Location {
    label: string;
    value: string;
}
