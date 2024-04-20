export interface Prospect {
    _id: string;
    prospectRegistrationCode: string;
    prospectName: string;
    customerCategory: string;
    status: string;
    contactPersonName: string;
    contactPersonNumber: string;
    prospectRegistrationDateS: string;
    contactPersonDepartment?: string;
    contactPersonDesignation?: string;
    contactPersonEmail?: string;
    country?: string;
    pinCode?: string;
    city?: string;
    state?: string;
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
}
