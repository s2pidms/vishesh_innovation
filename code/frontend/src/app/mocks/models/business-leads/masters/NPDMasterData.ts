import {IMaterialList, ISpecificationList} from "@mocks/models/sales/master";

export interface NPDMasterData {
    categoryList: ICategoryList[];
    uomOptions: IUOM[];
    NPDOptions: INPDList[];
    customersOptions: ICustomers[];
    specificationList: ISpecificationList[];
    attributesList: IAttributes[];
    costSheetList: ICostSheetList[];
    inkList: IInkList[];
    materialList: IMaterialList[];
    WXLDimensionsUnit: string[];
}
export interface ICategoryList {
    _id: string;
    productCategory: string;
    HSN: string;
    HSNCode: string;
}
export interface IUOM {
    value: string;
    label: string;
}
export interface INPDList {
    _id: string;
    name: string;
    productCategory: string;
    projectName: string;
    monthlyOffTakeQty?: number;
    dSKUNo: string;
    customerCurrency?: string;
    referenceModel: string;
    reference: string;
}
export interface ICustomers {
    _id: string;
    name: string;
    type: string;
    currency: string;
}

export interface IAttributes {
    _id: string;
    order: number;
    tabName: string;
    tabDisplayName: string;
}
export interface ICostSheetList {
    _id: string;
    componentCode: string;
    componentType: string;
    order: number;
    costElement: string;
    tooltip: string;
    isTotal: boolean;
    costPerSKUUnit: number;
    percentage: number;
}
export interface IInkList {
    _id: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UoM: string;
    inkCostPerKg: number;
    colSeq: any;
    mesh: number;
    GSM: number;
    areaSqm: number;
    inkArea: number;
    inkAreaSqm: number;
    ink: number;
    inkId: string;
}
