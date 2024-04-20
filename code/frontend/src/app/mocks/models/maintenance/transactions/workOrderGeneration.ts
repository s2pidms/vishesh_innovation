export interface WorkOrderGeneration {
    _id: string;
    workOrderCode: string;
    description: string;
    equipmentName: string;
    priority: string;
    materials: string;
    maintenanceCost: number;
    status: string;
    createdAt: string;
    startDateS: string;
    endDateS: string;
    workOrderExecutionDate: string;
    technicianCode: string;
    scheduleCode: string;
}
