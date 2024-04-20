export interface InventoryCorrection {
    _id: string;
    UOM: string;
    openIRQty: string;
    closedIRQty: number;
    createdAt: string;
    GINDateS: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    itemType: string;
    itemSubCategory: string;
    MRNNumber: string;
    updatedQty: number | string;
}
