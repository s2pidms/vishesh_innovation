export interface ICustomerAddressMasterData {
    _id: string;
    customerCode: string;
    customerName: string;
    region: string;
    customerNickName: string;
    GSTIN: string;
    customerBillingAddress: CustomerBillingAddress[];
    customerShippingAddress: CustomerShippingAddress[];
}

export interface CustomerBillingAddress {
    line1: string;
    line2: string;
    line3: string;
    line4?: string;
    state: string;
    city: string;
    district?: string;
    pinCode: string;
    country: string;
    contactPersonName?: string;
    contactPersonNumber?: string;
    _id: string;
}

export interface CustomerShippingAddress {
    line1: string;
    line2: string;
    line3: string;
    line4?: string;
    state: string;
    city: string;
    district?: string;
    pinCode: string;
    country: string;
    contactPersonName?: string;
    contactPersonNumber?: string;
    _id: string;
}
