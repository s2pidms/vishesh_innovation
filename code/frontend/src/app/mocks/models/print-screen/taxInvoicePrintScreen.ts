export interface ITaxInvoicePrintScreen {
    _id: string;
    company: Company;
    createdBy: string;
    updatedBy: string;
    salesInvoiceNumber: string;
    salesInvoiceDate: string;
    shipmentPlanningId: ShipmentPlanningId;
    customer: Customer;
    salesInvoiceTotalAmountWithTax: number;
    billFromLocation: string;
    customerCategory: string;
    customerBillingAddress: CustomerBillingAddress2;
    customerShippingAddress: CustomerShippingAddress2;
    salesInvoiceStatus: string;
    paymentTerms: string;
    salesInvoiceTotalAmount: number;
    salesInvoiceTotalCGSTAmount: number;
    salesInvoiceTotalSGSTAmount: number;
    salesInvoiceTotalIGSTAmount: number;
    salesInvoiceTotalUGSTAmount: number;
    salesInvoiceTotalTaxAmount: number;
    salesInvoiceDetails: SalesInvoiceDetail[];
    GSTDetails: Gstdetail[];
    otherCharges: OtherCharges2;
    frightCharge: any;
    frightTerms: string;
    transporter: string;
    modeOfTransport: string;
    destination: string;
    roundedOff: number;
    isDispatched: boolean;
    isPDIR: boolean;
    PIDate: string;
    PONumber: string;
    PODate: string;
    exportsInfo: ExportsInfo;
    EWayBillPdfUrl: string;
    EWayBillQrCodeUrl: string;
    ewayBillDate: string;
    ewayBillNo: string;
    validUpto: any;
    ARNNo: any;
    ARNDate: any;
    totalTaxableAmount: any;
}

export interface Company {
    _id: string;
    companyContactPersonEmail: string;
    companyBankName: string;
    companyAccountNumber: string;
    companyBankIFSCCode: string;
    companyName: string;
    companyAddress: CompanyAddress[];
    GSTIN: string;
    companyBankBranch: string;
    companyBankMICRCode: string;
    companyBefName: string;
    placesOfBusiness: PlacesOfBusiness[];
    TIDomesticTemplates: string;
    TIExportsTemplates: string;
    accountsDetails: AccountsDetails;
    exportsDetails: ExportsDetails;
    logoUrl: string;
    companySignatureUrl: string;
    companyPdfHeaderUrl: string;
    SOSignatureUrl: string;
    SOPdfHeaderUrl: string;
    TISignatureUrl: string;
}

export interface CompanyAddress {
    addressType: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    country: string;
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

export interface AccountsDetails {
    currencySymbol: string;
    fiscalYearEndDays: number;
    fiscalYearEndMonth: number;
    fiscalYearStartDays: number;
    fiscalYearStartMonth: number;
    reportingCurrency: string;
    totalWeeklyWorkingDays: number;
}

export interface ExportsDetails {
    LUTNo: any;
    LUTDate: any;
    LUTDocument: any;
}

export interface ShipmentPlanningId {
    _id: string;
    billFromLocation: string;
}

export interface Customer {
    _id: string;
    company: string;
    createdBy: string;
    updatedBy: string;
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
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface CustomerBillingAddress {
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
    contactPersonName: string;
    contactPersonDesignation: string;
    contactPersonDepartment: string;
    contactPersonNumber: string;
    contactPersonEmail: string;
    _id: string;
}

export interface CustomerBillingAddress2 {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    district: string;
    pinCode: string;
    contactPersonName: string;
    contactPersonNumber: string;
}

export interface CustomerShippingAddress2 {
    line1: string;
    line2: string;
    line3: string;
    state: string;
    city: string;
    pinCode: string;
    contactPersonName: string;
}

export interface SalesInvoiceDetail {
    salesInvoiceLineNumber: number;
    SONumber: string;
    SOId: Soid;
    SPLineNumber: string;
    batchId: any;
    batchDate: any;
    tBatchNo: string;
    SKU: Sku;
    dispatchQty: number;
    invoicedQty: number;
    discount: number;
    purchaseRate: number;
    unit: string;
    salesInvoiceUnitRate: number;
    salesInvoiceLineValue: number;
    HSN: string;
    HSNCode: string;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
    IgstAmt: number;
    CgstAmt: number;
    SgstAmt: number;
    _id: string;
}

export interface Soid {
    _id: string;
    company: string;
    createdBy: string;
    updatedBy: string;
    salesCategory: string;
    customer: string;
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
    customerShippingAddress: CustomerShippingAddress3;
    billFromAddress: BillFromAddress;
    modeOfTransport: string;
    frightCharge: any;
    frightTerms: string;
    transporter: string;
    destination: string;
    paymentTerms: string;
    SORemarks: any;
    SOCancellationReason: any;
    isActive: boolean;
    otherCharges: OtherCharges;
    SOStatus: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    customerBillingAddress?: CustomerBillingAddress3;
}

export interface Sodetail {
    SOLineNumber: number;
    SKU: string;
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
    dispatchDate?: string;
    dispatchSchedule: any[];
    _id: string;
}

export interface CustomerShippingAddress3 {
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

export interface CustomerBillingAddress3 {
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
    inkDetails: InkDetail[];
    materialInfo: MaterialInfo[];
    dimensionsDetails: DimensionsDetails;
    specificationInfo: any[];
    costSheetInfo: CostSheetInfo[];
    BOMDimensionInfo: BomdimensionInfo;
    offTakeInfo: OffTakeInfo;
    isActive: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalNoOfColors?: number;
    shelfLife: number;
    specialStorageInstruction?: string;
    storageHumidity?: string;
    storageTemp?: string;
    HSNCode: string;
    HSN: string;
    igst: number;
    cgst: number;
    sgst: number;
    ugst: number;
    toolInfo?: ToolInfo;
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

export interface InkDetail {
    inkId: string;
    colSeq: number;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UoM: string;
    mesh: number;
    GSM: number;
    areaSqm: number;
    inkArea: number;
    inkAreaSqm: number;
    ink: number;
    inkCostPerKg: number;
    _id: string;
    inkCostPerGm?: number;
}

export interface MaterialInfo {
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UoM: string;
    qtyPerSKUUnit: number;
    isSelect: boolean;
    unitCost: number;
    _id: string;
    referenceModel?: string;
    primaryUnit?: string;
    secondaryUnit: any;
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

export interface CostSheetInfo {
    order?: number;
    componentType: string;
    costElement: string;
    SKUUnit: string;
    isTotal: boolean;
    costPerSKUUnit: number;
    percentage: number;
    _id: string;
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

export interface Gstdetail {
    HSNCode: string;
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

export interface OtherCharges2 {
    packagingAndForwarding: number;
    freight: number;
    insurance: number;
    loadingAndUnloading: number;
    miscellaneous: number;
    totalAmount: number;
}

export interface ExportsInfo {
    exportsInvoiceNo: any;
    exportsInvoiceDate: string;
    exportsInvoiceTotalValue: any;
    exchangeRate: any;
    finalDestination: any;
}
