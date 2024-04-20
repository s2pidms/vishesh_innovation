export interface FCDetailsArray {
    FCLineNumber: number;
    SKU: string;
    SKUNo: string;
    UOM: string;
    customerPartNo: string;
    standardRate: number;
    discount: number;
    netRate: number;
    orderedQty: number;
    lineValue: number;
    invoicedQty: number;
    balancedQty: number;
    previousDRNQty: number;
    canceledQty: number;
    releaseSchedule: ReleaseSchedule[];
    _id?: string;
}

export interface ReleaseSchedule {
    scheduleNo: number;
    quantity: number;
    dispatchDate: string;
    UOM?: string;
    _id?: string;
}
