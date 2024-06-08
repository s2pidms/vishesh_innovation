import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class BOMOfJobWorkItemService {
    routes: any = {
        createPath: "/planning/BOMOfJobWorkItem/create",
        getAllPath: "/planning/BOMOfJobWorkItem/getAll",
        getAllInkPath: "/planning/BOMOfJobWorkItem/getAllInkListBySKUId",
        getBOMBySKUIdForMRPPath: "/planning/BOMOfJobWorkItem/getBOMBySKUIdForMRP",
        getAllMasterDataPath: "/planning/BOMOfJobWorkItem/getAllMasterData",
        getAllItemsForBOMOfJobWorkItemPath: "/planning/BOMOfJobWorkItem/getAllItemsForBOMOfJobWorkItem",
        updatePath: (id: string) => `/planning/BOMOfJobWorkItem/update/${id}`,
        getByIdPath: (id: string) => `/planning/BOMOfJobWorkItem/getById/${id}`,
        deletePath: (id: string) => `/planning/BOMOfJobWorkItem/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getBOMBySKUIdForMRP(params: any) {
        return this.http.get(this.routes.getBOMBySKUIdForMRPPath, params).pipe(map((res: any) => res));
    }
    getAllInkListBySKUId(params: any) {
        return this.http.get(this.routes.getAllInkPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllItemsForBOMOfJobWorkItem(params: any) {
        return this.http.get(this.routes.getAllItemsForBOMOfJobWorkItemPath, params).pipe(map((res: any) => res));
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
