import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface IMetricsMasterData {
    autoIncrementNo: string;
    frequencyOptions: ICommonData[];
    metricTypeOptions: IParameterICommonData[];
    calculationMethodOptions: ICommonData[];
}
