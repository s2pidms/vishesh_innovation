import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class FinishedGoodsInwardEntryService {
    routes: any = {
        createPath: "/stores/FGIN/create",
        getAllPath: "/stores/FGIN/getAll",
        getAllReportPath: "/stores/FGIN/getAllReports",
        getAllMasterDataPath: "/stores/FGIN/getAllMasterData",
        getAllFGINMasterDataPath: "/stores/FGIN/getAllFGINMasterData",
        getAllFGINSummaryReportsPath: "/stores/FGIN/getAllFGINSummaryReports",
        getAllFGINLocationWiseReportsPath: "/stores/FGIN/getAllFGINLocationWiseReports",
        getAllFGINAllLocationReportsPath: "/stores/FGIN/getAllFGINAllLocationReports",
        getAllFGINByProductCategoryPath: "/stores/FGIN/getAllFGINByProductCategory",
        bulkCreatePath: "/stores/FGIN/bulkCreate",
        updatePath: (id: string) => `/stores/FGIN/update/${id}`,
        getByIdPath: (id: string) => `/stores/FGIN/getById/${id}`,
        deletePath: (id: string) => `/stores/FGIN/delete/${id}`,
        getAllFGINValueReportsPath: "/stores/FGIN/getAllFGINValueFinanceReports",
        getAllFGInventoryReportsPath: "/stores/FGIN/getAllFGInventoryReports"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllFGINMasterData(params: any) {
        return this.http.get(this.routes.getAllFGINMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllFGINSummaryReports(params: any) {
        return this.http.get(this.routes.getAllFGINSummaryReportsPath, params).pipe(map((res: any) => res));
    }
    getAllFGINLocationWiseReports(params: any) {
        return this.http.get(this.routes.getAllFGINLocationWiseReportsPath, params).pipe(map((res: any) => res));
    }
    getAllFGINByProductCategory(params: any) {
        return this.http.get(this.routes.getAllFGINByProductCategoryPath, params).pipe(map((res: any) => res));
    }
    getAllFGINAllLocationReports(params: any) {
        return this.http.get(this.routes.getAllFGINAllLocationReportsPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    bulkCreate(payload: any) {
        return this.http.post(this.routes.bulkCreatePath, payload).pipe(map((res: any) => res));
    }
    getAllFGINValueFinanceReports(params: any) {
        return this.http.get(this.routes.getAllFGINValueReportsPath, params).pipe(map((res: any) => res));
    }
    getAllFGInventoryReports(params: any) {
        return this.http.get(this.routes.getAllFGInventoryReportsPath, params).pipe(map((res: any) => res));
    }
}
