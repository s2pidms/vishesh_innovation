export interface MRNReportItemWise {
    _id: string
    company: string
    MRNNumber: string
    supplierInvoice: string
    MRNStatus: string
    createdAt: string
    MRNDate: string
    GRNNumber: string
    GRNDate: string
    supplierName: string
    supplierDate: string
    itemName: string
    itemCode: string
    itemDescription: string
    batchNo: string
    batchDate: string
    UOM: string
    GRNQty: number
    releasedQty: number
    rejectedQty: number
  }