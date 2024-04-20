export interface ProductMaster {
    _id: string;
    productNo: string;
    productCategory: string;
    productName: string;
    productDescription: string;
    hsn: string;
    primaryUnit: string;
    unitCost: number;
    sourceOfMFG: string;
    shelfLife: number;
    storageTemp: any;
    storageHumidity: any;
    status: string;
}
