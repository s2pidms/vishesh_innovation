import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SKUService {
    routes: any = {
        createPath: "/sales/SKU/create",
        getAllPath: "/sales/SKU/getAll",
        getAllSKUDimExcelPath: "/sales/SKU/getAllSKUDimExcel",
        createCopyForSKUInkAttributesPath: "/sales/SKU/createCopyForSKUInkAttributes",
        getAllForCopyAttributesPath: "/sales/SKU/getAllForCopyAttributes",
        createCopyForSKUMaterialsAttributesPath: "/sales/SKU/createCopyForSKUMaterialsAttributes",
        getAllForAttributesPath: "/sales/SKU/getAllForAttributes",
        getAllForAttributesTrackingPath: "/sales/SKU/getAllForAttributesTracking",
        getMouldDataBySKUIdPath: "/sales/SKU/getMouldDataBySKUId",
        getAllMasterDataPath: "/sales/SKU/getAllMasterData",
        getAllReportPath: "/sales/salesOrder/getAllReports",
        createCopyForSKUDimAttributesPath: "/sales/SKU/createCopyForSKUDimAttributes",
        getByIdForSKUDimAttributesPath: (id: string) => `/sales/SKU/getByIdForSKUDimAttributes/${id}`,
        getByIdForSKUMaterialAttributesPath: (id: string) => `/sales/SKU/getByIdForSKUMaterialAttributes/${id}`,
        getByIdForSKUInkAttributesPath: (id: string) => `/sales/SKU/getByIdForSKUInkAttributes/${id}`,
        updatePath: (id: string) => `/sales/SKU/update/${id}`,
        getByIdPath: (id: string) => `/sales/SKU/getById/${id}`,
        deletePath: (id: string) => `/sales/SKU/delete/${id}`,
        getAllSKUForCostEstimationPath: "/sales/SKU/getAllSKUForCostEstimation",
        getAllSKUMasterBySKUIdPath: (id: string) => `/sales/SKU/getAllSKUMasterBySKUId/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    createCopyForSKUDimAttributes(payload: any) {
        return this.http.post(this.routes.createCopyForSKUDimAttributesPath, payload).pipe(map((res: any) => res));
    }
    createCopyForSKUMaterialsAttributes(payload: any) {
        return this.http.post(this.routes.createCopyForSKUMaterialsAttributesPath, payload).pipe(map((res: any) => res));
    }
    createCopyForSKUInkAttributes(payload: any) {
        return this.http.post(this.routes.createCopyForSKUInkAttributesPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllForCopyAttributes(params: any) {
        return this.http.get(this.routes.getAllForCopyAttributesPath, params).pipe(map((res: any) => res));
    }
    getAllForAttributes(params: any) {
        return this.http.get(this.routes.getAllForAttributesPath, params).pipe(map((res: any) => res));
    }
    getAllForAttributesTracking(params: any) {
        return this.http.get(this.routes.getAllForAttributesTrackingPath, params).pipe(map((res: any) => res));
    }
    getAllSKUDimExcel(params: any) {
        return this.http.get(this.routes.getAllSKUDimExcelPath, params).pipe(map((res: any) => res));
    }

    getAllReport(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
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
    getByIdForSKUDimAttributes(id: string) {
        return this.http.get(this.routes.getByIdForSKUDimAttributesPath(id)).pipe(map((res: any) => res));
    }
    getByIdForSKUMaterialAttributes(id: string) {
        return this.http.get(this.routes.getByIdForSKUMaterialAttributesPath(id)).pipe(map((res: any) => res));
    }
    getByIdForSKUInkAttributes(id: string) {
        return this.http.get(this.routes.getByIdForSKUInkAttributesPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    getAllSKUMasterBySKUId(id: string) {
        return this.http.get(this.routes.getAllSKUMasterBySKUIdPath(id)).pipe(map((res: any) => res));
    }
    getAllSKUForCostEstimation(params: any) {
        return this.http.get(this.routes.getAllSKUForCostEstimationPath, params).pipe(map((res: any) => res));
    }
    getMouldDataBySKUId(params: any) {
        return this.http.get(this.routes.getMouldDataBySKUIdPath, params).pipe(map((res: any) => res));
    }
}
