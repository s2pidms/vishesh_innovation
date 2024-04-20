import {ImapProcessMachineList} from "./productionOfSKUMasterData";
import {IParameterICommonData} from "@mocks/models/planning/transactions";

export interface IProductionOfGrChildPartMasterData {
    autoIncrementNo: string;
    productionShiftOptions: IParameterICommonData[];
    mapProcessMachineListOptions: ImapProcessMachineList[];
    GrChildItemListOptions: IGrChildItemsList[];
}

export interface IGrChildItemsList {
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
