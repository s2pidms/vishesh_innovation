import {IParameterICommonData} from "./jobCardMasterData";

export interface IRollToRollMasterData {
    autoIncrementNo: string;
    processNames: IParameterICommonData[];
    machineNames: IParameterICommonData[];
    productionShifts: IParameterICommonData[];
    jobCardList: IJobCardList[];
}
export interface IJobCardList {
    _id: string;
    jobCardNo: string;
}
