import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface ICalibrationStandardMasterData {
    autoIncrementNo: string;
    locationOptions: ICommonData[];
    calibrationAgencyOptions: IParameterICommonData[];
    standardStatusOptions: ICommonData[];
    standardTypeOptions: ICommonData[];
}
