import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SampleJCCreationService {
    routes: any = {
        createPath: "/businessLeads/sampleJCCreation/create",
        getAllPath: "/businessLeads/sampleJCCreation/getAll",
        getAllReportsPath: "/businessLeads/sampleJCCreation/getAllReports",
        getAllMasterDataPath: "/businessLeads/sampleJCCreation/getAllMasterData",
        getCustomersByCategoryPath: "/businessLeads/sampleJCCreation/getCustomersByCategory",
        getSampleJCDetailsByCustomerIdPath: "/businessLeads/sampleJCCreation/getSampleJCDetailsByCustomerId",
        getBOMBySKUIdPath: "/businessLeads/sampleJCCreation/getBOMBySKUId",
        updatePath: (id: string) => `/businessLeads/sampleJCCreation/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/sampleJCCreation/getById/${id}`,
        getByIdForPDFPath: (id: string) => `/businessLeads/sampleJCCreation/getByIdForPDF/${id}`,
        deletePath: (id: string) => `/businessLeads/sampleJCCreation/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getBOMBySKUId(params: any) {
        return this.http.get(this.routes.getBOMBySKUIdPath, params).pipe(map((res: any) => res));
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
    getSampleJCDetailsByCustomerId(params: any) {
        return this.http.get(this.routes.getSampleJCDetailsByCustomerIdPath, params).pipe(map((res: any) => res));
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
