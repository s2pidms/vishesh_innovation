import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IEquipmentList} from "../masters";

export interface IScheduleMasterData {
    autoIncrementNo: string;
    frequencyOptions: ICommonData[];
    equipmentListOptions: IEquipmentList[];
    maintenanceTaskCodeOptions: IScheduleMaintenanceTaskCode[];
}
export interface IScheduleMaintenanceTaskCode {
    _id: string;
    taskName: string;
}
