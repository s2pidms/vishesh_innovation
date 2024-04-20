export interface GoodsIssueReport {
    _id: string
    deliveryLocation: string
    createdAt: string
    GIDate: string
    GRNumber: string
    MRNNumber: string
    itemCode: string
    itemName: string
    GINDate: string
    itemDescription: string
    shelfLife: number
    UOM: string
    GRQty: number
    GIQty: number
    expiryStatus: string
  }