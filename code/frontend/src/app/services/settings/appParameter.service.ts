import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class AppParameterService {
    routes: any = {
        createPath: "/settings/appParameter/create",
        getAllPath: "/settings/appParameter/getAll",
        getAllMasterDataPath: "/settings/appParameter/getAllMasterData",
        updatePath: (id: string) => `/settings/appParameter/update/${id}`,
        getByIdPath: (id: string) => `/settings/appParameter/getById/${id}`,
        getAppParameterValueByCodePath: (code: string) => `/settings/appParameter/getAppParameterValueByCode/${code}`,
        deleteByAppCodePath: (id: string) => `/settings/appParameter/deleteByAppCode/${id}`
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
    deleteByAppCode(appCode: string) {
        return this.http.delete(this.routes.deleteByAppCodePath(appCode)).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getAppParameterValueByCode(code: string) {
        return this.http.get(this.routes.getAppParameterValueByCodePath(code)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
