export interface IASNLabelPrintScreen {
    _id: string;
    company: ICompany | any;
    ASNNumber: string;
    salesInvoice: ISalesInvoice | any;
    salesInvoiceDate: string;
    customer: ICustomer | any;
    customerName: string;
    stateOfSupply: string;
    invoiceValue: number;
    totalNoOfBoxes: number;
    totalGrossWeight: number;
    ASNStatus: string;
    rowRepeat: any[] | any;
    salesInvoiceDetails: ISalesInvoiceDetail[];
    transporter: string;
    modeOfTransport: string;
    frightCharge: number;
    frightTerms: string;
    deliveryType: string;
    docketLR: string;
    docketLRDate: string;
    freight: number;
}

export interface ICompany {
    _id: string;
    companyName: string;
    companyBillingAddress: ICompanyBillingAddress | any;
    contactInfo: IContactInfo;
    SOSignatureUrl: string;
    companyPdfHeaderUrl: string;
    SOPdfHeaderUrl: string;
    logoUrl: string;
}

export interface ICompanyBillingAddress {
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

export interface IContactInfo {
    department: string;
    contactPersonName: string;
    designation: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
    _id: string;
}

export interface ISalesInvoice {
    _id: string;
    salesInvoiceNumber: string;
}

export interface ICustomer {
    _id: string;
    customerName: string;
    GSTIN: string;
    customerShippingAddress: ICustomerShippingAddress[];
    customerContactInfo: ICustomerContactInfo[];
}

export interface ICustomerShippingAddress {
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

export interface ICustomerContactInfo {
    contactPersonName: string;
    contactPersonDesignation: string;
    contactPersonDepartment: string;
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface ISalesInvoiceDetail {
    PONumber: string;
    SOId: ISoid;
    batchDate: string;
    SKUQty: any;
    SKU: ISku;
    dispatchQty: number;
    unit: string;
    salesInvoiceUnitRate: number;
    salesInvoiceLineValue: number;
    HSNCode: string;
    boxNos: string;
    boxDetails: BoxDetail[];
    _id: string;
}

export interface ISoid {
    _id: string;
    PONumber: string;
}

export interface ISku {
    _id: string;
    SKUName: string;
    SKUDescription: string;
    customerInfo: ICustomerInfo;
}

export interface ICustomerInfo {
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

export interface BoxDetail {
    boxNo: number;
    qty: number;
    weight: number;
    _id: string;
}
