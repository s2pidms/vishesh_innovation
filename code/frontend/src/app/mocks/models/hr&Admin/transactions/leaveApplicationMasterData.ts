export interface ILeaveApplicationMasterData {
    autoIncrementNo: string;
    employeesOptions: IEmployeesOptions[];
    allHolidaysOptions: IAllHolidaysOptions[];
}
export interface IEmployeesOptions {
    label: string;
    value: string;
    joiningLocation: string;
}

export interface IAllHolidaysOptions {
    _id: string;
    serialNumber: number;
    holidayName: string;
    holidayDate: string;
    holidayDay: string;
    holidayLocation: string;
}
