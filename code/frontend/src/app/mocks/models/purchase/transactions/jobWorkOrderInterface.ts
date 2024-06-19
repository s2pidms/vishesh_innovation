import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface jobWorkOrderInterface {
    autoIncrementNo: string;
    jobWorkerOptions: JobWorkerOption[];
    serviceMastersOptions: serviceMastersOptions[];
    paymentTermsOptions: ICommonData[];
    purchaseCountryOptions: IParameterICommonData[];
    jobWODiscountOptions: IParameterICommonData[];
}
export interface JobWorkerOption {
    _id: string;
    jobWorkerCode: string;
    jobWorker: string;
    jobWorkerName: string;
    currency: string;
    state: string;
    cityOrDistrict: string;
    pinCode: string;
    primaryAddress: primaryAddress;
}
export interface primaryAddress {
    country: string;
    state: string;
    cityOrDistrict: string;
    pinCode: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
}
export interface serviceMastersOptions {
    _id: string;
    serviceCode: string;
    serviceDescription: string;
    gst: Number;
    igst: Number;
    sgst: Number;
    cgst: Number;
    ugst: Number;
}
