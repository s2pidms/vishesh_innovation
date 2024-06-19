export interface IServiceInvoicePrintScreen {
    _id: string;
    company: SICompany;
    serviceInvoiceNumber: string;
    serviceInvoiceDate: string;
    customerName: string;
    customer: SICustomer;
    PONo: string;
    currency: string;
    serviceDetails: SIServiceDetail[];
    totalValue: number;
    paymentTerms: string;
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalTaxAmount: number;
    totalAmountWithTax: number;
    remarks: any;
    GSTDetails: SIGSTDetail[];
}

export interface SICompany {
    _id: string;
    companyBankName: string;
    companyBefName: string;
    companyBankBranch: string;
    companyAccountNumber: string;
    companyBankIFSCCode: string;
    GSTIN: string;
    SOSignatureUrl: string;
    SOPdfHeaderUrl: string;
}

export interface SICustomer {
    _id: string;
    GSTIN: string;
    customerBillingAddress: SICustomerBillingAddress[];
    customerContactInfo: SICustomerContactInfo[];
}

export interface SICustomerBillingAddress {
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

export interface SICustomerContactInfo {
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface SIServiceDetail {
    serviceDescription: string;
    SACCode: string;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    additionalInfo: string;
    qty: number;
    unitRate: number;
    lineValue: number;
    _id: string;
}

export interface SIGSTDetail {
    SACCode: string;
    taxableValue: number;
    igstRate: number;
    igstAmount: number;
    cgstRate: number;
    cgstAmount: number;
    sgstRate: number;
    sgstAmount: number;
    _id: string;
}
