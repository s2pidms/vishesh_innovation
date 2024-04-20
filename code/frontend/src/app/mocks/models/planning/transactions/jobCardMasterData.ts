import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IJobCardMasterData {
    autoIncrementNo: string;
    companyType: string;
    orderTypes: string[];
    stages: string[];
    salesCategory: ICommonData[];
    NPDInputs: IParameterICommonData[];
}

export interface IParameterICommonData {
    parameterName: string;
    parameterLabel: string;
    _id?: string;
}
