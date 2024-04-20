export interface RoutingMaster {
    _id: string;
    routingCode: string;
    SKUCode: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    partCount: number;
    totalRoutingCost: number;
    status: string;
    createdAt?: string;
}
