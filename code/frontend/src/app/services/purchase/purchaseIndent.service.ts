import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PurchaseIndentService {
    routes: any = {
        createPath: "/purchase/purchaseIndent/create",
        getAllPath: "/purchase/purchaseIndent/getAll",
        getChannelsByCategoryPath: "/purchase/purchaseIndent/getChannelsByCategory",
        getAllItemsForChannelsPath: "/purchase/purchaseIndent/getAllItemsForChannels",
        getAllItemsForSupplierPath: "/purchase/purchaseIndent/getAllItemsForSupplier",
        getAllReportsPath: "/purchase/purchaseIndent/getAllReports",
        getAllMasterDataPath: "/purchase/purchaseIndent/getAllMasterData",
        updatePath: (id: string) => `/purchase/purchaseIndent/update/${id}`,
        getByIdPath: (id: string) => `/purchase/purchaseIndent/getById/${id}`,
        getPIndentDetailsByIdPath: (id: string) => `/purchase/purchaseIndent/getPIndentDetailsById/${id}`,
        // getPODetailsByIdPath: (id: string) => `/purchase/purchaseIndent/getPODetailsById/${id}`,
        deletePath: (id: string) => `/purchase/purchaseIndent/delete/${id}`
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
    getMonthlySupplierEvaluation(params: any) {
        return this.http.get(this.routes.getMonthlySupplierEvaluationPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getPIndentDetailsById(id: string) {
        return this.http.get(this.routes.getPIndentDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    getAllItemsForChannels(params: any) {
        return this.http.get(this.routes.getAllItemsForChannelsPath, params).pipe(map((res: any) => res));
    }
    getChannelsByCategory(params: any) {
        return this.http.get(this.routes.getChannelsByCategoryPath, params).pipe(map((res: any) => res));
    }
    getAllItemsForSupplier(params: any) {
        return this.http.get(this.routes.getAllItemsForSupplierPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
