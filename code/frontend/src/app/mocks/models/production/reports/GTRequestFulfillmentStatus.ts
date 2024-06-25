export interface IGTRequestFulfillmentStatus {
    _id: string;
    GTRequestNo: string;
    fromDepartment: string;
    toDepartment: string;
    createdAt: string;
    GTStatus: string;
    GTRequestDate: string;
    itemCode: string;
    itemName: string;
    itemDescription: string;
    UOM: string;
    GTRequestQty: number;
    GTQty: number;
}
