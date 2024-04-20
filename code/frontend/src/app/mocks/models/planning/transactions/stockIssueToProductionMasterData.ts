import {ICommonData} from "@mocks/models/business-leads/transactions";

export interface IStockIssueToProductionMasterData {
    autoIncrementNo: string;
    stage: ICommonData[];
    SFGList: ISFGList[];
}

export interface ISFGList {
    MRN: string;
    MRNNumber: string;
    item: string;
    SFGId: string;
    itemCode: string;
    itemName: string;
    stage: string;
    width: number;
    length: number;
    sqmPerRoll: number;
    sheetQty: number;
    qty: number;
    UOM: string;
    PPICIRQty: number;
    issueQty: number;
}
