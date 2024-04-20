import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class CostSheetComponentService {
    routes: any = {
        createPath: "/businessLeads/costSheet/create",
        getAllPath: "/businessLeads/costSheet/getAll",
        getAllMasterDataPath: "/businessLeads/costSheet/getAllMasterData",
        getAllCostEstimateMasterDataPath: "/businessLeads/costSheet/getAllSKUCostEstimateMasterData",
        getAllDSKUCostEstimateMasterDataPath: "/businessLeads/costSheet/getAllDSKUCostEstimateMasterData",
        updatePath: (id: string) => `/businessLeads/costSheet/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/costSheet/getById/${id}`,
        deletePath: (id: string) => `/businessLeads/costSheet/delete/${id}`
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
    getAllSKUCostEstimateMasterData(params: any) {
        return this.http.get(this.routes.getAllCostEstimateMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllDSKUCostEstimateMasterData(params: any) {
        return this.http.get(this.routes.getAllDSKUCostEstimateMasterDataPath, params).pipe(map((res: any) => res));
    }
    getMonthlySupplierEvaluation(params: any) {
        return this.http.get(this.routes.getMonthlySupplierEvaluationPath, params).pipe(map((res: any) => res));
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
