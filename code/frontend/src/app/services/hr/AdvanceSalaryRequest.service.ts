import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class AdvanceSalaryRequestService {
    routes: any = {
        createPath: "/hr/advanceSalaryRequest/create",
        getAllPath: "/hr/advanceSalaryRequest/getAll",
        getAllMasterDataPath: "/hr/advanceSalaryRequest/getAllMasterData",
        updatePath: (id: string) => `/hr/advanceSalaryRequest/update/${id}`,
        getByIdPath: (id: string) => `/hr/advanceSalaryRequest/getById/${id}`,
        deletePath: (id: string) => `/hr/advanceSalaryRequest/delete/${id}`
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
