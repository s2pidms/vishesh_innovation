import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface ICalibrationAndVerificationMasterData {
    calibrationAgencyOptions: IParameterICommonData[];
    calibrationResultOptions: ICommonData[];
    equipmentListOptions: IEquipmentOptions[];
}

export interface IEquipmentOptions {
    _id: string;
    label: string;
    value: string;
}
