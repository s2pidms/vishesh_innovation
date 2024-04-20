export interface NPDRequest {
    _id: string;
    NPDNo: string;
    referenceModel: string;
    productCategory: string;
    projectName: string;
    status: string;
    createdAt: string;
    NPDDate: string;
    name: string;
    expectedDeliveryDate: string;
    expProductionStartDate: string;
    productBrief?: string;
    buildStage?: string;
    orderType?: string;
    monthlyOffTakeQty?: number;
    developmentCharges?: string;
    requestedQty?: number;
    validationRequired?: string;
    NPDRequestedBy?: string;
    remarks?: string;
}
