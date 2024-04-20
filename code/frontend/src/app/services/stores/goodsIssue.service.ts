import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class GoodsIssueService {
    routes: any = {
        createPath: "/stores/goodsIssue/create",
        getAllPath: "/stores/goodsIssue/getAll",
        getAllReportsPath: "/stores/goodsIssue/getAllReports",
        getAllMasterDataPath: "/stores/goodsIssue/getAllMasterData",
        updateOnResolveDiscrepancyPath: (id: string) => `/stores/goodsIssue/updateOnResolveDiscrepancy/${id}`,
        updatePath: (id: string) => `/stores/goodsIssue/update/${id}`,
        getByIdPath: (id: string) => `/stores/goodsIssue/getById/${id}`,
        getGoodRequisitionByIdPath: (id: string) => `/stores/goodsIssue/getGoodRequisitionById/${id}`,
        deletePath: (id: string) => `/stores/goodsIssue/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    updateOnResolveDiscrepancy(id: string, payload: any) {
        return this.http.put(this.routes.updateOnResolveDiscrepancyPath(id), payload).pipe(map((res: any) => res));
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
    getGoodRequisitionById(id: string) {
        return this.http.get(this.routes.getGoodRequisitionByIdPath(id)).pipe(map((res: any) => res));
    }
}
