export interface ICreditNote {
    _id: string;
    company: CNCompany | any;
    CNNumber: string;
    CNDate: string;
    customer: CNCustomer;
    invoiceNo: string;
    invoiceDate: string;
    currency: string;
    CNDetails: ICNDetail[];
    reasonForCN: string;
    otherCharges: IOtherCharges | any;
    GSTDetails: IGSTDetail[];
    totalTaxableAmount: number;
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalUGSTAmount: number;
    totalAmountWithTax: number;
    roundedOff: number;
    summaryRowRepeat: any[];
    rowRepeat: any[];
}

export interface CNCompany {
    _id: string;
    companyName: string;
    GSTIN: string;
    companyBillingAddress: CNCompanyBillingAddress;
    companySignatureUrl: string;
    SOPdfHeaderUrl: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
}

export interface CNCompanyBillingAddress {
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

export interface CNCustomer {
    _id: string;
    customerName: string;
    GSTIN: string;
    customerBillingAddress: CNCustomerBillingAddress;
    customerContactInfo: CNCustomerContactInfo;
}
export interface CNCustomerBillingAddress {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
    contactPersonNumber: string;
    _id: string;
}

export interface CNCustomerContactInfo {
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface ICNDetail {
    SKU: SKU;
    UOM: string;
    returnQty: number;
    standardRate: number;
    lineValue: number;
    hsn: string;
    primaryUnit?: string;
    _id: string;
}

export interface SKU {
    _id: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    hsn: string;
    customerInfo: CNCustomerInfo[];
    HSNCode: string;
    HSN: string;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
}

export interface CNCustomerInfo {
    customerPartNo: string;
    _id: string;
}

export interface IOtherCharges {
    totalAmount: number;
}

export interface IGSTDetail {
    hsn: string;
    taxableValue: number;
    igstRate: number;
    igstAmount: number;
    cgstRate: number;
    cgstAmount: number;
    sgstRate: number;
    sgstAmount: number;
}
