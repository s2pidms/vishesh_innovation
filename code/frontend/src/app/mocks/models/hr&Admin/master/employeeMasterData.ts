import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IEmployeeMasterData {
    autoIncrementNo: string;
    empDesignationsOptions: IParameterICommonData[];
    empCadresOptions: IParameterICommonData[];
    empTypesOptions: IParameterICommonData[];
    empGradesOptions: IParameterICommonData[];
    joiningLocationOptions: ICommonData[];
    empDepartmentsOptions: IEMPDepartmentsOptions[];
    employeesOptions: ICommonData[];
}
export interface IEMPDepartmentsOptions {
    departmentName: string;
}