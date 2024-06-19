export interface IASNLabelPrintScreen {
    _id: string;
    company: ASNCompany;
    ASNNumber: string;
    salesInvoice: SalesInvoice;
    salesInvoiceDate: string;
    customer: ASNCustomer;
    customerName: string;
    stateOfSupply: string;
    invoiceValue: number;
    totalNoOfBoxes: number;
    totalGrossWeight: number;
    ASNStatus: string;
    salesInvoiceDetails: ASNSalesInvoiceDetail[];
    rowRepeat: any[];
    transporter: string;
    modeOfTransport: string;
    frightCharge: number;
    frightTerms: string;
    deliveryType: string;
    docketLR: string;
    docketLRDate: string;
    freight: number;
    SKUInfo: Skuinfo[];
}

export interface ASNCompany {
    _id: string;
    companyName: string;
    companyBillingAddress: CompanyBillingAddress;
    contactInfo: ContactInfo;
    SOSignatureUrl: string;
    companyPdfHeaderUrl: string;
    SOPdfHeaderUrl: string;
    logoUrl: string;
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

export interface SalesInvoice {
    _id: string;
    salesInvoiceNumber: string;
    customerShippingAddress: ASNCustomerShippingAddress;
}

export interface ASNCustomerShippingAddress {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    pinCode: string;
    contactPersonName: string;
}

export interface ASNCustomer {
    _id: string;
    customerName: string;
    GSTIN: string;
    customerShippingAddress: ASNCustomerShippingAddress2[];
    customerContactInfo: ASNCustomerContactInfo[];
}

export interface ASNCustomerShippingAddress2 {
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

export interface ASNCustomerContactInfo {
    contactPersonName: string;
    contactPersonDesignation: string;
    contactPersonDepartment: string;
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface ASNSalesInvoiceDetail {
    PONumber: string;
    SOId: string;
    batchDate: any;
    SKU: string;
    dispatchQty: number;
    unit: string;
    salesInvoiceUnitRate: number;
    salesInvoiceLineValue: number;
    HSNCode: string;
    boxNos: string;
    boxDetails: BoxDetail[];
    _id: string;
    SKUName: string;
    SKUDescription: string;
    customerInfo: ASNCustomerInfo;
}

export interface BoxDetail {
    boxNo: number;
    qty: number;
    weight: number;
    _id: string;
}

export interface ASNCustomerInfo {
    customer: string;
    customerName: string;
    customerPartNo: string;
    PONo: any;
    PODate: any;
    customerCurrency: string;
    standardSellingRate: string;
    monthlyOffTake: any;
    POValidDate: any;
    _id: string;
}

export interface Skuinfo {
    _id: string;
    SKUName: string;
    SKUDescription: string;
    customerInfo: CustomerInfo2[];
}

export interface CustomerInfo2 {
    customer: string;
    customerName: string;
    customerPartNo: string;
    PONo: any;
    PODate: any;
    customerCurrency: string;
    standardSellingRate: string;
    monthlyOffTake: any;
    POValidDate: any;
    _id: string;
}
