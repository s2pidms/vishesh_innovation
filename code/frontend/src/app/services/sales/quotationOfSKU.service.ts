import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class QuotationOfSKUService {
    routes: any = {
        createPath: "/sales/quotationSKU/create",
        getAllPath: "/sales/quotationSKU/getAll",
        getAllMasterDataPath: "/sales/quotationSKU/getAllMasterData",
        getAllCustomersForQuotationSKUByCategoryPath: "/sales/quotationSKU/getAllCustomersForQuotationSKUByCategory",
        getAllSKUForQuotationSKUByCustomerIdPath: "/sales/quotationSKU/getAllSKUForQuotationSKUByCustomerId",
        getAllReportsPath: "/sales/quotationSKU/getAllReports",
        updatePath: (id: string) => `/sales/quotationSKU/update/${id}`,
        getByIdPath: (id: string) => `/sales/quotationSKU/getById/${id}`,
        getByIdForPDFPath: (id: string) => `/sales/quotationSKU/getByIdForPDF/${id}`,
        deletePath: (id: string) => `/sales/quotationSKU/delete/${id}`
    };
    constructor(private http: ApiService) {}
    getAllCustomersForQuotationSKUByCategory(params: any) {
        return this.http
            .get(this.routes.getAllCustomersForQuotationSKUByCategoryPath, params)
            .pipe(map((res: any) => res));
    }
    getAllSKUForQuotationSKUByCustomerId(params: any) {
        return this.http.get(this.routes.getAllSKUForQuotationSKUByCustomerIdPath, params).pipe(map((res: any) => res));
    }
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
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
