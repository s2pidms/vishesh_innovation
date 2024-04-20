import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PurchaseOrderService {
    routes: any = {
        createPath: "/purchase/po/create",
        getAllPath: "/purchase/po/getAll",
        getAllMasterDataPath: "/purchase/po/getAllMasterData",
        getSupplierByCategoryPath: "/purchase/po/getSupplierByCategory",
        excelDownloadPPVpath: "/purchase/po/excelDownloadForPPVReports",
        updatePath: (id: string) => `/purchase/po/update/${id}`,
        getByIdPath: (id: string) => `/purchase/po/getById/${id}`,
        getPODetailsByIdPath: (id: string) => `/purchase/po/getPODetailsById/${id}`,
        deletePath: (id: string) => `/purchase/po/delete/${id}`,
        getAllReports: "/purchase/po/getAllReports",
        getAllPOSummaryReportsPath: "/purchase/po/getAllPOSummaryReports",
        getAllPOCostAnalysisReportsPath: "/purchase/po/getAllPOCostAnalysisReports",
        getAllPpvReports: "/purchase/po/getAllPPVReports",
        getAllPPVSummaryReportsPath: "/purchase/po/getAllPPVSummaryReports",
        getAllItemConsumptionReportsPath: "/purchase/po/getAllItemConsumptionReports",
        getAllPPVReportsBySupplierPath: "/purchase/po/getAllPPVReportsBySupplier",
        getAllOutstandingPOReportPath: "/purchase/po/getAllOutstandingPOReports",
        getAllPPVDetailsReportsPath: "/purchase/po/getAllPPVDetailsReports",
        getAllShortPOForClosingPath: "/purchase/po/getAllShortPOForClosing",
        getAllPurchaseRateAnalysisByItemPath: "/purchase/po/getAllPurchaseRateAnalysisByItem",
        updatePODetailsLineStatusByIdPath: (id: string) => `/purchase/po/updatePODetailsLineStatusById/${id}`,
        getAllItemsForSupplierPath: "/purchase/po/getAllItemsForSupplier"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }

    getAllPPVExcel(params: any) {
        return this.http.get(this.routes.excelDownloadPPVpath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReports, params).pipe(map((res: any) => res));
    }
    getAllPpvReports(params: any) {
        return this.http.get(this.routes.getAllPpvReports, params).pipe(map((res: any) => res));
    }
    getAllPOSummaryReports(params: any) {
        return this.http.get(this.routes.getAllPOSummaryReportsPath, params).pipe(map((res: any) => res));
    }
    getAllPOCostAnalysisReports(params: any) {
        return this.http.get(this.routes.getAllPOCostAnalysisReportsPath, params).pipe(map((res: any) => res));
    }
    getAllPPVSummaryReports(params: any) {
        return this.http.get(this.routes.getAllPPVSummaryReportsPath, params).pipe(map((res: any) => res));
    }
    getAllPPVReportsBySupplier(params: any) {
        return this.http.get(this.routes.getAllPPVReportsBySupplierPath, params).pipe(map((res: any) => res));
    }
    getAllPPVDetailsReports(params: any) {
        return this.http.get(this.routes.getAllPPVDetailsReportsPath, params).pipe(map((res: any) => res));
    }

    getAllOutstandingPOReport(params: any) {
        return this.http.get(this.routes.getAllOutstandingPOReportPath, params).pipe(map((res: any) => res));
    }
    getAllItemConsumptionReports(params: any) {
        return this.http.get(this.routes.getAllItemConsumptionReportsPath, params).pipe(map((res: any) => res));
    }

    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getSupplierByCategory(params: any) {
        return this.http.get(this.routes.getSupplierByCategoryPath, params).pipe(map((res: any) => res));
    }
    excelDownload(params: any) {
        return this.http.getFile(this.routes.excelDownloadPPVpath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getPODetailsById(id: string) {
        return this.http.get(this.routes.getPODetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    getAllShortPOForClosing(params: any) {
        return this.http.get(this.routes.getAllShortPOForClosingPath, params).pipe(map((res: any) => res));
    }
    getAllPurchaseRateAnalysisByItem(params: any) {
        return this.http.get(this.routes.getAllPurchaseRateAnalysisByItemPath, params).pipe(map((res: any) => res));
    }
    updatePODetailsLineStatusById(id: string, payload: any) {
        return this.http.put(this.routes.updatePODetailsLineStatusByIdPath(id), payload).pipe(map((res: any) => res));
    }
    getAllItemsForSupplier(params: any) {
        return this.http.get(this.routes.getAllItemsForSupplierPath, params).pipe(map((res: any) => res));
    }
}
