import {SKUList} from "./BOMOfSKUMasterData";

export interface RoutingMasterData {
    autoIncrementNo: string;
    SKUOptions: SKUList[];
    mapProcessMachineOptions: IMapProcessMachineList[];
}

export interface IMapProcessMachineList {
    _id: string;
    process: string;
    processCode: string;
    processName: string;
    machineDetails: IMachineDetail[];
}

export interface IMachineDetail {
    _id: string;
    machine: string;
    machineCode: string;
    machineName: string;
}
