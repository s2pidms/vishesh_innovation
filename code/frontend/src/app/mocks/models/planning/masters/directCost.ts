export interface DirectCost {
    _id: string;
    directCostNo: string;
    productCategory: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    totalLabourCostPerUnit: number;
    totalAssetCostPerUnit: number;
    totalToolingCostPerUnit: number;
    totalCostPerUnit: number;
    createdAt?: string;
}
