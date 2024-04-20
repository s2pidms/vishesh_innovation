import { BillingAddress } from "./externalServiceProvider";

export interface IChannelPartner {
    _id: string;
    channelPartnerCategory: string;
    CPCode: string;
    channelPartnerName: string;
    GSTClassification: string;
    GSTIN: string;
    currency: string;
    isCPActive: string;
    billingAddress?: BillingAddress;
    shippingAddress?: any[];
    createdAt: string;
    country: string;
    state: string;
}


