export interface salaryMasterManagementStaff {
    _id: string;
    company: string;
    PFWagesForContribution: string;
    grossSalaryPerMonth: string;
    employerPFContributionPerMonth: number;
    gratuityPerMonth: number;
    costTOCompanyCTCPerMonth: number;
    effectFromDate: string;
    isOld: boolean;
    createdAt: string;
    effectFromDateS: string;
    employeeId: string;
    empCode: string;
    empFullName: string;
    empDepartment: string;
    Basic: number;
    PPI: number;
    HRA: number;
    CCA: number;
    PA?: number;
}
