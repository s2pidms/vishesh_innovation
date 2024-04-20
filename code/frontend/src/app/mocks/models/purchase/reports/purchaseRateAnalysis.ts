export interface PurchaseRateAnalysis {
    _id: string;
    standardRate: number;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    supplierName: string;
    lastFiveAvgRate: number;
    lastTenAvgRate: number;
}
