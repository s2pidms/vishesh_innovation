export interface PurchaseCostAnalysis {
    _id: string;
    currency: string;
    PODateMin: string;
    PODateMax: string;
    totalOrders: number;
    totalTotalCost: number;
    averageCost: number;
    minCost: number;
    maxCost: number;
    dateRange: string;
    itemType: string;
    itemName: string;
    supplierName: string;
}
