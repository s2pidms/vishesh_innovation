export interface ISKUDetailsOfJC {
    reference: string;
    referenceModel: string;
    SO_FCNumber: string;
    SO_FCDate: string;
    SO_FCLineTargetDate?: string;
    code: string;
    SKU: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    drawing: string;
    UOM: string;
    internalPartNo?: string;
    balQty: number;
    totalFGQty: number;
    batchQty: number;
    previousQty: number;
    FGInventoryInfo?: FginventoryInfo[];
    dispatchSchedule?: DispatchSchedule[];
    totalQty: number;
}

export interface FginventoryInfo {
    _id: string;
    UOM: string;
    batchNo: string;
    batchDate: string;
    FGQty: number;
    aging: string;
}

export interface DispatchSchedule {
    scheduleNo: number;
    quantity: number;
    dispatchDate: string;
}
