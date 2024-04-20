import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface BookSalesOrderMasterData {
    autoIncrementNo: string;
    billFromLocationOptions: ICommonData[];
    freightTermsOptions: IParameterICommonData[];
    modeOfTransportOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    salesCategoryOptions: ICommonData[];
    transporterOptions: ICommonData[];
    customerOptions: Customers[];
    companyData: {_id: string; placesOfBusiness: PlacesOfBusiness[]};
}

export interface Customers {
    _id: string;
    customerName: string;
    customerCategory: string;
    customerPaymentTerms: string;
    customerCurrency: string;
    customerShippingAddress: CustomerShippingAddress[];
    customerBillingAddress: CustomerBillingAddress[];
}

export interface CustomerShippingAddress {
    line1: string;
    line2: string;
    line3: string;
    line4?: string;
    state: string;
    city?: string;
    district?: string;
    pinCode: string;
    country: string;
    contactPersonName?: string;
    contactPersonNumber?: string;
    _id: string;
}
export interface CustomerBillingAddress {
    line1: string;
    line2: string;
    line3: string;
    line4?: string;
    state: string;
    city?: string;
    district?: string;
    pinCode: string;
    country: string;
    contactPersonName?: string;
    contactPersonNumber?: string;
    _id: string;
}

export interface PlacesOfBusiness {
    locationID: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    state: string;
    city: string;
    district?: string;
    pinCode: string;
    country: string;
    _id?: string;
}
