import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class LeavesApplicationService {
    routes: any = {
        createPath: "/hr/leavesApplication/create",
        getAllPath: "/hr/leavesApplication/getAll",
        getAllMasterDataPath: "/hr/leavesApplication/getAllMasterData",
        updateOnCancelPath: (id: string) => `/hr/leavesApplication/updateOnCancel/${id}`,
        updatePath: (id: string) => `/hr/leavesApplication/update/${id}`,
        getByIdPath: (id: string) => `/hr/leavesApplication/getById/${id}`,
        deletePath: (id: string) => `/hr/leavesApplication/delete/${id}`,
        getAllReportsPath: `/hr/leavesApplication/getAllReports`,
        getPaidLeaveByEmpIdPath: (id: string) => `/hr/leavesApplication/getPaidLeaveByEmpId/${id}`,
        updateOnLeaveAdjustmentPath: (id: string) => `/hr/leavesApplication/updateOnLeaveAdjustment/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    updateOnCancel(id: string, payload: any) {
        return this.http.put(this.routes.updateOnCancelPath(id), payload).pipe(map((res: any) => res));
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

    getPaidLeavesById(id: string) {
        return this.http.get(this.routes.getPaidLeaveByEmpIdPath(id)).pipe(map((res: any) => res));
    }
    updateOnLeaveAdjustment(id: string, payload: any) {
        return this.http.put(this.routes.updateOnLeaveAdjustmentPath(id), payload).pipe(map((res: any) => res));
    }
}
