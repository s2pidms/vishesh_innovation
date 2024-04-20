export interface MaintenanceTask {
    _id: string;
    taskCode: string;
    taskName: string;
    taskDescription: string;
    createdAt?: string;
    priority?: string;
    frequency?: string;
    estimatedTime?: string;
    taskCategory?: string;
    taskStatus?: string;
    maintenanceChecklist?: string;
}
