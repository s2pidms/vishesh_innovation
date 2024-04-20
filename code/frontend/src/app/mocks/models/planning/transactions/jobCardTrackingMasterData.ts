export interface IJobCardTrackingMasterData {
    // autoIncrementNo: string;
    jobTrackingData: IJobCardTracking[];
}

export interface IJobCardTracking {
    jobCardOutputNo: string;
    jobCardNo: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    batchDate: string;
    batchInputQty: Number;
    batchOutputQty: Number;
    status: string;
}
