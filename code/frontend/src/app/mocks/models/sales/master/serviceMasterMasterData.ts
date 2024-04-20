export interface IServiceMasterData {
    autoIncrementNo: string;
    SACOptions: ISACOptions[];
}

export interface ISACOptions {
    _id: string;
    sacCode: string;
    gstRate: number;
    igstRate: number;
    sgstRate: number;
    cgstRate: number;
    ugstRate: number;
}
