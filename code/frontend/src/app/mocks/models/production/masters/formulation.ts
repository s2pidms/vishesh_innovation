export interface Formulation {
    _id: string;
    HSNCode: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UoM: string;
    inkCostPerKg: number;
    status: string;
    createdAt?: string;
    inkCostPerGm: number;
    totalCost: number;
    totalQty: number;
    totalCostPerGm?: number;
    totalQtyPerGm?: number;
}
