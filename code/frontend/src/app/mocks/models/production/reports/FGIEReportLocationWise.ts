export interface FGIEReportLocationWise {
    _id: string;
    FGINNo: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    expiryDate: any;
    batchNo: string;
    FGINDate: string;
    manufacturingDate: string;
    // producedQty: string;
    FGINQuantity: string;
    aging?: string;
    partNo?: string | number;
}
