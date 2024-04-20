export interface ProcessResourceManagement {
    _id: string;
    processResourceManagementCode: string;
    processName: string;
    process: string;
    machineName: string;
    machine: string;
    outputPerHr: number;
    noOfManpower: number;
    powerConsumptionPerHr: number;
    labourCostPerHr?: number;
    status: string;
}
