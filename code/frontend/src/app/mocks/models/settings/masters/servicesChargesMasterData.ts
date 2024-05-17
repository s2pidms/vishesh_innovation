export interface IServiceCharges {
    SACOptions: SACList[];
}

export interface SACList {
    _id: string;
    SACCode: string;
    gstRate?: number;
    SAC: string;
}
