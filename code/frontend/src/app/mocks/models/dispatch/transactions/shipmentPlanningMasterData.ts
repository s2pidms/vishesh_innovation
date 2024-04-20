import {ICommonData} from "@mocks/models/business-leads/transactions";
import { IParameterICommonData } from "@mocks/models/planning/transactions";
import {PlacesOfBusiness} from "@mocks/models/sales/transactions";

export interface IShipmentPlanningMasterData {
    autoIncrementNo: string;
    billFromLocationOptions: ICommonData[];
    freightTermsOptions: IParameterICommonData[];
    modeOfTransportOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    transporterOptions: ICommonData[];
    companyData: {_id: string; placesOfBusiness: PlacesOfBusiness[]};
}
