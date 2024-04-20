export interface SalesForecast {
    _id: string;
    FCNo: string;
    currency: string;
    FCDate: string;
    SKUName: string;
    SKUNo: string;
    SKUDescription: string;
    customerPartNo: string;
    UOM: string;
    netRate: number;
    lineValue: number;
    scheduleNo: number;
    quantity: number;
    dispatchDate: string;
    customerName: string;
}
