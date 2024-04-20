import {IParameterICommonData} from "@mocks/models/planning/transactions";
import {IJCOptions} from "./inkMixing";
import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IJobCardEntryMasterData {
    autoIncrementNo: string;
    JCOptions: IJCOptions[];
    billFromLocationOptions: ICommonData[];
    shiftOptions: IParameterICommonData[];
}

export interface IJCEntryDetails {
    processName: string;
    seq: number;
    process: string;
    UOM: string;
    machineName: string;
    machine: string;
    machineInfo?: IMachineInfo[];
    prodQty: number;
    releaseQty: number;
    processStatus: boolean;
    isMachineToggle?: boolean;
    production?: IProduction | any;
    IPQA?: IIPQA | any;
}

export interface IProduction {
    prodSource: any;
    cumulativeCount: number;
    info: any[];
    remarks: any;
    prodAuthorizedBy: any;
}

export interface IIPQA {
    prodSource: any;
    cumulativeCount: number;
    info: any[];
    remarks: any;
    qualityReleaseBy: any;
}

export interface IMachineInfo {
    machine: string;
    machineName: string;
}
