import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface IQualityEquipmentMasterData {
    autoIncrementNo: string;
    empDepartmentsOptions: ICommonData[];
    locationOptions: ICommonData[];
    equipmentTypeOptions: IParameterICommonData[];
}
