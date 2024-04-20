import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface SalesForecastMasterData {
    autoIncrementNo: string;
    salesCategoryOptions: ICommonData[];
    customersOptions: SalesForecastCustomers[];
}
export interface SalesForecastCustomers {
    _id: string;
    customerName: string;
    customerCategory: string;
    customerCurrency: string;
}
