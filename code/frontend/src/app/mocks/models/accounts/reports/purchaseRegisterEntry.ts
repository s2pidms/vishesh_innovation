export interface PurchaseRegisterEntry {
    _id: string;
    PEntryNo: string;
    PEntryDate: string;
    supplierName: string;
    supplierGST: string;
    purchaseCategory: string;
    taxInvoiceNo: string;
    taxInvoiceDate: string;
    taxableAmt: number;
    SGSTAmt: number;
    CGSTAmt: number;
    IGSTAmt: number;
    totalAmt: number;
    TCSAmt: number;
    roundOffAmt: number;
    roundOffTotalAmt: number;
    status: string;
}
