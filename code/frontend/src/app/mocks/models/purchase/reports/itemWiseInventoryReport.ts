export interface ItemWiseInventoryReport {
    _id: string;
    UOM: string;
    closedIRQty: number;
    purchaseRatINR: number;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    lineValue: number;
}
