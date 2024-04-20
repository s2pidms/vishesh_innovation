import {ICommonData} from "@mocks/models/business-leads/transactions";
import {Customers, PlacesOfBusiness} from "./bookSalesOrderMasterData";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface ProformaInvoiceMasterData {
    autoIncrementNo: string;
    freightTermsOptions: IParameterICommonData[];
    modeOfTransportOptions: ICommonData[];
    paymentTermsOptions: ICommonData[];
    salesCategoryOptions: ICommonData[];
    transporterOptions: ICommonData[];
    billFromLocationOptions: ICommonData[];
    customersOptions: Customers[];
    companyData: {_id: string; placesOfBusiness: PlacesOfBusiness[]};
}
