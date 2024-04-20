import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SalesOrderService {
    routes: any = {
        createPath: "/sales/salesOrder/create",
        getAllPath: "/sales/salesOrder/getAll",
        getAllSalesSKUListPath: "/sales/salesOrder/getAllSalesSKUList",
        getAllSalesSKUListOnOpenPOPath: "/sales/salesOrder/getAllSalesSKUListOnOpenPO",
        getAllSOConfirmationReportsPath: "/sales/salesOrder/getAllSOConfirmationReports",
        getBackSalesOrderBySOPath: "/sales/salesOrder/getBackSalesOrderBySO",
        getAllSalesOrderReportsPath: "/sales/salesOrder/getAllSalesOrderReports",
        getAllSalesOrderStatusReportsPath: "/sales/salesOrder/getAllSalesOrderStatusReports",
        getAllShortSOForClosing: "/sales/salesOrder/getAllShortSOForClosing",
        getAllSOCostAnalysisReports: "/sales/salesOrder/getAllSOCostAnalysisReports",
        getAllSalesTrendAnalysisReports: "/sales/salesOrder/getAllSalesTrendAnalysisReports",
        getBackSalesOrderBySKUPath: "/sales/salesOrder/getBackSalesOrderBySKU",
        getAllMasterDataPath: "/sales/salesOrder/getAllMasterData",
        getAllCancelSalesOrder: "/sales/salesOrder/getAllCancelSalesOrder",
        getAllPurchaseVsInvoiceReports: "/sales/salesOrder/getAllPurchaseVsInvoiceReports",
        updatePath: (id: string) => `/sales/salesOrder/update/${id}`,
        getByIdPath: (id: string) => `/sales/salesOrder/getById/${id}`,
        getSOConfirmationByIdPath: (id: string) => `/sales/salesOrder/getSOConfirmationById/${id}`,
        deletePath: (id: string) => `/sales/salesOrder/delete/${id}`,
        updateSODetailsLineStatusByIdPath: (id: string) => `/sales/salesOrder/updateSODetailsLineStatusById/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }

    getAllSalesSKUList(params: any) {
        return this.http.get(this.routes.getAllSalesSKUListPath, params).pipe(map((res: any) => res));
    }
    getAllSalesSKUListOnOpenPO(params: any) {
        return this.http.get(this.routes.getAllSalesSKUListOnOpenPOPath, params).pipe(map((res: any) => res));
    }
    getAllCancelSalesOrder(params: any) {
        return this.http.get(this.routes.getAllCancelSalesOrder, params).pipe(map((res: any) => res));
    }
    getAllSOConfirmationReports(params: any) {
        return this.http.get(this.routes.getAllSOConfirmationReportsPath, params).pipe(map((res: any) => res));
    }

    getBackSalesOrderBySO(params: any) {
        return this.http.get(this.routes.getBackSalesOrderBySOPath, params).pipe(map((res: any) => res));
    }
    getAllSalesOrderReports(params: any) {
        return this.http.get(this.routes.getAllSalesOrderReportsPath, params).pipe(map((res: any) => res));
    }
    getAllSalesOrderStatusReports(params: any) {
        return this.http.get(this.routes.getAllSalesOrderStatusReportsPath, params).pipe(map((res: any) => res));
    }
    getAllShortSOForClosing(params: any) {
        return this.http.get(this.routes.getAllShortSOForClosing, params).pipe(map((res: any) => res));
    }
    getAllSOCostAnalysisReports(params: any) {
        return this.http.get(this.routes.getAllSOCostAnalysisReports, params).pipe(map((res: any) => res));
    }
    getAllPurchaseVsInvoiceReports(params: any) {
        return this.http.get(this.routes.getAllPurchaseVsInvoiceReports, params).pipe(map((res: any) => res));
    }
    getAllSalesTrendAnalysisReports(params: any) {
        return this.http.get(this.routes.getAllSalesTrendAnalysisReports, params).pipe(map((res: any) => res));
    }

    getBackSalesOrderBySKUPath(params: any) {
        return this.http.get(this.routes.getBackSalesOrderBySKUPath, params).pipe(map((res: any) => res));
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
    getSOConfirmationById(id: string) {
        return this.http.get(this.routes.getSOConfirmationByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    updateSODetailsLineStatusById(id: string, payload: any) {
        return this.http.put(this.routes.updateSODetailsLineStatusByIdPath(id), payload).pipe(map((res: any) => res));
    }
}
