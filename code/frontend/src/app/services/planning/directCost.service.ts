import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class DirectCostService {
    routes: any = {
        createPath: "/planning/directCost/create",
        getAllPath: "/planning/directCost/getAll",
        getAllMasterDataPath: "/planning/directCost/getAllMasterData",
        getSKUDataPath: "/planning/directCost/getSKUData",
        updatePath: (id: string) => `/planning/directCost/update/${id}`,
        getByIdPath: (id: string) => `/planning/directCost/getById/${id}`,
        checkSKUExistsBySKUIdPath: (id: string) => `/planning/directCost/checkSKUExistsBySKUId/${id}`,
        deletePath: (id: string) => `/planning/directCost/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllPpvReports(params: any) {
        return this.http.get(this.routes.getAllPpvReports, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getSKUData(params: any) {
        return this.http.get(this.routes.getSKUDataPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    checkSKUExistsBySKUId(id: string) {
        return this.http.get(this.routes.checkSKUExistsBySKUIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
