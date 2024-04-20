export interface IGIAgainstGRMasterData {
    autoIncrementNo: string;
    approvedGR: IApprovedGR[];
}

export interface IApprovedGR {
    _id: string;
    GRNumber: string;
    department: string;
}
