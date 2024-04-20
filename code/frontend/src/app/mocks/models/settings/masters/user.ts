export interface User {
    _id: string;
    company: string;
    userCode: string;
    name: string;
    email: string;
    isActive: boolean;
    userType: string;
    departmentName: string;
    roleName: string[];
}
