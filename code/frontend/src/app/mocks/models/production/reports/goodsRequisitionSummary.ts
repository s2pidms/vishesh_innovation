export interface GoodsRequisitionSummary {
    _id: string;
    GRNumber: string;
    GRStatus: string;
    department: string;
    GRDate: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    GRQty: number;
}
