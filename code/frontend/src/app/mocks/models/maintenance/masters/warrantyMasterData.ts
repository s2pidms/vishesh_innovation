import {ICommonData} from "@mocks/models/business-leads/transactions";
import {IEquipmentList} from "./taskMasterData";

export interface IWarrantyMasterData {
    autoIncrementNo: string;
    warrantyTypeOptions: ICommonData[];
    equipmentOptions: IEquipmentList[];
    suppliersOptions: ISuppliers[];
}
export interface ISuppliers {
    supplierName: string;
    _id: string;
}
