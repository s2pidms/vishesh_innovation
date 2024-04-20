import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class GoodsRequisitionService {
    routes: any = {
        createPath: "/production/goodsRequisition/create",
        getAllPath: "/production/goodsRequisition/getAll",
        getAllMasterDataPath: "/production/goodsRequisition/getAllMasterData",
        getAllFilterDataPath: "/production/goodsRequisition/getAllFilterData",
        getAllGRSummaryReportsPath: "/production/goodsRequisition/getAllGRSummaryReports",
        updatePath: (id: string) => `/production/goodsRequisition/update/${id}`,
        getByIdPath: (id: string) => `/production/goodsRequisition/getById/${id}`,
        deletePath: (id: string) => `/production/goodsRequisition/delete/${id}`,
        getAllGRFulfillmentReportsPath: "/production/goodsRequisition/getAllGRFulfillmentReports"
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
    getAllFilterData(params: any) {
        return this.http.get(this.routes.getAllFilterDataPath, params).pipe(map((res: any) => res));
    }
    getAllGRSummaryReports(params: any) {
        return this.http.get(this.routes.getAllGRSummaryReportsPath, params).pipe(map((res: any) => res));
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
    getAllGRFulfillmentReports(params: any) {
        return this.http.get(this.routes.getAllGRFulfillmentReportsPath, params).pipe(map((res: any) => res));
    }
}
