export interface BOMOfProducts {
    _id: string;
    BOMNo: string;
    productNo: string;
    productCategory: string;
    productName: string;
    productDescription: string;
    UOM: string;
    partCount: number;
    totalMaterialCost: number;
    status: string;
    createdAt?: string;
}
