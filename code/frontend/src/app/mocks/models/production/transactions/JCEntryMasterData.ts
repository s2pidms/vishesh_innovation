import {IParameterICommonData} from "@mocks/models/planning/transactions";
import {IJCOptions} from "./inkMixing";
import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IJCEntryMasterData {
    autoIncrementNo: string;
    JCOptions: IJCOptions[];
    billFromLocationOptions: ICommonData[];
    processNameList: IProcessNameList[];
    releaseStatusOptions: string[];
}

export interface IProcessNameList {
    _id: string;
    processName: string;
    seq: any;
    process: string;
    production?: Production;
    IPQA?: Ipqa;
    processStatus?: boolean;
}

export interface Production {
    prodInfo?: ProdInfo[];
    prodRemarks: any;
}

export interface ProdInfo {
    seq: string;
    subProcessName: string;
    prodStartDate: any;
    prodEndDate: any;
    operatingStaff: any;
    prodStatus: boolean;
}

export interface Ipqa {
    IPQAInfo?: IPQAInfo[];
    IPQARemarks: any;
}

export interface IPQAInfo {
    seq: string;
    subProcessName: string;
    inspectedBy: any;
    releasedDate: any;
    releaseStatus: any;
    IPQAStatus: boolean;
}
