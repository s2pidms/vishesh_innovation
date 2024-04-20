export interface Asset {
    _id: string;
    assetType: string;
    assetCode: string;
    assetName: string;
    assetDescription: string;
    location: string;
    totalAssetCostPerHr: number;
    status: string;
    createdAt: string;
    assetPurchaseDateS: string;
    assetPurchaseCost?: string;
    expiryStatus?: string;
    depreciationStartDateS?: any;
    assetPurchaseDate: any;
    estimatedUsefulLifeInYear: any;
}
