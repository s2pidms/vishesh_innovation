export interface ISalesOrderConfirmationPrintScreen {
    _id: string;
    company: Company;
    salesCategory: string;
    customer: Customer;
    quotationProformaRef: any;
    SONumber: string;
    SOType: string;
    SODate: string;
    PIDate: string;
    billFromLocation: string;
    PONumber: string;
    PODate: string;
    currency: string;
    SOTargetDate: string;
    SOTotalAmount: number;
    SODetails: Sodetail[];
    customerBillingAddress: CustomerBillingAddress2;
    customerShippingAddress: CustomerShippingAddress2;
    billFromAddress: BillFromAddress;
    modeOfTransport: string;
    frightCharge: any;
    frightTerms: string;
    transporter: string;
    destination: string;
    paymentTerms: string;
    SORemarks: string;
    SOCancellationReason: any;
    isActive: boolean;
    otherCharges: OtherCharges;
    SOStatus: string;
    GSTDetails: Gstdetail[];
    totalTaxableAmount: number;
    totalCGSTAmount: number;
    totalSGSTAmount: number;
    totalIGSTAmount: number;
    totalUGSTAmount: number;
    totalTaxAmount: number;
    totalAmountWithTax: number;
    roundedOff: number;
    EWayBillApplicable: string;
}

export interface Company {
    _id: string;
    companyBankName: string;
    companyAccountNumber: string;
    companyBankIFSCCode: string;
    companyName: string;
    GSTIN: string;
    companyBankBranch: string;
    companyBankMICRCode: string;
    companyBefName: string;
    companyBillingAddress: CompanyBillingAddress;
    contactInfo: ContactInfo[];
    placesOfBusiness: PlacesOfBusiness[];
    SOSignatureUrl: string;
    SOPdfHeaderUrl: string;
}

export interface CompanyBillingAddress {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressType: string;
    city: string;
    country: string;
    district: string;
    pinCode: string;
    state: string;
}

export interface ContactInfo {
    department: string;
    contactPersonName: string;
    designation: string;
    companyContactPersonNumber: string;
    companyContactPersonEmail: string;
    _id: string;
}

export interface PlacesOfBusiness {
    locationID: string;
    stateForAdditionalPlaceOfBusiness: string;
    GSTINForAdditionalPlace: string;
    TAN: string;
    SOPdfHeader: string;
    SOSignature: string;
    PISignature: string;
    TISignature: string;
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

export interface Customer {
    _id: string;
    company: string;
    customerCode: string;
    customerName: string;
    customerNickName: string;
    customerCategory: string;
    customerType: any;
    region: string;
    customerUdyogAadhar: string;
    customerPAN: string;
    GSTIN: string;
    GSTClassification: string;
    customerBillingAddress: CustomerBillingAddress;
    customerShippingAddress: CustomerShippingAddress;
    customerContactInfo: CustomerContactInfo;
    frightCharge: string;
    transporter: string;
    destination: string;
    customerCurrency: string;
    creditLimit: string;
    customerPaymentTerms: string;
    isCustomerActive: string;
    customerWebsite: string;
    customerBankDetails: any[];
}

export interface CustomerBillingAddress {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
    contactPersonNumber: string;
    _id: string;
}

export interface CustomerShippingAddress {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
    contactPersonNumber: string;
    _id: string;
}

export interface CustomerContactInfo {
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface Sodetail {
    SOLineNumber: number;
    SKU: Sku;
    UOM: string;
    customerPartNo: string;
    standardRate: number;
    discount: number;
    netRate: number;
    SOLineTargetDate: string;
    orderedQty: number;
    lineValue: number;
    invoicedQty: number;
    balancedQty: number;
    previousDRNQty: number;
    JCCQty: number;
    previousJCCQty: number;
    canceledQty: number;
    dispatchCount: number;
    dispatchDate: string;
    dispatchSchedule: any[];
    _id: string;
}

export interface Sku {
    _id: string;
    company: string;
    createdBy: string;
    updatedBy: string;
    SKUNo: string;
    productCategory: string;
    SKUStage: string;
    SKUName: string;
    SKUDescription: string;
    hsn: string;
    primaryUnit: string;
    unitConversionFlag: number;
    customerInfo: CustomerInfo[];
    shelfLife: number;
    inkDetails: any[];
    materialInfo: MaterialInfo[];
    dimensionsDetails: DimensionsDetails;
    specificationInfo: any[];
    costSheetInfo: any[];
    BOMDimensionInfo: BomdimensionInfo;
    offTakeInfo: OffTakeInfo;
    isActive: string;
    toolInfo: ToolInfo;
    specsAttribute: SpecsAttribute;
    mouldsIDAttribute: MouldsIdattribute[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    packingStdAttribute: PackingStdAttribute;
    remarks: any;
    HSNCode: string;
    HSN: string;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
}

export interface CustomerInfo {
    customer: string;
    customerName: string;
    customerPartNo: string;
    PONo: any;
    PODate: any;
    customerCurrency: string;
    standardSellingRate: string;
    monthlyOffTake: any;
    POValidDate: any;
    _id: string;
}

export interface MaterialInfo {
    item: string;
    referenceModel: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UoM: string;
    qtyPerSKUUnit: number;
    isSelect: boolean;
    unitCost: number;
    ups: number;
    primaryUnit: string;
    secondaryUnit: string;
    conversionOfUnits: string;
    width: number;
    length: number;
    widthUnit: string;
    lengthUnit: string;
    primaryToSecondaryConversion: number;
    childItemDescription: string;
    layoutDimArea: number;
    _id: string;
}

export interface DimensionsDetails {
    actualDimensions: ActualDimensions;
    layoutDimensions: LayoutDimensions;
}

export interface ActualDimensions {
    unit: string;
    width: number;
    length: number;
    ups: number;
    area: number;
    mSqArea: number;
}

export interface LayoutDimensions {
    unit: string;
    width: number;
    length: number;
    ups: number;
    area: number;
    mSqArea: number;
    wastePercentage: number;
}

export interface BomdimensionInfo {
    unit1: string;
    unit2: string;
}

export interface OffTakeInfo {
    annualOffTake: number;
    offTakeFrequency: number;
    avgMonthlyOffTake: number;
    proposedBatchQty: number;
    processCAQty: number;
    toolingCAQty: number;
}

export interface ToolInfo {
    tool1Id: any;
    tool2Id: any;
    tool3Id: any;
}

export interface SpecsAttribute {
    diameter: any;
    height: any;
    finish: any;
    shoulderType: any;
    threadType: any;
    orifice: any;
    weight: any;
    placeHolder: any;
}

export interface MouldsIdattribute {
    mouldNo: string;
    _id: string;
}

export interface PackingStdAttribute {}

export interface CustomerBillingAddress2 {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    state: string;
    city: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
}

export interface CustomerShippingAddress2 {
    line1: string;
    line2: string;
    line3: string;
    line4: any;
    state: string;
    city: string;
    pinCode: string;
    country: string;
    contactPersonName: string;
}

export interface BillFromAddress {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    state: string;
    city: string;
    pinCode: string;
    country: string;
}

export interface OtherCharges {
    packagingAndForwarding: number;
    freight: number;
    insurance: number;
    loadingAndUnloading: number;
    miscellaneous: number;
    totalAmount: number;
}

export interface Gstdetail {
    hsn: string;
    taxableValue: number;
    igstRate: number;
    igstAmount: number;
    cgstRate: number;
    cgstAmount: number;
    sgstRate: number;
    sgstAmount: number;
    ugstRate: number;
    ugstAmount: number;
    totalTaxableValue: string;
}
