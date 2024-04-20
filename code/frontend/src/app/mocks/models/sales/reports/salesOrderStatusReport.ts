export interface SalesOrderStatus {
    _id: string
    company?: string
    SONumber?: string
    PONumber?: string
    SOStatus?: string
    createdAt?: string
    SODate?: string
    SKUName: string
    SKUNo: string
    SKUDescription: string
    customerPartNo?: string
    UOM: string
    SOQty?: number
    SObalQty?: number
    dispatchQty?: number
    customerName?: string
    partNo?: string
  }