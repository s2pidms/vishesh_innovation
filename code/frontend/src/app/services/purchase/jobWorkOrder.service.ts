import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class JobWorkOrderService {
    routes: any = {
        createPath: "/purchase/jobWorkOrder/create",
        getAllPath: "/purchase/jobWorkOrder/getAll",
        getAllReportsPath: "/purchase/jobWorkOrder/getAllReports",
        getAllMasterDataPath: "/purchase/jobWorkOrder/getAllMasterData",
        updatePath: (id: string) => `/purchase/jobWorkOrder/update/${id}`,
        getByIdPath: (id: string) => `/purchase/jobWorkOrder/getById/${id}`,
        getJWItemsByJobWorkerPath: (id: string) => `/purchase/jobWorkOrder/getJWItemsByJobWorker/${id}`,
        deletePath: (id: string) => `/purchase/jobWorkOrder/delete/${id}`,
        getByIdForPDFPath: (id: string) => `/purchase/jobWorkOrder/getByIdForPDF/${id}`
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
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    getJWItemsByJobWorker(id: string) {
        return this.http.get(this.routes.getJWItemsByJobWorkerPath(id)).pipe(map((res: any) => res));
    }
    getByIdForPDF(id: string) {
        return this.http.get(this.routes.getByIdForPDFPath(id)).pipe(map((res: any) => res));
    }
}
