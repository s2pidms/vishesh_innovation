import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PayrollService {
    routes: any = {
        createPath: "/hr/payroll/create",
        getAllPath: "/hr/payroll/getAll",
        getAllMasterDataPath: (data: string) => `/hr/payroll/getAllMasterData/${data}`,
        updatePath: (id: string) => `/hr/payroll/update/${id}`,
        getByIdPath: (id: string) => `/hr/payroll/getById/${id}`,
        deletePath: (id: string) => `/hr/payroll/delete/${id}`,
        getAllReportsPath: "/hr/payroll/getAllReports"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
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
