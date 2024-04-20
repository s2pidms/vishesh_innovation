export interface MaintenanceSchedule {
    _id: string;
    scheduleCode: string;
    scheduleName: string;
    frequency: string;
    startDate: string;
    endDate: string;
    description: string;
    createdAt: string;
    startDateS: string;
    endDateS: string;
    equipment: string;
    maintenanceTask: string;
}
