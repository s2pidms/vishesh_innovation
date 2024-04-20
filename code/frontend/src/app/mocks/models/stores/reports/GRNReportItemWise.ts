export interface GRNReportItemWise {
    _id: string
    company: string
    GRNNumber: string
    deliveryLocation: string
    createdAt: string
    GRNDate: string
    itemName: string
    itemCode: string
    itemDescription: string
    UOM: string
    GRNQty: number
    invoicedQty: number
    batchDate: string
    balancedQty: number
  }