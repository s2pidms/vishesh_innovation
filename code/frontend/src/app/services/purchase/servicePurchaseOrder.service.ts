import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class ServicePurchaseOrderService {
    routes: any = {
        createPath: "/purchase/spo/create",
        getAllPath: "/purchase/spo/getAll",
        getAllMasterDataPath: "/purchase/spo/getAllMasterData",
        getAllReportsPath: "/purchase/spo/getAllReports",
        excelDownloadReportsPath: "/purchase/spo/excelDownloadForReports",
        updatePath: (id: string) => `/purchase/spo/update/${id}`,
        getByIdPath: (id: string) => `/purchase/spo/getById/${id}`,
        getSPODetailsByIdPath: (id: string) => `/purchase/spo/getSPODetailsById/${id}`,
        deletePath: (id: string) => `/purchase/spo/delete/${id}`
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
    excelDownloadReports(params: any) {
        return this.http.getFile(this.routes.excelDownloadReportsPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getSPODetailsById(id: string) {
        return this.http.get(this.routes.getSPODetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
