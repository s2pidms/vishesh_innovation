export interface outDoorDutyApplication {
    _id: string;
    company: string;
    ODType: string;
    applicationDate: string;
    fromDate: string;
    fromSession: string;
    toDate: string;
    toSession: string;
    ODDays: string;
    resumptionDate: string;
    reason: any;
    status: string;
    createdAt: string;
    applicationDateS: string;
    resumptionDateS: string;
    fromDateS: string;
    toDateS: string;
    employeeId: string;
    empFullName: string;
    empCode: string;
    halfDay: string | number;
}
