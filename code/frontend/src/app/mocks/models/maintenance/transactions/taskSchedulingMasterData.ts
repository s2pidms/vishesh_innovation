import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface ITaskSchedulingMasterData {
    autoIncrementNo: string;
    maintenanceTaskCodeOptions: IMaintenanceTaskCode[];
    TaskSchedulingStatusOptions: ICommonData[];
}

export interface IMaintenanceTaskCode {
    _id: string;
    label: string;
    value: string;
    taskCode: string;
    taskName: string;
    priority: string;
    frequency: string;
    assetName: string;
    equipment: string;
}
