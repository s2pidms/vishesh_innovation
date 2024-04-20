export interface GrandChildItem {
  _id: string;
  childItemCategory: string;
  itemCode: string;
  itemName: string;
  itemDescription: string;
  HSNCode: string;
  unitOfMeasurement: string;
  sourceOfManufacturing: string;
  status: string;
  createdAt?: string;
  avgConsumptionPerMonth?: number;
  itemCost?: number;
  shelfLife?: number;
  storageTemp?: number;
  storageHumidity?: number;
  specialStorageInstruction?: string;
  extServiceProviderName?: any;
  paymentTerms?: any;
}
