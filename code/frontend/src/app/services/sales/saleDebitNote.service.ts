import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SaleDebitNoteService {
    routes: any = {
        createPath: "/sales/salesDebitNote/create",
        getAllPath: "/sales/salesDebitNote/getAll",
        getAllReportsPath: "/sales/salesDebitNote/getAllReports",
        getAllDNSummaryReportsPath: "/sales/salesDebitNote/getAllDNSummaryReports",
        getAllDNDetailsReportsPath: "/sales/salesDebitNote/getAllDNDetailsReports",
        getAllMasterDataPath: "/sales/salesDebitNote/getAllMasterData",
        excelDownloadPPVpath: "/sales/salesDebitNote/excelDownloadForPPVReports",
        updatePath: (id: string) => `/sales/salesDebitNote/update/${id}`,
        getAllSalesDebitNoteByCustomerIdPath: (id: string) =>
            `/sales/salesDebitNote/getAllSalesDebitNoteByCustomerId/${id}`,
        getByIdPath: (id: string) => `/sales/salesDebitNote/getById/${id}`,
        getDNDetailsByIdPath: (id: string) => `/sales/salesDebitNote/getDNDetailsById/${id}`,
        deletePath: (id: string) => `/sales/salesDebitNote/delete/${id}`
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
    getAllDNDetailsReports(params: any) {
        return this.http.get(this.routes.getAllDNDetailsReportsPath, params).pipe(map((res: any) => res));
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
    getAllSalesDebitNoteByCustomerId(id: string) {
        return this.http.get(this.routes.getAllSalesDebitNoteByCustomerIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
