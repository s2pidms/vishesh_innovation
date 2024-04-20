import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class QuotationOfDSKUService {
    routes: any = {
        createPath: "/sales/quotationDSKU/create",
        getAllPath: "/sales/quotationDSKU/getAll",
        getAllDSKUForQuotationDSKUByCustomerIdPath: "/sales/quotationDSKU/getAllDSKUForQuotationDSKUByCustomerId",
        getAllMasterDataPath: "/sales/quotationDSKU/getAllMasterData",
        getAllProspectsForQuotationDSKUByCategoryPath: "/sales/quotationDSKU/getAllProspectsForQuotationDSKUByCategory",
        getAllReportsPath: "/sales/quotationDSKU/getAllReports",
        updatePath: (id: string) => `/sales/quotationDSKU/update/${id}`,
        getByIdPath: (id: string) => `/sales/quotationDSKU/getById/${id}`,
        getByIdForPDFPath: (id: string) => `/sales/quotationDSKU/getByIdForPDF/${id}`,
        deletePath: (id: string) => `/sales/quotationDSKU/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllDSKUForQuotationDSKUByCustomerId(params: any) {
        return this.http
            .get(this.routes.getAllDSKUForQuotationDSKUByCustomerIdPath, params)
            .pipe(map((res: any) => res));
    }
    getAllProspectsForQuotationDSKUByCategory(params: any) {
        return this.http
            .get(this.routes.getAllProspectsForQuotationDSKUByCategoryPath, params)
            .pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
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
}
