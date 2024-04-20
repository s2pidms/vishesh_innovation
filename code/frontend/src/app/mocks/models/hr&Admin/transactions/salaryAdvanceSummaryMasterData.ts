export interface ISalaryAdvanceSummaryMasterData {
    autoIncrementNo: string;
    employeesOptions: ISalaryEmployeesOptions[];
}
export interface ISalaryEmployeesOptions {
    label: string;
    value: string;
    empCode: string;
}
