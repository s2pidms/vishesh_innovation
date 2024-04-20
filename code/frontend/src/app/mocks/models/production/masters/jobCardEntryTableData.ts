export interface IJobCardEntryTableData {
    _id: string;
    jobCardEntryCode?: string;
    jobCard?: string;
    jobCardNo: string;
    SKU?: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    totalBatchQuantity: number;
    batchOutputQty?: string;
    batchNumber?: string;
    status: string;
}
