import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class InventoryCorrectionService {
    routes: any = {
        createPath: "/stores/inventory/create",
        getAllPath: "/stores/inventory/getAll",
        uploadInventoryFilePath: "/stores/inventory/uploadInventoryFile",
        getAllReportPath: "/stores/inventory/getAllReports",
        getAllMasterDataPath: "/stores/inventory/getAllMasterData",
        getStockPreparationShopReportsPath: "/stores/inventory/getStockPreparationShopReports",
        getAllFilterDataPath: "/stores/inventory/getAllFilterData",
        updatePath: "/stores/inventory/update",
        updateSPSInventoryPath: "/stores/inventory/updateSPSInventory",
        getAllStockPreparationShopPath: "/stores/inventory/getAllStockPreparationShop",
        getAllLocationSupplierItemWiseReportsPath: "/stores/inventory/getAllLocationSupplierItemWiseReports",
        getByIdPath: (id: string) => `/stores/inventory/getById/${id}`,
        deletePath: (id: string) => `/stores/inventory/delete/${id}`
    };
    constructor(private http: ApiService) {}

    uploadInventoryFile(payload: any) {
        return this.http.post(this.routes.uploadInventoryFilePath, payload).pipe(map((res: any) => res));
    }
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllStockPreparationShop(params: any) {
        return this.http.get(this.routes.getAllStockPreparationShopPath, params).pipe(map((res: any) => res));
    }
    getAllLocationSupplierItemWiseReports(params: any) {
        return this.http
            .get(this.routes.getAllLocationSupplierItemWiseReportsPath, params)
            .pipe(map((res: any) => res));
    }
    getAllReport(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
    getAllMasterFilterData(params: any) {
        return this.http.get(this.routes.getAllFilterDataPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getStockPreparationShopReports(params: any) {
        return this.http.get(this.routes.getStockPreparationShopReportsPath, params).pipe(map((res: any) => res));
    }
    update(payload: any) {
        return this.http.put(this.routes.updatePath, payload).pipe(map((res: any) => res));
    }
    updateSPSInventory(payload: any) {
        return this.http.put(this.routes.updateSPSInventoryPath, payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
