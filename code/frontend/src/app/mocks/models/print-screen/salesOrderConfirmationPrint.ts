export interface ISalesOrderConfirmationPrintScreen {
    _id: string;
    company: SOConfirmationCompany;
    customer: SOConfirmationCustomer;
    SONumber: string;
    SOType: string;
    SODate: string;
    PONumber: string;
    PODate: string;
    currency: string;
    SODetails: SODetail[];
    customerBillingAddress: SOCustomerBillingAddress;
    customerShippingAddress: SOCustomerShippingAddress;
    modeOfTransport: string;
    frightTerms: string;
    transporter: string;
    destination: string;
    SORemarks: string;
    otherCharges: SOOtherCharges;
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalAmountWithTax: number;
    roundedOff: number;
    EWayBillApplicable: string;
    salesCategory: string;
    billFromLocation: string;
}

export interface SOConfirmationCompany {
    _id: string;
    companyBankName: string;
    companyAccountNumber: string;
    companyBankIFSCCode: string;
    companyName: string;
    GSTIN: string;
    companyBankBranch: string;
    companyBankMICRCode: string;
    companyBefName: string;
    SOSignatureUrl: string;
    SOPdfHeaderUrl: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
}

export interface SOConfirmationCustomer {
    _id: string;
    GSTIN: string;
    customerBillingAddress: SOCustomerBillingAddress;
    customerShippingAddress: SOCustomerShippingAddress;
    customerContactInfo: SOCustomerContactInfo;
    transporter: string;
    destination: string;
    customerPaymentTerms: string;
}

export interface SOCustomerBillingAddress {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
    _id: string;
}

export interface SOCustomerShippingAddress {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
    _id: string;
}

export interface SOCustomerContactInfo {
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface SODetail {
    SKU: SOSKU;
    UOM: string;
    customerPartNo: string;
    standardRate: number;
    discount: number;
    netRate: number;
    SOLineTargetDate: string;
    orderedQty: number;
    lineValue: number;
    _id: string;
}

export interface SOSKU {
    _id: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    hsn: string;
}

export interface SOOtherCharges {
    totalAmount: number;
}
