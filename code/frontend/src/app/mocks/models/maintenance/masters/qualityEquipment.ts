export interface QualityEquipment {
    _id: string;
    equipmentCode: string;
    equipmentName: string;
    equipmentType: string;
    manufacturer: string;
    calibrationDate: string;
    calibrationDue: string;
    calibrationAgency: string;
    createdAt?: string;
    calibrationDateS: string;
    calibrationDueS: string;
    modelNumber?: string;
    serialNumber?: string;
    location?: string;
    empDepartments?: string;
    status?: string;
}
