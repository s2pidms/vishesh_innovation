import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface ISKUMasterMasterData {
    companyType: string;
    attributesList: IAttributes[];
    customersOptions: ICustomers[];
    // costSheetList: ICostSheetList[];
    productCategoryOptions: ICommonData[];
    UOMOptions: ICommonData[];
    // specificationList: ISpecificationList[];
    materialList: IMaterialList[];
    inkList: IInkList[];
    hsnCodesOptions: IHSNCodes[];
    mapHSNCategoryList: IMAPHSNCategoryList[];
    WXLDimensionsUnit: string[];
    mouldInfo: IMouldInfo[];
    shoulderTypeOptions: ICommonData[];
}
export interface IMouldInfo {
    _id: string;
    productMasterNo: string;
    productCategory: string;
    capDia: number;
    capHeight: number;
    capFinish: string;
    threadType: string;
    orifice: string;
    shoulderType: string;
    weight: number;
}

export interface IAttributes {
    _id: string;
    order: number;
    tabName: string;
    tabDisplayName: string;
}
export interface ICostSheetList {
    _id?: string;
    componentCode?: string;
    componentType: string;
    order?: number;
    costElement: string;
    tooltip?: string;
    isTotal: boolean;
    costPerSKUUnit: number;
    percentage: number;
    SKUUnit: any;
}
export interface ICustomers {
    label: string;
    value: string;
    currency: string;
}
export interface ISpecificationList {
    seq?: number;
    specificationCode: string;
    characteristic: string;
    UOM: string;
    testStandard: string;
    measuringInstrument: string;
    specValue: string;
    tolerance: number;
    _id?: string;
}
export interface IMaterialList {
    referenceModel: string;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    UoM?: any;
    qtyPerSKUUnit?: number;
    isSelect: boolean;
    unitCost: number;
}
export interface IInkList {
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UoM: string;
    inkCostPerKg: number;
    inkCostPerGm?: number;
    colSeq: any;
    mesh: number;
    GSM: number;
    areaSqm: number;
    inkArea: number;
    inkAreaSqm: number;
    ink: number;
    inkId?: string;
}
export interface IHSNCodes {
    _id?: string;
    hsnCode: string;
    value: string;
    goodsDescription: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    select?: boolean;
}

export interface IMAPHSNCategoryList {
    productCategory: string;
    HSNCode: string;
}
