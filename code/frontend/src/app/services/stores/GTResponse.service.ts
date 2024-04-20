import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class GTResponseService {
    routes: any = {
        createPath: "/stores/goodsTransferResponse/create",
        getAllPath: "/stores/goodsTransferResponse/getAll",
        getAllReportsPath: "/stores/goodsTransferResponse/getAllReports",
        getAllMasterDataPath: "/stores/goodsTransferResponse/getAllMasterData",
        updateOnResolveDiscrepancyPath: (id: string) =>
            `/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${id}`,
        updatePath: (id: string) => `/stores/goodsTransferResponse/update/${id}`,
        getByIdPath: (id: string) => `/stores/goodsTransferResponse/getById/${id}`,
        getItemByGTRequestIdPath: (id: string) => `/stores/goodsTransferResponse/getItemByGTRequestId/${id}`,
        deletePath: (id: string) => `/stores/goodsTransferResponse/delete/${id}`
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
    getItemByGTRequestId(id: string) {
        return this.http.get(this.routes.getItemByGTRequestIdPath(id)).pipe(map((res: any) => res));
    }
}
