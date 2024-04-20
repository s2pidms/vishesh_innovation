import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface ITaskMasterData {
    autoIncrementNo: string;
    equipmentOptions: IEquipmentList[];
    priorityOptions: ICommonData[];
    frequencyOptions: ICommonData[];
    taskCategoryOptions: ICommonData[];
    maintenanceChecklistOptions: IMaintenanceChecklist[];
    taskStatusOptions: ICommonData[];
}

export interface IEquipmentList {
    _id: string;
    assetName: string;
}
export interface IMaintenanceChecklist {
    _id: string;
    checklistName: string;
}
