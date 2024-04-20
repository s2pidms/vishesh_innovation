export interface WorkOrderStatus {
    _id: string;
    workOrderCode: string;
    priority: string;
    status: string;
    createdAtS: string;
    equipmentCode: string;
    equipmentName: string;
    technicianName: string;
    scheduleDate: string;
    completionDate: string;
}
