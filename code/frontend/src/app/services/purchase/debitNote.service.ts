import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class DebitNoteService {
    routes: any = {
        createPath: "/purchase/debitNote/create",
        getAllPath: "/purchase/debitNote/getAll",
        getAllReportsPath: "/purchase/debitNote/getAllReports",
        getAllDNSummaryReportsPath: "/purchase/debitNote/getAllDNSummaryReports",
        getAllMasterDataPath: "/purchase/debitNote/getAllMasterData",
        excelDownloadPPVpath: "/purchase/debitNote/excelDownloadForPPVReports",
        updatePath: (id: string) => `/purchase/debitNote/update/${id}`,
        getAllDebitNoteBySupplierIdPath: (id: string) => `/purchase/debitNote/getAllDebitNoteBySupplierId/${id}`,
        getByIdPath: (id: string) => `/purchase/debitNote/getById/${id}`,
        getDNDetailsByIdPath: (id: string) => `/purchase/debitNote/getDNDetailsById/${id}`,
        deletePath: (id: string) => `/purchase/debitNote/delete/${id}`
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
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllDNSummaryReports(params: any) {
        return this.http.get(this.routes.getAllDNSummaryReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
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
    getDNDetailsById(id: string) {
        return this.http.get(this.routes.getDNDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    getAllDebitNoteBySupplierId(id: string) {
        return this.http.get(this.routes.getAllDebitNoteBySupplierIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
