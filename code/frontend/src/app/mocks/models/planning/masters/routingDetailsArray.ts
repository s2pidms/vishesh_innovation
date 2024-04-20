export interface RoutingDetailsArray {
    operationName: string;
    process: string;
    workCenterMachine: string;
    equipment: string;
    outputPerHr: number;
    labourCostPerHr: number;
    powerConsumptionPerHr: number;
    machineTime: number;
    labourCost: number;
    powerConsumptionCost: number;
    setupCost: number;
    overheadCost: number;
    totalCost: number;
}
