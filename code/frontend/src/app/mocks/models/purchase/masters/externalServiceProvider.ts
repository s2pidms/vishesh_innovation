export interface ExternalServiceProvider {
    _id: string;
    ESPCategory: string;
    ESPCode: string;
    ESPName: string;
    GSTClassification: string;
    GSTIN: string;
    currency: string;
    isESPActive: string;
    billingAddress?: BillingAddress;
    shippingAddress?: any[];
    createdAt: string;
    country: string;
    state: string;
}

export interface BillingAddress {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    _id: string;
}
