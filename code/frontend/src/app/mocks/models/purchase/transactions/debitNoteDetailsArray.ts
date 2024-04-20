export interface IDebitNoteDetailsArray {
    _id?: string;
    supplier: string;
    UOM: string;
    standardRate: number;
    purchaseRate: number;
    MRNRejectedQty: number;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    hsn: string;
    gst: number;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
    returnQty: number;
    lineValue: string;
    DNLineNumber: number;
}
