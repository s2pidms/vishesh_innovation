export interface IRawMaterialInspection {
    _id: string
    MRNNumber: string
    supplierInvoice: string
    MRNStatus: string
    MRNRemarks: any
    itemCode: string
    itemName: string
    itemDescription: string
    MRNDate: string
    supplierName: string
    GRNNumber: string
    GRNDate: string
    GRNQty: number
    supplierDate: string
    batchNo: string
    batchDate: string
    UOM: string
    QCLevels: string
    QCLevelsDetails: any[]
    MRNReleasedBy: string
  }
  