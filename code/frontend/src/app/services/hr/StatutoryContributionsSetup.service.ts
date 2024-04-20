import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class StatutoryContributionsSetupService {
    routes: any = {
        createPath: "/hr/statutoryContributionsSetup/create",
        getAllPath: "/hr/statutoryContributionsSetup/getAll",
        getAllMasterDataPath: "/hr/statutoryContributionsSetup/getAllMasterData",
        updatePath: (id: string) => `/hr/statutoryContributionsSetup/update/${id}`,
        getByIdPath: (id: string) => `/hr/statutoryContributionsSetup/getById/${id}`,
        deletePath: (id: string) => `/hr/statutoryContributionsSetup/delete/${id}`,
        createOrUpdatePath: "/hr/statutoryContributionsSetup/createOrUpdate",
        getByCompanyIdPath: "/hr/statutoryContributionsSetup/getByCompanyId"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createOrUpdatePath, payload).pipe(map((res: any) => res));
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
    getByCompanyId(params: any) {
        return this.http.get(this.routes.getByCompanyIdPath, params).pipe(map((res: any) => res));
    }
}
