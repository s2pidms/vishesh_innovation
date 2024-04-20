export interface MaintenanceMetrics {
    _id?: string;
    metricCode: string;
    metricName: string;
    calculationMethod: string;
    unitOfMeasure: string;
    metricDescription: string;
    createdAt: string;
    metricCategory?: string;
    targetValue?: number;
    thresholds?: string;
    frequency?: string;
    refRangeFrom?: string;
    refRangeTo?: string;
    formula?: string;
    targetDescription?: string;
    lastUpdated?: string;
    metricStatus?: string;
}
