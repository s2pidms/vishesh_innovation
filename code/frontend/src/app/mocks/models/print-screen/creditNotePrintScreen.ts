export interface ICreditNote {
    _id: string;
    company: Company | any;
    CNNumber: string;
    CNDate: string;
    salesCategory: string;
    customer: Customer;
    invoiceNo: string;
    invoiceDate: string;
    currency: string;
    CNDetails: ICndetail[];
    reasonForCN: string;
    remarks: string;
    netCNValue: number;
    otherCharges: IOtherCharges | any;
    CNStatus: string;
    GSTDetails: IGstdetail[];
    totalTaxableAmount: number;
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalUGSTAmount: number;
    totalTaxAmount: number;
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

export interface Customer {
    _id: string;
    company: string;
    createdBy: string;
    updatedBy: string;
    customerCode: string;
    customerName: string;
    customerNickName: string;
    customerCategory: string;
    customerType: any;
    region: string;
    customerUdyogAadhar: string;
    customerPAN: string;
    GSTIN: string;
    GSTClassification: string;
    customerBillingAddress: CustomerBillingAddress;
    customerShippingAddress: CustomerShippingAddress;
    customerContactInfo: CustomerContactInfo;
    frightCharge: string;
    transporter: string;
    destination: string;
    customerCurrency: string;
    creditLimit: string;
    customerPaymentTerms: string;
    isCustomerActive: string;
    customerWebsite: string;
    customerBankDetails: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
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

export interface ICndetail {
    CNLineNumber: number;
    SKU: Sku;
    UOM: string;
    returnQty: number;
    standardRate: number;
    lineValue: number;
    hsn: string;
    gst: number;
    igst: number;
    cgst: number;
    sgst: number;
    _id: string;
}

export interface Sku {
    _id: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    hsn: string;
    customerInfo: CustomerInfo[];
    HSNCode: string;
    HSN: string;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
}

export interface CustomerInfo {
    customer: string;
    customerName: string;
    customerPartNo: string;
    customerCurrency: string;
    standardSellingRate: string;
    _id: string;
    PONo?: string;
    PODate: any;
}

export interface IOtherCharges {
    packagingAndForwarding: number;
    freight: number;
    insurance: number;
    loadingAndUnloading: number;
    miscellaneous: number;
    totalAmount: number;
}

export interface IGstdetail {
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
