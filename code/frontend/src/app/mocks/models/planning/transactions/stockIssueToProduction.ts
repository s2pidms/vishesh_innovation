export interface StockIssueToProduction {
    _id: string;
    status: string;
    createdAt: string;
    issueDate: string;
    MRNNumber: string;
    itemCode: string;
    itemName: string;
    stage: string;
    width: number;
    length: number;
    qty: number;
    UOM: string;
    issueQty: number;
    sheetQty?: number;
    department?: string;
    jobCardNo?: string;
    WxL?: string;
}
