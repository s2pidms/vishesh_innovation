import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class ItemCategoryService {
    routes: any = {
        createPath: "/purchase/itemCategoryMaster/create",
        getAllPath: "/purchase/itemCategoryMaster/getAll",
        getAllMasterDataPath: "/purchase/itemCategoryMaster/getAllMasterData",
        updatePath: (id: string) => `/purchase/itemCategoryMaster/update/${id}`,
        getByIdPath: (id: string) => `/purchase/itemCategoryMaster/getById/${id}`,
        deletePath: (id: string) => `/purchase/itemCategoryMaster/delete/${id}`,
        getMonthlyEvaluationBySupplierIdPath: (id: string) => `/stores/grn/getMonthlyEvaluationBySupplierId/${id}`
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
    getMonthlySupplierEvaluation(params: any) {
        return this.http.get(this.routes.getMonthlySupplierEvaluationPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getMonthlyEvaluationBySupplierId(id: string) {
        return this.http.get(this.routes.getMonthlyEvaluationBySupplierIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
