export interface IRawMaterialInspection {
    _id: string;
    MRNNumber: string;
    supplierInvoice: string;
    MRNStatus: string;
    MRNRemarks: any;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    MRNDate: string;
    supplierName: string;
    GRNNumber: string;
    GRNDate: string;
    GRNQty: number;
    supplierDate: string;
    batchNo: string;
    batchDate: string;
    UOM: string;
    QCLevels: string;
    QCLevelsDetails?: QclevelsDetail[];
    status: string;
    deviationApprovedBy: any;
    MRNReleasedBy: string;
}

export interface QclevelsDetail {
    seq: number;
    specificationCode: string;
    characteristic: string;
    UOM: string;
    testStandard: string;
    measuringInstrument: string;
    specValue: string;
    LTL: string;
    UTL: string;
    observation: string;
    _id: string;
}
