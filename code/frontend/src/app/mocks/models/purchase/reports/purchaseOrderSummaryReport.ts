export interface PurchaseOrderSummaryReport {
    _id?: string;
    totalOrders: number;
    PODateMin: string;
    PODateMax: string;
    currency: string;
    totalAmount: number;
    itemCategory: string;
    supplierName: string;
    dateRange: string;
    avgOrderValue: number;
}
