import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface ICompanyMasterData {
    GSTClassificationsOptions: ICommonData[];
    constitutionOfBusinessOptions: ICommonData[];
    compDepartmentsOptions: ICommonData[];
    locationOptions: ICommonData[];
    PODomesticOptions: ICommonData[];
    POImportOptions: ICommonData[];
    PIDomesticOptions: ICommonData[];
    PIExportsOptions: ICommonData[];
    TIDomesticOptions: ICommonData[];
    TIExportsOptions: ICommonData[];
    companyTypeOptions: IParameterICommonData[];
    currenciesOptions: ICommonData[];
}
