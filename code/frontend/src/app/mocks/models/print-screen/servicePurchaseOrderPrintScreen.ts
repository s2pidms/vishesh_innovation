export interface IServicePurchaseOrder {
    _id: string;
    company: SPOCompany;
    purchaseCategory: string;
    supplier: Supplier;
    SPONumber: string;
    SPODate: string;
    orderReference: string;
    deliveryDate: string;
    SPODetails: SPODetail[];
    SPORemarks: string;
}

export interface SPOCompany {
    _id: string;
    companyName: string;
    companyAddress: SPOCompanyAddress;
    GSTIN: string;
    contactInfo: SPOContactInfo;
    companySignatureUrl: string;
    companyPdfHeaderUrl: string;
}

export interface SPOCompanyAddress {
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

export interface SPOContactInfo {
    companyContactPersonAltNum: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
    _id: string;
}

export interface Supplier {
    _id: string;
    supplierCode: string;
    supplierName: string;
    supplierGST: string;
    supplierBillingAddress: SPOSupplierBillingAddress[];
    supplierContactMatrix: SPOSupplierContactMatrix[];
    supplierCurrency: string;
    supplierINCOTerms: string;
    supplierPaymentTerms: string;
}

export interface SPOSupplierBillingAddress {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    _id: any;
}

export interface SPOSupplierContactMatrix {
    supplierContactPersonEmail: string;
    _id: string;
}

export interface SPODetail {
    serviceMaster: SPOServiceMaster;
    serviceCode: string;
    serviceDescription: string;
    SPOQty: number;
    purchaseRate: number;
    lineValue: number;
    deliveryDate: string;
    igst: number;
    cgst: number;
    sgst: number;
    // IGSTAmount: number;
    // SGSTAmount: number;
    // CGSTAmount: number;
    // totalLineValue: number;
    _id: string;
}

export interface SPOServiceMaster {
    _id: string;
    sacCode: string;
}
