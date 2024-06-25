import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class JobCardEntryService {
    routes: any = {
        createPath: "/production/jobCardEntry/create",
        createOrUpdatePath: "/production/jobCardEntry/createOrUpdate",
        getAllPath: "/production/jobCardEntry/getAll",
        getAllMasterDataPath: "/production/jobCardEntry/getAllMasterData",
        getProcessFromDirectCostBySKUIdPath: "/production/jobCardEntry/getProcessFromDirectCostBySKUId",
        getJCEntryDataByJobCardIdPath: "/production/jobCardEntry/getJCEntryDataByJobCardId",
        getAllForRejectionPath: "/production/jobCardEntry/getAllForRejection",
        updatePath: (id: string) => `/production/jobCardEntry/update/${id}`,
        getByIdPath: (id: string) => `/production/jobCardEntry/getById/${id}`,
        deletePath: (id: string) => `/production/jobCardEntry/delete/${id}`
    };
    constructor(private http: ApiService) {}
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    createOrUpdate(payload: any) {
        return this.http.post(this.routes.createOrUpdatePath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getProcessFromDirectCostBySKUId(params: any) {
        return this.http.get(this.routes.getProcessFromDirectCostBySKUIdPath, params).pipe(map((res: any) => res));
    }
    getJCEntryDataByJobCardId(params: any) {
        return this.http.get(this.routes.getJCEntryDataByJobCardIdPath, params).pipe(map((res: any) => res));
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
    getAllForRejectionData(payload: any) {
        return this.http.get(this.routes.getAllForRejectionPath, payload).pipe(map((res: any) => res));
    }
}
