export interface CostSheetForDSKU {
    _id: string;
    DSKUNo: string;
    DSKUName: string;
    DSKUDescription: string;
    UOM: string;
    sellingPrice: number;
    directMaterial: number;
    directLabour: number;
    directExpenses: number;
    costOfGoodsSold: number;
    operatingExpenses: number;
    totalCostOfOperation: number;
    profit: number;
    profitPercent?: string;
    productCategory : string;
}
