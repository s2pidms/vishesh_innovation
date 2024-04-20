export interface PPICStockIssue {
    _id: string;
    status: string;
    createdAt: string;
    issueDate: string;
    MRNNumber: string;
    itemCode: string;
    itemName: string;
    stage: string;
    WXL: string;
    width: number;
    length: number;
    qty: number;
    UOM: string;
    issueQty: number;
}
