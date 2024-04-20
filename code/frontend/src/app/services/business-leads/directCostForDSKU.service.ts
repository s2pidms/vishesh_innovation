import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class DirectCostForDSKUService {
    routes: any = {
        createPath: "/businessLeads/directCostDSKU/create",
        getAllPath: "/businessLeads/directCostDSKU/getAll",
        getAllMasterDataPath: "/businessLeads/directCostDSKU/getAllMasterData",
        getDSKUDataPath: "/businessLeads/directCostDSKU/getDSKUData",
        updatePath: (id: string) => `/businessLeads/directCostDSKU/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/directCostDSKU/getById/${id}`,
        checkSKUExistsByDSKUIdIdPath: (id: string) => `/businessLeads/directCostDSKU/checkSKUExistsByDSKUId/${id}`,
        deletePath: (id: string) => `/businessLeads/directCostDSKU/delete/${id}`
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
    getDSKUData(params: any) {
        return this.http.get(this.routes.getDSKUDataPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    checkSKUExistsByDSKUIdId(id: string) {
        return this.http.get(this.routes.checkSKUExistsByDSKUIdIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
