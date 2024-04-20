export interface CalibrationStandard {
    _id: string;
    standardCode: string;
    standardName: string;
    standardType: string;
    status: string;
    createdAt: string;
    measurementRange?: string;
    calibrationMethod?: string;
    calibrationInterval?: string;
    traceability?: string;
    calibrationAgency?: string;
    standardLocation?: string;
    calibrationCost?: number;
    lastCalibrationDateS?: string;
}
