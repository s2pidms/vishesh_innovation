import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class DispatchRequestNoteService {
    routes: any = {
        createPath: "/sales/drn/create",
        getAllPath: "/sales/drn/getAll",
        getAllForCancelPath: "/sales/drn/getAllForCancel",
        getAllMasterDataPath: "/sales/drn/getAllMasterData",
        getAllReportsPath: "/sales/drn/getAllReports",
        updatePath: (id: string) => `/sales/drn/update/${id}`,
        getByIdPath: (id: string) => `/sales/drn/getById/${id}`,
        DRNDetailsByCustomerIdPath: (id: string) => `/sales/drn/DRNDetailsByCustomerId/${id}`,
        getAllDRNSummaryReportsPath: "/sales/drn/getAllDRNSummaryReports"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAllForCancel(params: any) {
        return this.http.get(this.routes.getAllForCancelPath, params).pipe(map((res: any) => res));
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
    getDRNDetailsByCustomerId(id: string) {
        return this.http.get(this.routes.DRNDetailsByCustomerIdPath(id)).pipe(map((res: any) => res));
    }
    getAllDRNSummaryReports(params: any) {
        return this.http.get(this.routes.getAllDRNSummaryReportsPath, params).pipe(map((res: any) => res));
    }
}
