import {ImapProcessMachineList} from "./productionOfSKUMasterData";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IProductionOfChildPartMasterData {
    autoIncrementNo: string;
    productionShiftOptions: IParameterICommonData[];
    mapProcessMachineListOptions: ImapProcessMachineList[];
    childItemListOptions: IChildItemsList[];
}

export interface IChildItemsList {
    childItem: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    orderRef: string;
    jobCard: string;
    batchNumber: string;
    UOM: string;
    batchQty: number;
    outputQty: number;
    rejectedQty: number;
}
