export interface SalesCostAnalysis {
    _id: string
    currency: string
    totalOrders: number
    totalTotalCost: number
    averageCost: number
    minCost: number
    maxCost: number
    SKUName: string
    customerName: string
    dateRange: string
  }