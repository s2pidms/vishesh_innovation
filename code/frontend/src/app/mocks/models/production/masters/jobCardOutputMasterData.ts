import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IJobCardOutputMasterData {
    autoIncrementNo: string;
    jobCardDetails: IJobCardDetails[] | any;
    location: ICommonData[];
}

export interface IJobCardDetails {
    _id: string;
    jobCardNo: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    batchQty: number;
}



