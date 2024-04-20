import {IAllHolidaysOptions, IEmployeesOptions} from "./leaveApplicationMasterData";

export interface IODApplicationMasterData {
    autoIncrementNo: string;
    employeesOptions: IEmployeesOptions[];
    allHolidaysOptions: IAllHolidaysOptions[];
}
