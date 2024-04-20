export interface IProformaInvoicePIPrintScreen {
    _id: string
    company: Company
    createdBy: string
    updatedBy: string
    salesCategory: string
    customer: Customer
    quotationProformaRef: any
    PINumber: string
    PIDate: string
    PONumber: string
    PODate: string
    currency: string
    PIValidityDate: string
    PITotalAmount: number
    billFromLocation: string
    PIDetails: Pidetail[]
    customerShippingAddress: CustomerShippingAddress2
    otherCharges: OtherCharges
    billFromAddress: BillFromAddress
    paymentTerms: string
    modeOfTransport: string
    frightTerms: string
    transporter: string
    destination: string
    PICancellationReason: any
    isActive: boolean
    PIStatus: string
    createdAt: string
    updatedAt: string
    __v: number
    totalTaxableAmount: number
    GSTDetails: Gstdetail[]
    PITotalCGSTAmount: number
    PITotalSGSTAmount: number
    PITotalIGSTAmount: number
    PITotalUGSTAmount: number
    PITotalTaxAmount: number
    PITotalAmountWithTax: number
    roundedOff: number
  }
  
  export interface Company {
    _id: string
    companyContactPersonAltNum: string
    companyContactPersonEmail: string
    companyBankName: string
    companyAccountNumber: string
    companyBankIFSCCode: string
    companyName: string
    companyContactPersonNumber: string
    companyAddress: CompanyAddress[]
    GSTIN: string
    companyBankAddress: string
    companyBankBranch: string
    companyBankMICRCode: string
    companyBefName: string
    placesOfBusiness: PlacesOfBusiness[]
    PIDomesticTemplates: string
    PIExportsTemplates: string
    logoUrl: string
    companySignatureUrl: string
    companyPdfHeaderUrl: string
    SOSignatureUrl: string
    SOPdfHeaderUrl: string
    PISignatureUrl: string
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
  
  export interface PlacesOfBusiness {
    locationID: string
    stateForAdditionalPlaceOfBusiness: string
    GSTINForAdditionalPlace: string
    TAN: string
    SOPdfHeader: string
    SOSignature: string
    PISignature: string
    TISignature: string
    addressLine1: string
    addressLine2: string
    addressLine3: string
    addressLine4: string
    state: string
    city: string
    district: string
    pinCode: string
    country: string
    _id: string
  }
  
  export interface Customer {
    _id: string
    customerName: string
    customerCategory: string
    GSTIN: string
    GSTClassification: string
    customerBillingAddress: CustomerBillingAddress
    customerShippingAddress: CustomerShippingAddress
    customerContactInfo: CustomerContactInfo
    customerCurrency: string
    customerPaymentTerms: string
  }
  
  export interface CustomerBillingAddress {
    line1: string
    line2: string
    line3: string
    line4: string
    state: string
    city: string
    district: string
    pinCode: string
    country: string
    contactPersonName: string
    contactPersonNumber: string
    _id: string
  }
  
  export interface CustomerShippingAddress {
    line1: string
    line2: string
    line3: string
    state: string
    city: string
    district: string
    pinCode: string
    country: string
    contactPersonName: string
    contactPersonNumber: string
    _id: string
  }
  
  export interface CustomerContactInfo {
    contactPersonName: string
    contactPersonDesignation: string
    contactPersonDepartment: string
    contactPersonNumber: string
    contactPersonEmail: string
    _id: string
  }
  
  export interface Pidetail {
    PILineNumber: number
    SKU: Sku
    UOM: string
    customerPartNo: string
    standardRate: number
    discount: number
    netRate: number
    SOLineTargetDate: string
    orderedQty: number
    lineValue: number
    invoicedQty: number
    balancedQty: number
    previousDRNQty: number
    canceledQty: number
    _id: string
  }
  
  export interface Sku {
    _id: string
    company: string
    createdBy: string
    updatedBy: string
    SKUNo: string
    productCategory: string
    SKUStage: string
    SKUName: string
    SKUDescription: string
    hsn: string
    artWorkNo?: string
    primaryUnit: string
    unitConversionFlag: number
    customerInfo: CustomerInfo[]
    inkDetails: any[]
    materialInfo: MaterialInfo[]
    dimensionsDetails: DimensionsDetails
    specificationInfo: any[]
    costSheetInfo: CostSheetInfo[]
    BOMDimensionInfo: BomdimensionInfo
    isActive: string
    createdAt: string
    updatedAt: string
    __v: number
    shelfLife: number
    HSNCode: string
    HSN: string
    igst: number
    cgst: number
    sgst: number
    ugst: number
    generalSpecifications?: string
    drawingArtWorkFile?: string
  }
  
  export interface CustomerInfo {
    customer: string
    customerName: string
    customerPartNo: string
    PONo?: string
    PODate: any
    customerCurrency: string
    standardSellingRate: string
    monthlyOffTake: any
    POValidDate: any
    _id: string
  }
  
  export interface MaterialInfo {
    item: string
    itemCode: string
    itemName: string
    itemDescription: string
    UoM: string
    isSelect: boolean
    unitCost: number
    _id: string
    qtyPerSKUUnit?: number
  }
  
  export interface DimensionsDetails {
    actualDimensions: ActualDimensions
    layoutDimensions: LayoutDimensions
  }
  
  export interface ActualDimensions {
    unit: string
    width?: number
    length?: number
    ups: number
    area?: number
    mSqArea?: number
  }
  
  export interface LayoutDimensions {
    unit: string
    width?: number
    length?: number
    ups?: number
    area?: number
    mSqArea?: number
    wastePercentage?: number
  }
  
  export interface CostSheetInfo {
    order?: number
    componentType: string
    costElement: string
    SKUUnit?: string
    isTotal: boolean
    costPerSKUUnit: number
    percentage: number
    _id: string
  }
  
  export interface BomdimensionInfo {
    unit1: string
    unit2: string
  }
  
  export interface CustomerShippingAddress2 {
    line1: string
    line2: string
    line3: string
    state: string
    city: string
    pinCode: string
    country: string
    contactPersonName: string
  }
  
  export interface OtherCharges {
    packagingAndForwarding: number
    freight: number
    insurance: number
    loadingAndUnloading: number
    miscellaneous: number
    totalAmount: number
  }
  
  export interface BillFromAddress {
    line1: string
    line2: string
    line3: string
    line4: string
    state: string
    city: string
    pinCode: string
    country: string
  }
  
  export interface Gstdetail {
    HSNCode: string
    taxableValue: number
    igstRate: number
    igstAmount: number
    cgstRate: number
    cgstAmount: number
    sgstRate: number
    sgstAmount: number
    ugstRate: number
    ugstAmount: number
    totalTaxableValue: string
  }
  