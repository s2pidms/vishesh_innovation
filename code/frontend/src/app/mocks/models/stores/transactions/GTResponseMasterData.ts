export interface IGTResponseMasterData {
    autoIncrementNo: string;
    GTRequestOptions: IGTRequestOptions[] | any;
}

export interface IGTRequestOptions {
    _id: string;
    GTRequestNo: string;
    GTRequestDate: string;
    location: string;
    toDepartment: string;
    GTRequest: string;
}

export interface IGTRequestDetails {
    _id: string;
    GTLineNumber: number;
    GTRequestLineNumber: number;
    item: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    conversionOfUnits: string;
    IRQty: number;
    GTRQty: number;
    GTQty: number;
    FIFO?: IFIFO[];
}

export interface IFIFO {
    GINDate: string;
    GIN: string;
    UOM: string;
    IC: string;
    MRN: string;
    MRNNo: string;
    MRNDate?: string;
    expiryDate?: string;
    IRQty: number;
    GTQty: number;
}
