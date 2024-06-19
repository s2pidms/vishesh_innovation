export interface ISalesDebit {
    _id?: string;
    salesCategory?: string;
    company: Company;
    DNNumber: string;
    DNDate: string;
    customer: Customer;
    customerName?: string;
    invoiceNo: string;
    invoiceDate: string;
    currency: string;
    DNDetails: IDNDetail[];
    reasonForDN: string;
    otherCharges: OtherCharges;
    GSTDetails: IGSTDetail[] | any;
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalUGSTAmount: number;
    totalTaxAmount: number;
    totalAmount: number;
    totalAmountWithTax: number;
    roundedOff: number;
    summaryRowRepeat?: any[];
    rowRepeat?: any[];
}

export interface Company {
    _id: string;
    companyBankName: string;
    companyAccountNumber: string;
    companyBankIFSCCode: string;
    companyName: string;
    GSTIN: string;
    companyBankBranch: string;
    companyBankMICRCode: string;
    companyBefName: string;
    companyBillingAddress: CompanyBillingAddress;
    companySignatureUrl: string;
    companyPdfHeaderUrl: string;
    companyContactPersonNumber?: number;
    companyContactPersonEmail?: string;
    contactInfo: ContactInfo[];
}

export interface ContactInfo {
    department: string;
    contactPersonName: string;
    designation: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
    _id: string;
}
export interface CompanyBillingAddress {
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

export interface Customer {
    _id: string;
    customerCode: string;
    customerName?: string;
    GSTIN: string;
    customerBillingAddress: CustomerBillingAddress;
    customerContactInfo: CustomerContactInfo;
}

export interface CustomerBillingAddress {
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

export interface CustomerContactInfo {
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface IDNDetail {
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    UOM: string;
    primaryUnit: string;
    returnQty: number;
    purchaseRate: number;
    lineValue: number;
    hsn: string;
    _id: string;
}

export interface OtherCharges {
    totalAmount: number;
}

export interface IGSTDetail {
    hsn: string;
    taxableValue: number;
    igstRate: number;
    igstAmount?: number;
    cgstRate: number;
    cgstAmount?: number;
    sgstRate: number;
    sgstAmount?: number;
    ugstRate: number;
    ugstAmount?: number;
    totalTaxableValue: string;
}
