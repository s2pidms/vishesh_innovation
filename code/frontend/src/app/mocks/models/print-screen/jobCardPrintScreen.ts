export interface IJobCardPrintScreen {
    jobCard: JobCard;
    MRPData: MRPData[];
    PPICToProdGoodsList: PPICtoProdGoodsList[];
}

export interface JobCard {
    _id: string;
    SONo: string[];
    jobCardNo: string;
    artWorkNo: string;
    totalNoOfColors: number;
    batchDate: string;
    totalBatchQuantity: number;
    stage: string;
    NPDInput: string;
    customerName: string;
    dispatchSchedule: DispatchSchedule;
    UOM: string;
    jobCardDate: string;
    productCategory: string;
    SKUNo: string;
    SKUName: string;
    customerPartNo: string;
    actualDimensionsUnit: string;
    actualDimensionsWidth: number;
    actualDimensionsLength: number;
    actualDimensionsUps: number;
    layoutDimensionsUnit: string;
    layoutDimensionsWidth: number;
    layoutDimensionsLength: number;
    layoutDimensionsUps: number;
}

export interface DispatchSchedule {
    dispatchDate: string;
    _id: string;
}

export interface MRPData {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    partCount: string;
}

export interface PPICtoProdGoodsList {
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    issueQty: number;
}
