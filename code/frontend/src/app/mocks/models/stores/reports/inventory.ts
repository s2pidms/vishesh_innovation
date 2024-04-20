export interface Inventory {
    _id: string
    UOM: string
    openIRQty: number
    closedIRQty: number
    purchaseRatINR: number
    batchDate: string
    createdAt: string
    expiryDate: any
    MRNNumber: string
    supplier: string
    itemCode: string
    itemName: string
    itemDescription: string
    lineValue: number
    supplierName: string
    deliveryLocation: string
    status: string
  }