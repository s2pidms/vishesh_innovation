import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SKUCostSheetService {
    routes: any = {
        createPath: "/planning/SKUCostSheet/create",
        getAllPath: "/planning/SKUCostSheet/getAll",
        getAllReportsPath: "/planning/SKUCostSheet/getAllReports",
        getAllMasterDataPath: "/planning/SKUCostSheet/getAllMasterData",
        getSKUInCostSheetPath: "/planning/SKUCostSheet/getSKUInCostSheet",
        getSKUCostSheetDetailsBySKUIdPath: (id: string) => `/planning/SKUCostSheet/getSKUCostSheetDetailsBySKUId/${id}`,
        updatePath: (id: string) => `/planning/SKUCostSheet/update/${id}`,
        getByIdPath: (id: string) => `/planning/SKUCostSheet/getById/${id}`,
        getByIdForPdfPath: (id: string) => `/planning/SKUCostSheet/getByIdForPdf/${id}`,
        deletePath: (id: string) => `/planning/SKUCostSheet/delete/${id}`
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
    getSKUInCostSheet(params: any) {
        return this.http.get(this.routes.getSKUInCostSheetPath, params).pipe(map((res: any) => res));
    }
    getSKUCostSheetDetailsBySKUId(id: string) {
        return this.http.get(this.routes.getSKUCostSheetDetailsBySKUIdPath(id)).pipe(map((res: any) => res));
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
