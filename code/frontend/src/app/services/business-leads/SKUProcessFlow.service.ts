import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SKUProcessFlowService {
    routes: any = {
        createPath: "/businessLeads/SKUProcessFlow/create",
        createCopyPath: "/businessLeads/SKUProcessFlow/createCopy",
        getAllPath: "/businessLeads/SKUProcessFlow/getAll",
        getAllCopyFlowMasterDataPath: "/businessLeads/SKUProcessFlow/getAllCopyFlowMasterData",
        getAllMasterDataPath: "/businessLeads/SKUProcessFlow/getAllMasterData",
        updatePath: (id: string) => `/businessLeads/SKUProcessFlow/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/SKUProcessFlow/getById/${id}`,
        getBySKUIdPath: (id: string) => `/businessLeads/SKUProcessFlow/getBySKUId/${id}`,
        deletePath: (id: string) => `/businessLeads/SKUProcessFlow/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    createCopy(payload: any) {
        return this.http.post(this.routes.createCopyPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllCopyFlowMasterData(params: any) {
        return this.http.get(this.routes.getAllCopyFlowMasterDataPath, params).pipe(map((res: any) => res));
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
    getBySKUId(id: string) {
        return this.http.get(this.routes.getBySKUIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
