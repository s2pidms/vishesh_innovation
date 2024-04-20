export interface IJobCardPrintScreen {
    jobCard: JobCard
    MRPData: Mrpdaum[]
    PPICToProdGoodsList: any[]
  }
  
  export interface JobCard {
    _id: string
    SONo: string[]
    company: string
    jobCardNo: string
    batchDate: string
    totalBatchQuantity: number
    stage: string
    NPDInput: string
    customerName: string
    reference: string
    referenceModel: string
    orderType: string
    dispatchSchedule: DispatchSchedule
    UOM: string
    jobCardDate: string
    productCategory: string
    SKUNo: string
    SKUName: string
    customerPartNo: string
    SKU: string
    actualDimensionsUnit: string
    actualDimensionsWidth: number
    actualDimensionsLength: number
    actualDimensionsUps: number
    layoutDimensionsUnit: string
    layoutDimensionsWidth: number
    layoutDimensionsLength: number
    layoutDimensionsUps: number
  }
  
  export interface DispatchSchedule {
    scheduleNo: number
    quantity: number
    dispatchDate: string
    PPICDate: string
    _id: string
  }
  
  export interface Mrpdaum {
    _id: string
    itemCode: string
    itemName: string
    itemDescription: string
    UOM: string
    partCount: string
  }
  