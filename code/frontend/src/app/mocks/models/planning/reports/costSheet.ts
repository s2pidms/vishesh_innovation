export interface CostSheet {
    _id: string;
    productCategory: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    sellingPrice: number;
    directMaterial: number;
    directLabour: number;
    directExpenses: number;
    costOfGoodsSold: number;
    operatingExpenses: number;
    totalCostOfOperation: number;
    profit: number;
    profitPercent: number;
}
