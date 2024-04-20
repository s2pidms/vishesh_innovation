import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface ISampleJCCreationMasterData {
    autoIncrementNo: string;
    companyType: string;
    salesCategory: ICommonData[];
    NPDInputs: IParameterICommonData[];
}
