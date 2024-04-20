import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SKUService {
    routes: any = {
        createPath: "/sales/SKU/create",
        getAllPath: "/sales/SKU/getAll",
        getMouldDataBySKUIdPath: "/sales/SKU/getMouldDataBySKUId",
        getAllMasterDataPath: "/sales/SKU/getAllMasterData",
        getAllReportPath: "/sales/salesOrder/getAllReports",
        updatePath: (id: string) => `/sales/SKU/update/${id}`,
        getByIdPath: (id: string) => `/sales/SKU/getById/${id}`,
        deletePath: (id: string) => `/sales/SKU/delete/${id}`,
        getAllSKUForCostEstimationPath: "/sales/SKU/getAllSKUForCostEstimation",
        getAllSKUMasterBySKUIdPath: (id: string) => `/sales/SKU/getAllSKUMasterBySKUId/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }

    getAllReport(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
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
    getAllSKUMasterBySKUId(id: string) {
        return this.http.get(this.routes.getAllSKUMasterBySKUIdPath(id)).pipe(map((res: any) => res));
    }
    getAllSKUForCostEstimation(params: any) {
        return this.http.get(this.routes.getAllSKUForCostEstimationPath, params).pipe(map((res: any) => res));
    }
    getMouldDataBySKUId(params: any) {
        return this.http.get(this.routes.getMouldDataBySKUIdPath, params).pipe(map((res: any) => res));
    }
}
