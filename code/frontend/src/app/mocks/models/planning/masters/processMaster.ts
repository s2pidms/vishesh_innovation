export interface ProcessMaster {
    _id: string;
    processId: string;
    processName: string;
    sourceOfManufacturing: string;
    primaryAssetAllocation: string;
    unitProcessOutput: string;
    standardOutputPerHr: any;
    allocationOfSkilledLabour: number;
    skilledRatePerHr: number;
    allocationOfSemiSkilledLabour: number;
    semiSkilledRatePerHr: number;
    allocationOfUnSkilledLabour: number;
    unSkilledRatePerHr: number;
    totalLabourHeadCount: number;
    totalRatePerHr: number;
    totalAllocatedAssetCostPerHr: number;
    createdAt: string;
}
