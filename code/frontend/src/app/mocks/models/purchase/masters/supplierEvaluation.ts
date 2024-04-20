export interface SupplierEvaluation {
    _id: string;
    name: string;
    description: string;
    enabled: string;
    weight: number;
    passingPercentage: number;
    failingPercentage: number;
}
