import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IGenerateWorkOrderMasterData {
    autoIncrementNo: string;
    priorityOptions: ICommonData[];
    workOrderGenerateStatusOptions: ICommonData[];
    scheduleCodeOptions: IScheduleCode[];
    technicianCodeOptions: ITechnicianCode[];
}
export interface IScheduleCode {
    _id: string;
    label: string;
    value: string;
    equipmentName: string;
    equipment: string;
}
export interface ITechnicianCode {
    _id: string;
    label: string;
    value: string;
}
