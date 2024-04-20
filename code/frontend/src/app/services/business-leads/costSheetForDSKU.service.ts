import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class CostSheetForDSKUService {
    routes: any = {
        createPath: "/businessLeads/DSKUCostSheet/create",
        getAllPath: "/businessLeads/DSKUCostSheet/getAll",
        getAllReportsPath: "/businessLeads/DSKUCostSheet/getAllReports",
        getAllMasterDataPath: "/businessLeads/DSKUCostSheet/getAllMasterData",
        getDSKUInCostSheetPath: "/businessLeads/DSKUCostSheet/getDSKUInCostSheet",
        getDSKUCostSheetDetailsByDSKUIdPath: (id: string) =>
            `/businessLeads/DSKUCostSheet/getDSKUCostSheetDetailsByDSKUId/${id}`,
        updatePath: (id: string) => `/businessLeads/DSKUCostSheet/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/DSKUCostSheet/getById/${id}`,
        getByIdForPdfPath: (id: string) => `/businessLeads/DSKUCostSheet/getByIdForPdf/${id}`,
        deletePath: (id: string) => `/businessLeads/DSKUCostSheet/delete/${id}`
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
    getAllPpvReports(params: any) {
        return this.http.get(this.routes.getAllPpvReports, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getDSKUInCostSheet(params: any) {
        return this.http.get(this.routes.getDSKUInCostSheetPath, params).pipe(map((res: any) => res));
    }
    getDSKUCostSheetDetailsByDSKUId(id: string) {
        return this.http.get(this.routes.getDSKUCostSheetDetailsByDSKUIdPath(id)).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getByIdForPdf(id: string) {
        return this.http.get(this.routes.getByIdForPdfPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
