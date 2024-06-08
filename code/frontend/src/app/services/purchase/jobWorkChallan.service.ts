import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class JobWorkChallanService {
    routes: any = {
        createPath: "/purchase/jobWorkChallan/create",
        getAllPath: "/purchase/jobWorkChallan/getAll",
        getAllMasterDataPath: "/purchase/jobWorkChallan/getAllMasterData",
        getSupplierByCategoryPath: "/purchase/jobWorkChallan/getSupplierByCategory",
        getAllJobWorkerItemsOptionsPath: "/purchase/jobWorkChallan/getAllJobWorkerItemsOptions",
        updatePath: (id: string) => `/purchase/jobWorkChallan/update/${id}`,
        getByIdPath: (id: string) => `/purchase/jobWorkChallan/getById/${id}`,
        getByIdForPDFPath: (id: string) => `/purchase/jobWorkChallan/getByIdForPDF/${id}`,
        deletePath: (id: string) => `/purchase/jobWorkChallan/delete/${id}`,
        getAllReports: "/purchase/jobWorkChallan/getAllReports",
        getAllPOSummaryReportsPath: "/purchase/jobWorkChallan/getAllPOSummaryReports",
        getAllPOCostAnalysisReportsPath: "/purchase/jobWorkChallan/getAllPOCostAnalysisReports",
        getAllPpvReports: "/purchase/jobWorkChallan/getAllPPVReports",
        getAllPPVSummaryReportsPath: "/purchase/jobWorkChallan/getAllPPVSummaryReports",
        getAllItemConsumptionReportsPath: "/purchase/jobWorkChallan/getAllItemConsumptionReports",
        getAllPPVReportsBySupplierPath: "/purchase/jobWorkChallan/getAllPPVReportsBySupplier",
        getAllOutstandingPOReportPath: "/purchase/jobWorkChallan/getAllOutstandingPOReports",
        getAllPPVDetailsReportsPath: "/purchase/jobWorkChallan/getAllPPVDetailsReports",
        getAllShortPOForClosingPath: "/purchase/jobWorkChallan/getAllShortPOForClosing",
        getAllPurchaseRateAnalysisByItemPath: "/purchase/jobWorkChallan/getAllPurchaseRateAnalysisByItem",
        updatePODetailsLineStatusByIdPath: (id: string) =>
            `/purchase/jobWorkChallan/updatePODetailsLineStatusById/${id}`,
        getAllItemsForSupplierPath: "/purchase/jobWorkChallan/getAllItemsForSupplier"
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }

    getAllJobWorkerItemsOptions(params: any) {
        return this.http.get(this.routes.getAllJobWorkerItemsOptionsPath, params).pipe(map((res: any) => res));
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
    getByIdForPDF(id: string) {
        return this.http.get(this.routes.getByIdForPDFPath(id)).pipe(map((res: any) => res));
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
