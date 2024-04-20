import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface ISalesProductMasterData {
    // autoIncrementNo: string;
    productCategories: IProductCategories[];
    mouldList: IModuleInfo[];
    shoulderType: IParameterICommonData[];
    orificeOptions: IParameterICommonData[];
    threadTypeOptions: IParameterICommonData[];
    finishCapOptions: IParameterICommonData[];
}

export interface IProductCategories {
    label: string;
    value: string;
    application: string;
    productNumber: string;
    productCode: string;
}

export interface IModuleInfo {
    _id: string;
    mouldNo: string;
    mouldName: string;
    // mouldType: string;
    noOfCavities: number;
    mouldTBDDimension: number;
    // TBDPerWidth: number;
    // TBDPerLength: number;
    mouldSupplier: string;
    partNo: string;
    status: string;
}
