import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class GoodsInwardEntryService {
    routes: any = {
        createPath: "/stores/gin/create",
        getAllPath: "/stores/gin/getAll",
        getAllMasterDataPath: "/stores/gin/getAllMasterData",
        getAllReportsPath: "/stores/gin/getAllReports",
        getReorderLevelReportsPath: "/stores/inventory/getReorderLevelReports",
        getStockAgingReportsPath: "/stores/inventory/getStockAgingReports",
        getAllInventoryLocationWiseReportsPath: "/stores/inventory/getAllInventoryLocationWiseReports",
        updatePath: (id: string) => `/stores/gin/update/${id}`,
        getByIdPath: (id: string) => `/stores/gin/getById/${id}`,
        deletePath: (id: string) => `/stores/gin/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
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
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getReorderLevelReports(params: any) {
        return this.http.get(this.routes.getReorderLevelReportsPath, params).pipe(map((res: any) => res));
    }
    getStockAgingReports(params: any) {
        return this.http.get(this.routes.getStockAgingReportsPath, params).pipe(map((res: any) => res));
    }
    getAllInventoryLocationWiseReports(params: any) {
        return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath, params).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
