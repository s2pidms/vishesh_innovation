export interface IPDIRPrintScreen {
    _id: string;
    company: Company;
    createdBy: string;
    updatedBy: string;
    preDispatchCode: string;
    preDispatchDate: string;
    customer: string;
    customerName: string;
    salesInvoice: string;
    salesInvoiceNumber: string;
    salesInvoiceDate: string;
    isGenerated: boolean;
    preDispatchDetails: PreDispatchDetail[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Company {
    _id: string;
    companyName: string;
    logoUrl: string;
    id: string;
}

export interface PreDispatchDetail {
    SKU: Sku;
    SKUNo: string;
    SKUName: string;
    SKUDescription: string;
    partNumber: string;
    UOM: string;
    batchDate: string;
    dispatchQty: number;
    PDIEntryDetails: PdientryDetail[];
    status: string;
    _id: string;
}

export interface Sku {
    _id: string;
    productCategory: string;
    id: string;
}

export interface PdientryDetail {
    seq: number;
    specificationCode: string;
    characteristic: string;
    UOM: string;
    testStandard: string;
    measuringInstrument: string;
    specValue: string;
    LTL: string;
    UTL: string;
    observation: string;
    _id: string;
}
