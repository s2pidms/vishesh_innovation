export interface ISupplementaryPOMasterData {
    rows: IRows[];
}

export interface IRows {
    _id: string;
    GRNNumber: string;
    GRNQty: number;
    POQty: number;
}
