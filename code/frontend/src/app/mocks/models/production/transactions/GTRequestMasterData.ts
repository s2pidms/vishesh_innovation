import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IGTRequestMasterData {
    autoIncrementNo: string;
    locationOptions: ICommonData[];
    departmentOptions: ICommonData[];
}
