export interface SalesOrder {
    _id: string
    company?: string
    SONumber?: string
    currency?: string
    SOStatus?: string
    createdAt?: string
    SODate?: string
    SKUName: string
    SKUNo: string
    SKUDescription: string
    customerPartNo?: string
    UOM: string
    netRate?: number
    lineValue?: number
    customerName?: string
    scheduleNo?: number
    quantity?: number
    dispatchDate?: string
    location?: string
    partNo?: string
    batchNo?: string
    FGINDate?: string
    manufacturingDate?: string
    FGINQuantity?: string
    aging?: string
  }