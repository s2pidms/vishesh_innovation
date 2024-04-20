import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IUserMasterData {
    autoIncrementNo: string;
    departmentOptions: IDepartmentOptions[];
    rolesOptions: ICommonData[];
}
export interface IDepartmentOptions {
    departmentName: string;
    _id: string;
}
