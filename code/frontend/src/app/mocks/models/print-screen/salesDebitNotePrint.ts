export interface ISalesDebit {
    _id: string;
    company: Company;
    createdBy: string;
    updatedBy: string;
    DNNumber: string;
    DNDate: string;
    salesCategory: string;
    customer: Customer;
    customerName: string;
    invoiceNo: string;
    invoiceDate: string;
    currency: string;
    DNDetails: IDndetail[];
    reasonForDN: string;
    remarks: any;
    netDNValue: number;
    otherCharges: OtherCharges;
    DNStatus: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    GSTDetails: Gstdetail[];
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalUGSTAmount: number;
    totalTaxAmount: number;
    totalAmount: number;
    totalAmountWithTax: number;
    roundedOff: number;
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
    contactInfo: ContactInfo[];
    companySignatureUrl: string;
    companyPdfHeaderUrl: string;
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

export interface ContactInfo {
    department: string;
    contactPersonName: string;
    designation: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
    _id: string;
}

export interface Customer {
    _id: string;
    customerCode: string;
    GSTIN: string;
    customerBillingAddress: CustomerBillingAddress;
    customerShippingAddress: CustomerShippingAddress;
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
    contactPersonName: string;
    contactPersonNumber: string;
    _id: string;
}

export interface CustomerShippingAddress {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
    contactPersonNumber: string;
    _id: string;
}

export interface CustomerContactInfo {
    contactPersonName: string;
    contactPersonDesignation: string;
    contactPersonDepartment: string;
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface IDndetail {
    DNLineNumber: number;
    SKU: Sku;
    UOM: string;
    primaryUnit: string;
    returnQty: number;
    standardRate: number;
    purchaseRate: number;
    lineValue: number;
    hsn: string;
    _id: string;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
}

export interface Sku {
    _id: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
}

export interface OtherCharges {
    packagingAndForwarding: number;
    freight: number;
    insurance: number;
    loadingAndUnloading: number;
    miscellaneous: number;
    totalAmount: number;
}

export interface Gstdetail {
    hsn: string;
    taxableValue: number;
    igstRate: number;
    igstAmount: number;
    cgstRate: number;
    cgstAmount: number;
    sgstRate: number;
    sgstAmount: number;
    ugstRate: number;
    ugstAmount: number;
    totalTaxableValue: string;
}
