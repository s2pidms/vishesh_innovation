export interface MaintenanceChecklist {
    _id: string;
    checklistCode: string;
    checklistName: string;
    checklistDescription: string;
    checklistCategory: string;
    checklistNotes: string;
    status: string;
    createdAt: string;
    equipmentName: any[];
}
