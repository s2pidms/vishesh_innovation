import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SupportService {
    routes: any = {
        createPath: "/supports/issue/create",
        getAllPath: "/supports/issue/getAll",
        getAllReportsPath: "/supports/issue/getAllReports",
        getAllMasterDataPath: "/supports/issue/getAllMasterData",
        updatePath: (id: string) => `/supports/issue/update/${id}`,
        getAllSubModuleListByMenuIdPath: (id: string) => `/supports/issue/getAllSubModuleListByMenuId/${id}`,
        getByIdPath: (id: string) => `/supports/issue/getById/${id}`,
        deletePath: (id: string) => `/supports/issue/delete/${id}`
    };

    constructor(private http: ApiService) {}
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getAllSubModuleListByMenuId(id: string) {
        return this.http.get(this.routes.getAllSubModuleListByMenuIdPath(id)).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
