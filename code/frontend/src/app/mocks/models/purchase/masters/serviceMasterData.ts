export interface IServiceMasterData {
    autoIncrementNo: string;
    SACs: ISACs[];
}

export interface ISACs {
    _id: string;
    sacCode: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
}
