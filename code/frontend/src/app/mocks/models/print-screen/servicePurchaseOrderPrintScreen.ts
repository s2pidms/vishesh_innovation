export interface IServicePurchaseOrderPrint {
    _id: string
    company: Company
    purchaseCategory: string
    supplier: Supplier
    SPONumber: string
    SPODate: string
    orderReference: string
    currency: string
    deliveryLocation: string
    deliveryDate: string
    SPODetails: Spodetail[]
    remarks: string
    SPORemarks: string
    netSPOValue: number
    isActive: string
    SPOStatus: string
    totalPPV: string
  }
  
  export interface Company {
    _id: string
    companyContactPersonAltNum: string
    companyContactPersonEmail: string
    companyName: string
    companyContactPersonNumber: string
    companyAddress: CompanyAddress[]
    GSTIN: string
    companyBankMICRCode: string
    logoUrl: string
    companySignatureUrl: string
    companyPdfHeaderUrl: string
    id: string
  }
  
  export interface CompanyAddress {
    addressType: string
    addressLine1: string
    addressLine2: string
    addressLine3: string
    state: string
    city: string
    district: string
    pinCode: string
    country: string
    _id: string
  }
  
  export interface Supplier {
    _id: string
    company: string
    supplierCode: string
    supplierName: string
    supplierPurchaseType: string
    supplierNickName: string
    GSTClassification: string
    MSMEClassification: string
    isSupplierActive: string
    supplierCompanyType: string
    supplierUdyogAadhar: string
    supplierGST: string
    supplierPAN: string
    supplierBillingAddress: SupplierBillingAddress[]
    supplierShippingAddress: any[]
    supplierContactMatrix: SupplierContactMatrix[]
    supplierBankDetails: SupplierBankDetail[]
    supplierCurrency: string
    supplierINCOTerms: string
    supplierPaymentTerms: string
    supplierAddress: any[]
    id: string
  }
  
  export interface SupplierBillingAddress {
    line1: string
    line2: string
    line3: string
    line4: string
    state: string
    city: string
    district: string
    pinCode: string
    country: string
    _id: any
  }
  
  export interface SupplierContactMatrix {
    supplierContactPersonName: string
    supplierContactPersonDesignation: string
    supplierContactPersonDepartment: string
    supplierContactPersonNumber: string
    supplierContactPersonAltNum: string
    supplierContactPersonEmail: string
    supplierTelNo: string
    _id: string
  }
  
  export interface SupplierBankDetail {
    befName: string
    bankName: string
    accountNumber: string
    accountType: string
    bankIFSCCode: string
    _id: string
  }
  
  export interface Spodetail {
    SPOLineNumber: number
    serviceMaster: ServiceMaster
    serviceCode: string
    serviceDescription: string
    SPOQty: number
    purchaseRate: number
    lineValue: number
    deliveryDate: string
    gst: number
    igst: number
    cgst: number
    sgst: number
    lineRemarks: string
    invoicedQty: number
    balancedQty: number
    previousGRNQty: number
    canceledQty: number
    canceledReason: string
    markedForAlternateSupplier: string
    _id: string
  }
  
  export interface ServiceMaster {
    _id: string
    sacCode: string
  }
  