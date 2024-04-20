export interface Suppliers {
    _id: string;
    supplierCode: string;
    supplierName: string;
    supplierPurchaseType: string;
    GSTClassification: string;
    MSMEClassification: string;
    supplierCompanyType: string;
    supplierUdyogAadhar: string;
    supplierGST: string;
    supplierPAN: string;
    supplierBillingAddress?: SupplierBillingAddress[];
    supplierShippingAddress?: SupplierShippingAddress[];
    supplierCurrency: string;
    supplierINCOTerms: string;
    supplierPaymentTerms: string;
    createdAt?: string;
    cpaFile?: string;
    supplierLeadTimeInDays: string;
    isSupplierActive: string;
    country: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    district: string;
    state: string;
    pinCode: string;
    accountNumber: string;
    bankName: string;
    cpaFileUrl: string;
    supplierNickName?: string;
    befName?: string;
    accountType?: string;
    bankIFSCCode?: string;
    line4?: string;
    supplierContactPersonName?: string;
    supplierContactPersonDesignation?: string;
    supplierContactPersonDepartment?: string;
    supplierContactPersonNumber?: string;
    supplierContactPersonEmail?: string;
}

export interface SupplierBillingAddress {
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
    state?: string;
    city?: string;
    district?: string;
    pinCode?: string;
    country?: string;
    _id?: any;
}

export interface SupplierShippingAddress {
    line1?: string;
    line2?: string;
    line3?: string;
    state?: string;
    city?: string;
    district?: any;
    pinCode?: string;
    country?: string;
    _id?: string;
}
