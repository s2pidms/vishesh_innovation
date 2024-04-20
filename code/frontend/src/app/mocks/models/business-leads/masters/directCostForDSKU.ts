export interface DirectCostForDSKU {
    _id: string;
    directCostNo: string;
    productCategory: string;
    DSKUNo: string;
    DSKUName: string;
    DSKUDescription: string;
    UOM: string;
    totalLabourCostPerUnit: number;
    totalAssetCostPerUnit: number;
    totalToolingCostPerUnit: number;
    totalCostPerUnit: number;
    createdAt?: string;
}
