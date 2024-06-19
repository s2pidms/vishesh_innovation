export interface IQuotationOfSKUPrintScreen {
    _id: string;
    quotationNo: string;
    customerCategory: string;
    exchangeRate: number;
    currency: string;
    quotationDetails: IQuotationDetail[];
    termsAndCond: ITermsAndCond[];
    RFQReference: string;
    quotationDate: string;
    customerBillingAddress: QOfSKUCustomerBillingAddress;
    contactPersonName: string;
    SOSignatureUrl: string;
    SOPdfHeaderUrl: string;
}

export interface IQuotationDetail {
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

export interface QOfSKUCustomerBillingAddress {
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
    _id: string;
}
