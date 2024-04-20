import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class EmployeeAttendanceService {
    routes: any = {
        createPath: "/hr/employeeAttendance/create",
        uploadEmployeeAttendancePath: "/hr/employeeAttendance/uploadEmployeeAttendance",
        getAllPath: "/hr/employeeAttendance/getAll",
        getAllMasterDataPath: (date: string) => `/hr/employeeAttendance/getAllMasterData/${date}`,
        updatePath: (id: string) => `/hr/employeeAttendance/update/${id}`,
        getByIdPath: (id: string) => `/hr/employeeAttendance/getById/${id}`,
        deletePath: (id: string) => `/hr/employeeAttendance/delete/${id}`,
        getAllReportsPath: "/hr/employeeAttendance/getAllReports"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    uploadEmployeeAttendance(payload: any) {
        return this.http.post(this.routes.uploadEmployeeAttendancePath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(date: any) {
        return this.http.get(this.routes.getAllMasterDataPath(date)).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
}
