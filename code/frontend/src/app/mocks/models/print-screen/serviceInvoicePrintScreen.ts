export interface IServiceInvoicePrintScreen {
    _id: string;
    company: Company;
    serviceInvoiceNumber: string;
    serviceInvoiceDate: string;
    customerCategory: string;
    customerName: string;
    customer: Customer;
    PONo: string;
    PODate: string;
    currency: string;
    billFromLocation: string;
    serviceDetails: ServiceDetail[];
    totalValue: number;
    paymentTerms: string;
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalTaxAmount: number;
    totalAmountWithTax: number;
    remarks: any;
    GSTDetails: Gstdetail[];
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
    placesOfBusiness: PlacesOfBusiness[];
    companySignatureUrl: string;
    companyPdfHeaderUrl: string;
    SOSignatureUrl: string;
    SOPdfHeaderUrl: string;
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

export interface PlacesOfBusiness {
    locationID: string;
    stateForAdditionalPlaceOfBusiness: string;
    GSTINForAdditionalPlace: string;
    TAN: string;
    SOPdfHeader: string;
    SOSignature: string;
    PISignature: string;
    TISignature: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    _id: string;
}

export interface Customer {
    _id: string;
    GSTIN: string;
    customerBillingAddress: CustomerBillingAddress[];
    customerContactInfo: CustomerContactInfo[];
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

export interface CustomerContactInfo {
    contactPersonName: string;
    contactPersonDesignation: string;
    contactPersonDepartment: string;
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface ServiceDetail {
    service: string;
    serviceCode: string;
    serviceDescription: string;
    SACCode: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    additionalInfo: string;
    qty: number;
    unitRate: number;
    lineValue: number;
    _id: string;
}

export interface Gstdetail {
    SACCode: string;
    taxableValue: number;
    gstRate: number;
    igstRate: number;
    igstAmount: number;
    cgstRate: number;
    cgstAmount: number;
    sgstRate: number;
    sgstAmount: number;
    totalTax: number;
    totalValueWithTax: number;
    _id: string;
}
