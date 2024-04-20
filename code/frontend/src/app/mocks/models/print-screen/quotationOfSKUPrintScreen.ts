export interface IQuotationOfSKUPrintScreen {
    _id: string;
    quotationNo: string;
    customerCategory: string;
    exchangeRate: number;
    customerName: string;
    currency: string;
    quotationDetails: IQuotationDetail[];
    termsAndCond: ITermsAndCond[];
    RFQReference: string;
    quotationDate: string;
    customerBillingAddress: ICustomerBillingAddress;
    contactPersonName: string;
    SOSignatureUrl: string;
    SOPdfHeaderUrl: string;
}

export interface IQuotationDetail {
    srNo: number;
    SKU: string;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    drawingRef: string;
    partNo: string;
    UOM: string;
    MOQ: number;
    QPrice: number;
    developmentCost: number;
    _id: string;
}

export interface ITermsAndCond {
    parameterName: string;
    parameterLabel: string;
    order: number;
    _id: string;
}

export interface ICustomerBillingAddress {
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
