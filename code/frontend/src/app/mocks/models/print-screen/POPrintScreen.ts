import { Gstdetail, OtherCharges, PlacesOfBusiness } from "./taxInvoicePrintScreen"

export interface IPurchaseOrder {
    _id: string
    company: Company
    createdBy: string
    updatedBy: string
    purchaseCategory: string
    supplier: Supplier
    changedPaymentTerms: string
    PONumber: string
    PODate: string
    orderReference: string
    currency: string
    POType: string
    deliveryLocation: string
    freightTerms: string
    transporter: string
    deliveryDate: string
    PODetails: Podetail[]
    remarks: string
    PORemarks: string
    cancellationReason: string
    netPOValue: number
    totalPPV: number
    otherCharges: OtherCharges
    serviceChargesInfo: ServiceChargesInfo[]
    totalServiceCharges: number
    POValidity: string
    POStatus: string
    createdAt: string
    updatedAt: string
    __v: number
    GSTDetails: Gstdetail[]
    totalCGSTAmount: number
    totalSGSTAmount: number
    totalIGSTAmount: number
    totalUGSTAmount: number
    totalTaxAmount: number
    totalAmountWithTax: number
    roundedOff: number
    SACDescription: string
  }
  
  export interface Company {
    _id: string
    companyContactPersonAltNum: string
    companyName: string
    GSTIN: string
    companyBillingAddress: CompanyBillingAddress
    contactInfo: ContactInfo[]
    placesOfBusiness: PlacesOfBusiness[]
    PODomesticTemplates: string
    POImportsTemplates: string
    logoUrl: string
    companySignatureUrl: string
    companyPdfHeaderUrl: string
  }
  
  export interface CompanyBillingAddress {
    addressLine1: string
    addressLine2: string
    addressLine3: string
    addressLine4: string
    addressType: string
    city: string
    country: string
    district: string
    pinCode: string
    state: string
  }
  
  export interface ContactInfo {
    department: string
    contactPersonName: string
    designation: string
    companyContactPersonNumber: string
    companyContactPersonEmail: string
    _id: string
  }

  
  export interface Supplier {
    _id: string
    supplierCode: string
    supplierName: string
    supplierPurchaseType: string
    supplierGST: string
    supplierBillingAddress: SupplierBillingAddress
    supplierShippingAddress: any[]
    supplierContactMatrix: any[]
    supplierCurrency: string
    supplierINCOTerms: string
    supplierPaymentTerms: string
    supplierAddress: any[]
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
    country: any
    _id: any
  }
  
  export interface Podetail {
    POLineNumber: number
    item: Item
    UOM: string
    stdCostUom1: number
    stdCostUom2: number
    primaryToSecondaryConversion: number
    secondaryToPrimaryConversion: any
    primaryUnit: string
    secondaryUnit: string
    unitConversion: string
    POQty: number
    standardRate: number
    purchaseRate: number
    lineValue: number
    linePPV: number
    netRate: number
    discount: number
    deliveryDate: string
    gst: number
    igst: number
    cgst: number
    sgst: number
    invoicedQty: number
    balancedQty: number
    previousGRNQty: number
    canceledQty: number
    markedForAlternateSupplier: string
    deliverySchedule: DeliverySchedule[]
    _id: string
  }
  
  export interface Item {
    _id: string
    gst: number
    igst: number
    cgst: number
    sgst: number
    ugst: number
    itemCode: string
    itemName: string
    itemDescription: string
    hsn: string
    primaryUnit: string
    secondaryUnit: string
    primaryToSecondaryConversion: number
    supplierDetails: SupplierDetail[]
    secondaryToPrimaryConversion: any
    supplierPartNo: string
  }
  
  export interface SupplierDetail {
    supplierId: string
    supplierName: string
    supplierCurrency: string
    supplierDescription: string
    spin: string
    uom1: string
    uom2: string
    stdCostUom1: number
    stdCostUom2: number
    supplierPrice: number
    supplierBenchmarkPrice: number
    _id: string
  }
  
  export interface DeliverySchedule {
    scheduleNo: number
    quantity: number
    deliveryDate: string
    _id: string
  }
  

  
  export interface ServiceChargesInfo {
    order: number
    description: string
    SACCode: string
    GSTRate: number
    IGSTRate: number
    SGSTRate: number
    CGSTRate: number
    UGSTRate: number
    currency: string
    serviceCharges: number
    _id: string
  }
