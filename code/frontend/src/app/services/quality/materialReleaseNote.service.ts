import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class MaterialReleaseNoteService {
    routes: any = {
        createPath: "/quality/mrn/create",
        getAllPath: "/quality/mrn/getAll",
        getRMSpecificationByItemIdPath: "/quality/mrn/getRMSpecificationByItemId",
        getAllMasterDataPath: "/quality/mrn/getAllMasterData",
        getAllMRNReportsPath: "/quality/mrn/getAllMRNReports",
        getAllReportsPath: "/quality/mrn/getAllReports",
        getAllSupplierWiseReportsPath: "/quality/mrn/getAllSupplierWiseReports",
        getAllItemWiseReportsPath: "/quality/mrn/getAllItemWiseReports",
        getAllRawMaterialInspectionReportsPath: "/quality/mrn/getAllRawMaterialInspectionReports",
        getByMRNIdForRMInspectionPath: "/quality/mrn/getByMRNIdForRMInspection",
        updatePath: (id: string) => `/quality/mrn/update/${id}`,
        getByIdPath: (id: string) => `/quality/mrn/getById/${id}`,
        getMRNDetailsByIdPath: (id: string) => `/quality/mrn/getMRNDetailsById/${id}`,
        deletePath: (id: string) => `/quality/mrn/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getRMSpecificationByItemId(params: any) {
        return this.http.get(this.routes.getRMSpecificationByItemIdPath, params).pipe(map((res: any) => res));
    }

    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMRNReports(params: any) {
        return this.http.get(this.routes.getAllMRNReportsPath, params).pipe(map((res: any) => res));
    }
    getAllSupplierWiseReports(params: any) {
        return this.http.get(this.routes.getAllSupplierWiseReportsPath, params).pipe(map((res: any) => res));
    }
    getAllItemWiseReports(params: any) {
        return this.http.get(this.routes.getAllItemWiseReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllRawMaterialInspectionReports(params: any) {
        return this.http.get(this.routes.getAllRawMaterialInspectionReportsPath, params).pipe(map((res: any) => res));
    }
    getByMRNIdForRMInspection(params: any) {
        return this.http.get(this.routes.getByMRNIdForRMInspectionPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getMRNDetailsById(id: string) {
        return this.http.get(this.routes.getMRNDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
