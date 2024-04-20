export interface IGTResponse {
    _id: string;
    GTNo: string;
    GTRequestNo: string;
    location: string;
    fromDepartment?: string;
    toDepartment: string;
    status: string;
    GTRequestDate: string;
    GTDate: string;
}
