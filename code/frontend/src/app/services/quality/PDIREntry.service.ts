import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PDIREntryService {
    routes: any = {
        createPath: "/quality/PDIREntry/create",
        getAllPath: "/quality/PDIREntry/getAll",
        getProductSpecificationBySKUIdPath: "/quality/PDIREntry/getProductSpecificationBySKUId",
        getAllReportPath: "/quality/PDIREntry/getAllReports",
        getAllMasterDataPath: "/quality/PDIREntry/getAllMasterData",
        getAllSalesInvoiceForPDIREntryPath: "/quality/PDIREntry/getAllSalesInvoiceForPDIREntry",
        updatePath: (id: string) => `/quality/PDIREntry/update/${id}`,
        getPDIRDetailsBySalesInvoiceIdPath: (id: string) => `/quality/PDIREntry/getPDIRDetailsBySalesInvoiceId/${id}`,
        getByIdPath: (id: string) => `/quality/PDIREntry/getById/${id}`,
        getPDIRDetailsByIdPath: (id: string) => `/quality/PDIREntry/getPDIRDetailsById/${id}`,
        deletePath: (id: string) => `/quality/PDIREntry/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getProductSpecificationBySKUId(params: any) {
        return this.http.get(this.routes.getProductSpecificationBySKUIdPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllSalesInvoiceForPDIREntry(params: any) {
        return this.http.get(this.routes.getAllSalesInvoiceForPDIREntryPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getPDIRDetailsById(id: string) {
        return this.http.get(this.routes.getPDIRDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    getPDIRDetailsBySalesInvoiceId(id: string) {
        return this.http.get(this.routes.getPDIRDetailsBySalesInvoiceIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
