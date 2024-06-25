export interface IJobWorkOrderPrintScreen {
    _id: string;
    rowRepeat: any[];
    company: JWOCompany;
    WONo: string;
    WODate: string;
    orderReference: string;
    placeOfSupply: string;
    paymentTerms: string;
    freightTerms: string;
    WORemarks: string;
    jobWorkerName: string;
    currency: string;
    addressType: string;
    GSTINNo: string;
    WODetails: WODetail[];
    billFromJobWorker: BillFromJobWorker;
    shipFromJobWorker: ShipFromJobWorker;
    billToCompany: BillToCompany;
    shipToCompany: ShipToCompany;
}
export interface JWOCompany {
    _id: string;
    logoUrl: string;
    companySignatureUrl: string;
}
export interface WODetail {
    SACInfo: SACInfo;
    HSNInfo: HSNInfo;
    jobWorkService: string;
    jobWorkItem: string;
    jobWorkItemCode: string;
    jobWorkItemName: string;
    jobWorkItemDescription: string;
    drawingNo: string;
    UOM: string;
    processRatePerUnit: number;
    discountPercent?: string;
    netRatePerUnit: number;
    quantity: number;
    taxableValue: number;
    deliveryDate: string;
    deliveryCount: number;
    deliverySchedule: DeliverySchedule[];
    _id: string;
}

export interface BillFromJobWorker {
    country: string;
    state: string;
    city: string;
    pinCode: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
}
export interface ShipFromJobWorker {
    country: string;
    state: string;
    city: string;
    pinCode: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
}
export interface BillToCompany {
    country: string;
    state: string;
    city: string;
    pinCode: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    companyName?: string;
    GSTIN: string;
}
export interface ShipToCompany {
    companyName?: string;
    GSTIN: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
}

export interface SACInfo {
    SACCode: string;
    natureOfJobWork: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
}

export interface HSNInfo {
    HSNCode: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    ugstRate: number;
}

export interface DeliverySchedule {
    scheduleNo: number;
    quantity: number;
    deliveryDate: string;
    _id: string;
}
