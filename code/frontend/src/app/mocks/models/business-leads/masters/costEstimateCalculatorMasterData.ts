export interface ICostEstimateCalculatorMasterData {
    costSheetList: ICostEstimateSheetList[];
    DSKUOptions: ICostEstimateDSKUOptions[];
}

export interface ICostEstimateSheetList {
    _id: string;
    componentCode: string;
    componentType: string;
    order: number;
    costElement: string;
    tooltip: string;
    isTotal: boolean;
    costPerSKUUnit: number;
    percentage: number;
}

export interface ICostEstimateDSKUOptions {
    _id: string;
    dSKUNo: string;
    SKUName: string;
    SKUDescription: string;
    primaryUnit: string;
}
