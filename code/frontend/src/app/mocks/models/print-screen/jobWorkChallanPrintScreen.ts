export interface IJobWorkChallanPrintScreen {
    _id: string;
    rowRepeat: any[];
    company: JWCCompany;
    JWChallanNo: string;
    JWChallanDate: string;
    jobWorkerName: string;
    currency: string;
    addressType: string;
    GSTINNo: string;
    primaryAddress: PrimaryAddress;
    shipToAddress: ShipToAddress;
    placeOfSupply: string;
    JWChallanDetails: JwchallanDetail[];
    totalTaxableAmt: number;
    freightTermsInfo: FreightTermsInfo;
    jobWorkDetails: JobWorkDetails;
    totalCGSTAmt: number;
    totalIGSTAmt: number;
    totalSGSTAmt: number;
    totalAmtWithTax: number;
}

export interface JWCCompany {
    _id: string;
    companyName: string;
    GSTIN: string;
    companyBillingAddress: JWCCompanyBillingAddress;
    companySignatureUrl: string;
}

export interface JWCCompanyBillingAddress {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressType: string;
    city: string;
    country: string;
    district: string;
    pinCode: string;
    state: string;
}

export interface PrimaryAddress {
    country: string;
    state: string;
    cityOrDistrict: string;
    pinCode: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
}

export interface ShipToAddress {
    country: string;
    state: string;
    cityOrDistrict: string;
    pinCode: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
}

export interface JwchallanDetail {
    itemName: string;
    itemDescription: string;
    UOM: string;
    currency: string;
    HSNCode: number;
    igst: number;
    cgst: number;
    sgst: number;
    unitRate: number;
    quantity: number;
    taxableAmt: number;
    _id: string;
    lineValueWithTax: number;
    IGSTAmt: number;
    CGSTAmt: number;
    SGSTAmt: number;
}

export interface FreightTermsInfo {
    modeOfTransport: string;
    transporterName: string;
    vehicleNo: string;
    freightTerms: string;
    destination: string;
}

export interface JobWorkDetails {
    descriptionOfService: string;
    partNo: string;
    partName: string;
}
