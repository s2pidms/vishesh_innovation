export interface PendingDSKUConversion {
    _id: string;
    dSKUNo: string;
    SKUName: string;
    SKUDescription: string;
    NPDDate: string;
    NPDUpdatedAt?: string;
    customerName: string;
    daysPending: number;
}
