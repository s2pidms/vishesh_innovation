export interface PPVDetails {
    _id: string;
    PONumber: string;
    currency: string;
    PODateS: string;
    POQty: number;
    supplierName: string;
    itemCode: string;
    itemDescription: string;
    standardPrice: number;
    actualPrice: number;
    variance: number;
    variancePercentage: number;
}
