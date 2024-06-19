export interface IPurchaseDebitNote {
    _id: string;
    summaryRowRepeat: any[];
    rowRepeat: any[];
    company: PDNCompany;
    DNNumber: string;
    DNDate: string;
    supplier: PDNSupplier;
    invoiceNo: any;
    invoiceDate: string;
    currency: string;
    DNDetails: DNdetail[];
    reasonForDN: any;
    otherCharges: PDNOtherCharges;
    GSTDetails: PDNGSTdetail[];
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalTaxAmount: number;
    totalAmount: number;
    totalAmountWithTax: number;
    roundedOff: number;
}

export interface PDNCompany {
    _id: string;
    companyBankName: string;
    companyAccountNumber: string;
    companyBankIFSCCode: string;
    companyName: string;
    GSTIN: string;
    companyBankBranch: string;
    companyBankMICRCode: string;
    companyBefName: string;
    companyBillingAddress: PDNCompanyBillingAddress;
    contactInfo: PDNContactInfo[];
    companySignatureUrl: string;
    companyPdfHeaderUrl: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
}

export interface PDNCompanyBillingAddress {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    city: string;
    country: string;
    district: string;
    pinCode: string;
    state: string;
}

export interface PDNContactInfo {
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
    _id: string;
}

export interface PDNSupplier {
    _id: string;
    supplierCode: string;
    supplierName: string;
    supplierGST: string;
    supplierBillingAddress: PDNSupplierBillingAddress;
    supplierContactMatrix: PDNSupplierContactMatrix;
}

export interface PDNSupplierBillingAddress {
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

export interface PDNSupplierContactMatrix {
    supplierContactPersonNumber: string;
    supplierContactPersonEmail: string;
    _id: string;
}

export interface DNdetail {
    item: Item;
    UOM: string;
    primaryUnit: string;
    returnQty: number;
    purchaseRate: number;
    lineValue: number;
    hsn: string;
    _id: string;
}

export interface Item {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
}

export interface PDNOtherCharges {
    totalAmount: number;
}

export interface PDNGSTdetail {
    hsn: string;
    taxableValue: number;
    igstRate: number;
    igstAmount: number;
    cgstRate: number;
    cgstAmount: number;
    sgstRate: number;
    sgstAmount: number;
}
