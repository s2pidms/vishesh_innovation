import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    routes: any = {
        dashBoard: "/dashboard/hr",
        createPath: "/hr/employee/create",
        getAllPath: "/hr/employee/getAll",
        getAllMasterDataPath: "/hr/employee/getAllMasterData",
        gradeStructurePath: "/hr/employee/gradeStructure",
        updatePath: (id: string) => `/hr/employee/update/${id}`,
        getByIdPath: (id: string) => `/hr/employee/getById/${id}`,
        deletePath: (id: string) => `/hr/employee/delete/${id}`,
        employeeExitReportPath: "/hr/employee/employeeExitReport"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    gradeStructure(payload: any) {
        return this.http.get(this.routes.gradeStructurePath, payload).pipe(map((res: any) => res));
    }
    employeeDepartmentWiseStructure(payload: any) {
        return this.http.get(this.routes.employeeExitReportPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllDash(params: any) {
        return this.http.get(this.routes.dashBoard, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
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
}
