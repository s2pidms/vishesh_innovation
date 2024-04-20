import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class JobCardCreationService {
    routes: any = {
        createPath: "/planning/jobCard/create",
        getAllPath: "/planning/jobCard/getAll",
        getAllReportsPath: "/planning/jobCard/getAllReports",
        getAllMasterDataPath: "/planning/jobCard/getAllMasterData",
        getCustomersByCategoryPath: "/planning/jobCard/getCustomersByCategory",
        getJCDetailsByCustomerIdPath: "/planning/jobCard/getJCDetailsByCustomerId",
        getBOMBySKUOrDSKUPath: "/planning/jobCard/getBOMBySKUOrDSKU",
        updatePath: (id: string) => `/planning/jobCard/update/${id}`,
        getByIdPath: (id: string) => `/planning/jobCard/getById/${id}`,
        getByIdForPDFPath: (id: string) => `/planning/jobCard/getByIdForPDF/${id}`,
        deletePath: (id: string) => `/planning/jobCard/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getBOMBySKUOrDSKU(params: any) {
        return this.http.get(this.routes.getBOMBySKUOrDSKUPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllPpvReports(params: any) {
        return this.http.get(this.routes.getAllPpvReports, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getCustomersByCategory(params: any) {
        return this.http.get(this.routes.getCustomersByCategoryPath, params).pipe(map((res: any) => res));
    }
    getJCDetailsByCustomerId(params: any) {
        return this.http.get(this.routes.getJCDetailsByCustomerIdPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getByIdForPDF(id: string) {
        return this.http.get(this.routes.getByIdForPDFPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
