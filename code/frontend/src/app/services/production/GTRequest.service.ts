import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class GTRequestService {
    routes: any = {
        createPath: "/planning/goodsTransferRequest/create",
        getAllPath: "/planning/goodsTransferRequest/getAll",
        getAllGtRequestFulfillmentReportsPath: "/planning/goodsTransferRequest/getAllGtRequestFulfillmentReports",
        getAllMasterDataPath: "/planning/goodsTransferRequest/getAllMasterData",
        getAllItemsByLocationAndDeptPath: "/planning/goodsTransferRequest/getAllItemsByLocationAndDept",
        getAllFilterDataPath: "/planning/goodsTransferRequest/getAllFilterData",
        getAllGRSummaryReportsPath: "/planning/goodsTransferRequest/getAllGRSummaryReports",
        updatePath: (id: string) => `/planning/goodsTransferRequest/update/${id}`,
        getByIdPath: (id: string) => `/planning/goodsTransferRequest/getById/${id}`,
        deletePath: (id: string) => `/planning/goodsTransferRequest/delete/${id}`,
        getAllGRFulfillmentReportsPath: "/planning/goodsTransferRequest/getAllGRFulfillmentReports"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllGtRequestFulfillmentReports(params: any) {
        return this.http.get(this.routes.getAllGtRequestFulfillmentReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllItemsByLocationAndDept(params: any) {
        return this.http.get(this.routes.getAllItemsByLocationAndDeptPath, params).pipe(map((res: any) => res));
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
