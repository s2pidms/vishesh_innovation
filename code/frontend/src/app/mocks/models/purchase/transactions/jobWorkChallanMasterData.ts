import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";
import {JobWorkerOption} from "../masters/jobWorkerItemMasterData";

export interface IJobWorkChallanMasterData {
    jobWorkerOptions: JobWorkerOption[];
    transporterOptions: ICommonData[];
    SACOptions: ICommonData[];
    jobWorkItemOptions: ICommonData[];
    purchaseCategoryOptions: ICommonData[];
    modeOfTransportOptions: ICommonData[];
    freightTermsOptions: IParameterICommonData[];
}

export interface IJWChallanDetails {
    primaryUnit: string;
    secondaryUnit: string;
    primaryToSecondaryConversion: any;
    conversionOfUnits: string;
    HSN: string;
    HSNCode: number;
    gst: number;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
    JWLChallanLineNo: number;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    currency: any;
    unitRate: number;
    stdCostUom1: number;
    quantity: number;
    taxableAmt: number;
}
